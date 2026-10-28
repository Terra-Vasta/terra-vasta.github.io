import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

const localizedEntity = {
	title: z.string().min(1),
	translationKey: z.string().min(1),
	locale: z.enum(['pt-BR', 'en-US']),
	published: z.boolean().default(true),
};

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
	i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
	pericias: defineCollection({
		loader: glob({ pattern: '**/*.md', base: './src/content/pericias' }),
		schema: z.object({
			...localizedEntity,
			habilidade: z.string().min(1),
			exemploDeUso: z.string().min(1),
		}),
	}),
	talentos: defineCollection({
		loader: glob({ pattern: '**/*.md', base: './src/content/talentos' }),
		schema: z.object({
			...localizedEntity,
			categoria: z.string().min(1),
			preRequisito: z.string().optional(),
		}),
	}),
	magias: defineCollection({
		loader: glob({ pattern: '**/*.md', base: './src/content/magias' }),
		schema: z.object({
			...localizedEntity,
			nivel: z.number().int().min(0),
			caminhoOuEscola: z.string().min(1),
			alcance: z.string().min(1),
			custoOuAcao: z.string().min(1),
		}),
	}),
};
