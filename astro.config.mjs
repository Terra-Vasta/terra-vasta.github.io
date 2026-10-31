// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://terra-vasta.github.io',
	integrations: [
		starlight({
			title: 'A Terra Vasta',
			description: 'Um sistema de fantasia sombria e um cenário de sobrevivência, exploração e decadência cósmica.',
			defaultLocale: 'root',
			locales: {
				root: { label: 'Português (Brasil)', lang: 'pt-BR' },
				'en-us': { label: 'English (US)', lang: 'en-US' },
			},
			customCss: ['./src/styles/custom.css'],
			components: {
				Header: './src/components/TerraHeader.astro',
				Footer: './src/components/TerraFooter.astro',
			},
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/Terra-Vasta/terra-vasta.github.io',
				},
			],
			sidebar: [
				{
					label: 'Início',
					translations: { 'en-US': 'Home' },
					items: [{ slug: 'index' }],
				},
				{
					label: 'Sistema',
					translations: { 'en-US': 'System' },
					items: [{ autogenerate: { directory: 'sistema' } }],
				},
				{
					label: 'Cenário',
					translations: { 'en-US': 'Setting' },
					items: [{ autogenerate: { directory: 'cenario' } }],
				},
				{
					label: 'Compêndios',
					translations: { 'en-US': 'Compendiums' },
					items: [{ autogenerate: { directory: 'compendios' } }],
				},
				{
					label: 'Créditos e licenças',
					translations: { 'en-US': 'Credits and licenses' },
					items: [{ slug: 'creditos-e-licencas' }],
				},
			],
		}),
	],
});
