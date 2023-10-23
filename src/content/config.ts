import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		readTime: z.string().optional(),
		tags: z.array(z.string()),
		draft: z.boolean().default(false).optional(),
		hidden: z.boolean().default(false).optional()
	}),
});

export const collections = { blog };
