import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const guides = defineCollection({
  loader: glob({
    base: process.env.ARCNIX_GUIDE_DIR || '../arcnix/docs/guide',
    pattern: '{en,zh-cn}/*.md',
  }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    order: z.number().int().positive(),
  }),
});

export const collections = { guides };
