/**
 * Marks only explicitly annotated terms as colored preview links.
 * Author syntax: :term[Prone]{href="/sistema/condicoes/#caido" preview="Resumo curto da condição."}
 */
const termPattern = /:term\[([^\]]+)\]\{href="([^"]+)"\s+preview="([^"]+)"\}/g;
const protectedNodeTypes = new Set(['code', 'inlineCode', 'html', 'link', 'linkReference', 'image', 'imageReference']);

function parseTermText(value) {
	const nodes = [];
	let previousEnd = 0;
	for (const match of value.matchAll(termPattern)) {
		const start = match.index ?? 0;
		if (start > previousEnd) nodes.push({ type: 'text', value: value.slice(previousEnd, start) });
		const [, label, href, preview] = match;
		if (!href.startsWith('/')) {
			nodes.push({ type: 'text', value: match[0] });
			previousEnd = start + match[0].length;
			continue;
		}
		nodes.push({
			type: 'link',
			url: href,
			children: [{ type: 'text', value: label }],
			data: {
				hProperties: {
					className: ['tv-term'],
					'data-tv-preview': preview,
				},
			},
		});
		previousEnd = start + match[0].length;
	}
	if (previousEnd === 0) return null;
	if (previousEnd < value.length) nodes.push({ type: 'text', value: value.slice(previousEnd) });
	return nodes;
}

export default function termPopovers() {
	return (tree) => {
		function visit(parent) {
			if (!Array.isArray(parent.children)) return;
			parent.children = parent.children.flatMap((node) => {
				if (node.type === 'text') return parseTermText(node.value) ?? [node];
				if (!protectedNodeTypes.has(node.type)) visit(node);
				return [node];
			});
		}
		visit(tree);
	};
}
