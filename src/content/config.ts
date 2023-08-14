import { z, defineCollection } from 'astro:content'

// Schemas
// import { blogSchema } from './schemas'

const blogCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    id: z.string().default(''),
    title: z
      .string()
      .max(
        60,
        'For best SEO results, keep the `title` under **60** characters'
      ),
    description: z
      .string()
      .max(
        160,
        'For best SEO results, keep the `description` under **160** characters'
      ),
    date: z.date().transform((str) => new Date(str)),
    image: z.object({
      src: z.string(),
      alt: z
        .string()
        .max(
          120,
          'For best SEO results, keep the `image alt` under **120** characters'
        ),
    }),
    draft: z.boolean().default(false),
    summary: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    author: z.enum(['Alex Sessums', 'Lorem ipsum']),
    category: z
      .enum([
        'food',
        'nature',
        'hiking',
        'location',
        'mountain biking',
        'rafting',
      ])
      .optional(),
    new: z.boolean().default(false),
  }),
})

export const collections = {
  blog: blogCollection,
}
