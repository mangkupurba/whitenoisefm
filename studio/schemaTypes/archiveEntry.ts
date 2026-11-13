import {defineArrayMember, defineField, defineType} from 'sanity'

export const ARCHIVE_CATEGORIES = [
  {title: 'Collections', value: 'collections'},
  {title: 'Runway', value: 'runway'},
  {title: 'Objects / Installations', value: 'objects-installations'},
  {title: 'Events', value: 'events'},
]

export const archiveEntry = defineType({
  name: 'archiveEntry',
  title: 'Archive entry',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Grouping',
      type: 'string',
      options: {list: ARCHIVE_CATEGORIES, layout: 'radio'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: (rule) => rule.required().integer().min(2020).max(2100),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      description: 'Optional. Use for runway shows and events.',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Optional. Venue or city, mainly for runway shows, installations and events.',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover image',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', title: 'Alt text', type: 'string'})],
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({name: 'alt', title: 'Alt text', type: 'string'}),
            defineField({name: 'caption', title: 'Caption', type: 'string'}),
          ],
        }),
      ],
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [defineArrayMember({type: 'block'})],
    }),
    defineField({
      name: 'credits',
      title: 'Credits',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'credit',
          fields: [
            defineField({name: 'role', title: 'Role', type: 'string'}),
            defineField({name: 'name', title: 'Name', type: 'string'}),
          ],
          preview: {select: {title: 'name', subtitle: 'role'}},
        }),
      ],
    }),
  ],
  orderings: [
    {title: 'Year, newest first', name: 'yearDesc', by: [{field: 'year', direction: 'desc'}]},
    {title: 'Year, oldest first', name: 'yearAsc', by: [{field: 'year', direction: 'asc'}]},
  ],
  preview: {
    select: {title: 'title', category: 'category', year: 'year', media: 'coverImage'},
    prepare({title, category, year, media}) {
      const group = ARCHIVE_CATEGORIES.find((c) => c.value === category)?.title ?? 'No grouping'
      return {title, subtitle: [group, year].filter(Boolean).join(' · '), media}
    },
  },
})
