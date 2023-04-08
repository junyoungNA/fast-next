import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({
      name: 'metadata',
      title: 'Metadata',
      // type: 'urlWithMetadata',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'metadata.openGraph.title',
      subtitle: 'metadata.openGraph.title',
    },
  },
})
