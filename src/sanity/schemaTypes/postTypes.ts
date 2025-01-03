import { defineField, defineType } from "sanity";


const blogPost = defineType( {
    
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
     defineField( {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
            source: 'blogtitle',
            
            maxLength: 50, // will be ignored if slugify is set
            slugify: input => input
                                 .toLowerCase()
                                 .replace(/\s+/g, '-')
                                 .slice(0, 200)
          },
        description: 'The unique URL slug for this blog post',
      }),
     defineField ({
        name: 'blogtitle',
        title: 'Blog Title',
        type: 'string',
        validation: Rule => Rule.required(),
        description: 'Title of the blog post',
      }),
       defineField( {
        name: 'headings',
        title: 'Headings',
        type: 'array',
        of: [
          { type: 'string' },
           // This allows for richer content in headings if needed
        ],
        description: 'Array of headings (optional H1, H2, H3) for the blog post',
      }),
      defineField({
        name: 'datepublished',
        title: 'Date Published',
        type: 'datetime',
        description: 'The publication date of the blog post',
      }),
      defineField({
        name: 'author',
        title: 'Author',
        type: 'reference',
        validation: Rule => Rule.required(),
        to: [{ type: 'author' }],  // Assuming you have an Author document schema
        description: 'The author of the blog post',
      }),
      defineField({
        name: 'thumbnail',
        title: 'Thumbnail',
        type: 'image',
        options: {
          hotspot: true
        },
        description: 'Thumbnail image for the blog post',
      }),
      defineField({
        name: 'gallery',
        title: 'Gallery',
        type: 'array',
        of: [{ type: 'image' }],
        description: 'Gallery images for the blog post (optional)',
      }),
      defineField({
        name: 'blog_desc',
        title: 'Blog Description',
        type: 'text',
        description: 'Short description or excerpt of the blog post',
      }),
     defineField( {
        name: 'metadescription',
        title: 'Meta Description',
        type: 'text',
        description: 'SEO meta description for this blog post',
      }),
     defineField( {
        name: 'metakeyword',
        title: 'Meta Keywords',
        type: 'array',
        of: [{ type: 'string' }],
        description: 'SEO keywords associated with this blog post',
      }),
    
      defineField({
        name: 'content',
        title: 'Content',
        type: 'markdown', 
        description: 'The main content of the blog post, which can include text, images, etc.',
      }),
     defineField( {
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'categories' }],
          }
        ],
        description: 'Categories to which this blog post belongs (for filtering and sorting)',
      }),
      defineField({
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{ type: 'string' }],
        description: 'Tags for better sorting and filtering, e.g., "Technology", "Health", etc.',
      }),
      defineField({
        name: 'ogImage',
        title: 'OpenGraph Image',
        type: 'image',
        options: {
          hotspot: true,
        },
        description: 'Image for OpenGraph (social media sharing)',
      }),
      defineField({
        name: 'ogTitle',
        title: 'OpenGraph Title',
        type: 'string',
        description: 'Title for OpenGraph (social media sharing)',
      }),
      
    ],
  })
   export default blogPost;