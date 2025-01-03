export default {
    name: 'author',
    title: 'Author',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        description: 'Full name of the author',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 96,
        },
        description: 'Unique slug for the author profile (used for URLs)',
      },
      {
        name: 'bio',
        title: 'Biography',
        type: 'text',
        description: 'Short biography of the author',
      },
      {
        name: 'profileImage',
        title: 'Profile Image',
        type: 'image',
        options: {
          hotspot: true,
        },
        description: 'Profile picture of the author',
      },
      {
        name: 'socialLinks',
        title: 'Social Links',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'platform', title: 'Platform', type: 'string' },
              { name: 'url', title: 'URL', type: 'url' },
            ],
          },
        ],
        description: 'Links to the author’s social media profiles (e.g., Twitter, LinkedIn)',
      },
    ],
  };
  