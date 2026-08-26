import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date().or(z.string().transform((val) => new Date(val))),
    image: z.string().optional(),
    author: z.string().default('Anita'),
  }),
});

export const collections = {
  blog: blogCollection,
};
