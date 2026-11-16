// The wiki (Помош): the app's help articles, copied in by scripts/sync-help.mjs.
import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const help = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/help' }),
  schema: z.object({
    title: z.string(),
    topic: z.string(),
    module: z.string().nullable().optional(),
    top: z.boolean().optional(),
    related: z.array(z.string()).default([]),
    screens: z.array(z.string()).optional(),
    refusals: z.array(z.string()).optional(),
  }),
})

export const collections = { help }
