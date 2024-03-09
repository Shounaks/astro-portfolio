import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().default('/blog-placeholder-3.jpg').optional(),
		category: z.string().default('other').optional(),
		categoryImage: z.string().default('/blog-placeholder-3.jpg').optional(),
		readTime: z.string().optional(),
		tags: z.array(z.string()),
		draft: z.boolean().default(false).optional(),
		hidden: z.boolean().default(false).optional(),
		order: z.number().default(0).optional(),
		yt: z.string().optional()
	}),
});

export const collections = { 'blog': blog };
