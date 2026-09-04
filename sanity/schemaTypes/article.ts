import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'article',
  title: 'Article',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Artificial Intelligence', value: 'Artificial Intelligence'},
          {title: 'Cybersecurity', value: 'Cybersecurity'},
          {title: 'Startups', value: 'Startups'},
          {title: 'Gadgets', value: 'Gadgets'},
          {title: 'Software', value: 'Software'},
          {title: 'Web Design', value: 'Web Design'},
          {title: 'Product News', value: 'Product News'},
        ],
      },
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          validation: (rule) =>
            rule.required().warning('Alternative text helps readers who cannot see the image.'),
        }),
        defineField({
          name: 'caption',
          title: 'Caption',
          description: 'Optional context displayed beneath the featured image.',
          type: 'string',
        }),
        defineField({
          name: 'credit',
          title: 'Photo credit',
          description: 'Optional photographer or image-source credit.',
          type: 'string',
        }),
      ],
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
    }),

    defineField({
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
    }),

    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),

    defineField({
      name: 'body',
      title: 'Article Body',
      description: 'Write the full article that readers will see on the article page.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Heading 2', value: 'h2'},
            {title: 'Heading 3', value: 'h3'},
            {title: 'Quote', value: 'blockquote'},
          ],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Numbered', value: 'number'},
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Code', value: 'code'},
            ],
            annotations: [
              {
                name: 'link',
                title: 'Link',
                type: 'object',
                fields: [
                  defineField({
                    name: 'href',
                    title: 'URL',
                    type: 'url',
                    validation: (rule) =>
                      rule.uri({scheme: ['http', 'https', 'mailto', 'tel']}).required(),
                  }),
                ],
              },
            ],
          },
        }),
      ],
      validation: (rule) =>
        rule.min(1).warning('Add the article body before sharing the article page.'),
    }),

    defineField({
      name: 'featured',
      title: 'Featured Article',
      type: 'boolean',
    }),
  ],
})
