const termPattern = /:term\[([^\]]+)\]\{href="([^"]+)"(?:\s+preview="([^"]*)")?\}/g;
const protectedTypes = new Set(['code', 'inlineCode', 'html', 'link', 'linkReference', 'image', 'imageReference']);

function plainText(node) {
	if (node.type === 'text') return node.value;
	return (node.children || []).map(plainText).join('');
}

function termNodes(value) {
	const nodes = [];
	let cursor = 0;
	for (const match of value.matchAll(termPattern)) {
		const index = match.index ?? 0;
		if (index > cursor) nodes.push({ type: 'text', value: value.slice(cursor, index) });
		const [, label, href, preview] = match;
		if (!href.startsWith('/')) { nodes.push({ type: 'text', value: match[0] }); cursor = index + match[0].length; continue; }
		nodes.push({ type: 'link', url: href, children: [{ type: 'text', value: label }], data: { hProperties: { className: ['tv-term'], 'data-tv-preview': preview || '' } } });
		cursor = index + match[0].length;
	}
	if (!cursor) return null;
	if (cursor < value.length) nodes.push({ type: 'text', value: value.slice(cursor) });
	return nodes;
}

export default function termPopovers() {
	return (tree) => {
		const transform = (parent) => {
			if (!Array.isArray(parent.children)) return;
			const output = [];
			for (let i = 0; i < parent.children.length; i++) {
				const node = parent.children[i];
				if (node.type === 'heading' && ['Popup preview', 'Prévia do popup'].includes(plainText(node).trim())) {
					const children = [];
					while (i + 1 < parent.children.length && !(parent.children[i + 1].type === 'heading' && parent.children[i + 1].depth <= node.depth)) children.push(parent.children[++i]);
					output.push({ type: 'containerDirective', name: 'tv-popup-preview-source', attributes: {}, children, data: { hName: 'div', hProperties: { className: ['tv-popup-preview-source'], 'data-tv-popup-preview-source': '' } } });
					continue;
				}
				if (node.type === 'paragraph' && /^::table-large\[(.+)\]$/.test(plainText(node).trim()) && parent.children[i + 1]?.type === 'table') {
					const caption = plainText(node).trim().match(/^::table-large\[(.+)\]$/)[1];
					const table = parent.children[++i];
					table.data = { ...(table.data || {}), hProperties: { ...(table.data?.hProperties || {}), className: ['tv-table-large'] } };
					output.push({ type: 'figure', data: { hName: 'figure', hProperties: { className: ['tv-table-figure', 'tv-table-figure--large'] } }, children: [{ type: 'html', value: `<figcaption>${caption.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;')}</figcaption>` }, table] });
					continue;
				}
				if (node.type === 'text') { output.push(...(termNodes(node.value) || [node])); continue; }
				if (!protectedTypes.has(node.type)) transform(node);
				output.push(node);
			}
			parent.children = output;
		};
		transform(tree);
	};
}
