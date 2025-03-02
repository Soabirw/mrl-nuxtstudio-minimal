import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**',
    }),
    insights: defineCollection({
      type: 'page',
      source: '/insights/**',
      schema: z.object({
        date: z.date(),
        image: z.string(),
      })
    })
  },
})
