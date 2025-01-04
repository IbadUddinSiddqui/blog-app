import { Rule } from "sanity";

const categories= {
    name: 'categories',
    title: 'Category',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Category Name',
        type: 'string',
        description: 'Name of the category (e.g., Technology, Health, Lifestyle)',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 30, // Set maximum length to 30 characters
        },
        validation: (Rule:Rule) => Rule
          .max(30) // Ensure the slug is a maximum of 30 characters
          .regex(/^[a-z0-9-]+$/, 'Slug should only contain lowercase letters, numbers, and hyphens') // Only alphanumeric characters and hyphens are allowed
          .warning('Slug should only contain lowercase letters, numbers, and hyphens')
          .error('Invalid characters in slug'),
        description: 'Unique slug for the category (used for URLs and filtering)',
      }
      
,      
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'Short description of the category (optional)',
      },
      {
        name: 'icon',
        title: 'Icon',
        type: 'image',
        options: {
          hotspot: true,
        },
        description: 'An optional icon or image to represent the category',
      },
    ],
  };
  export default categories;