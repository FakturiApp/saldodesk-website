// The wiki (Помош): the app's help articles, copied in by scripts/sync-help.mjs, and their
// English translations (src/content/help-en/, kept here; translate again when the
// Macedonian article changes).
import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const schema = z.object({
  title: z.string(),
  topic: z.string(),
  module: z.string().nullable().optional(),
  top: z.boolean().optional(),
  related: z.array(z.string()).default([]),
  screens: z.array(z.string()).optional(),
  refusals: z.array(z.string()).optional(),
})

const help = defineCollection({ loader: glob({ pattern: '*.md', base: './src/content/help' }), schema })
const helpEn = defineCollection({ loader: glob({ pattern: '*.md', base: './src/content/help-en' }), schema })

export const collections = { help, helpEn }
