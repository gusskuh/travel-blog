import { defineDocumentType, makeSource } from 'contentlayer2/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    excerpt: {
      type: 'string',
      description: 'The excerpt of the post',
      required: true,
    },
    publishedAt: {
      type: 'date',
      description: 'The date the post was published',
      required: true,
    },
    updatedAt: {
      type: 'date',
      description: 'The date the post was last updated',
      required: true,
    },
    readTime: {
      type: 'number',
      description: 'Estimated reading time in minutes',
      required: true,
    },
    category: {
      type: 'string',
      description: 'The category of the post',
      required: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      description: 'Tags for the post',
      required: true,
    },
    image: {
      type: 'string',
      description: 'Featured image URL',
      required: true,
    },
    authorName: {
      type: 'string',
      description: 'Author name',
      required: true,
    },
    authorAvatar: {
      type: 'string',
      description: 'Author avatar URL',
      required: true,
    },
    authorBio: {
      type: 'string',
      description: 'Author bio',
      required: true,
    },
    metaTitle: {
      type: 'string',
      description: 'SEO meta title',
      required: true,
    },
    metaDescription: {
      type: 'string',
      description: 'SEO meta description',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/blog/${post._raw.flattenedPath}`,
    },
    slug: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath,
    },
  },
}))

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})
