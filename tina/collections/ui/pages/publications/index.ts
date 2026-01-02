import type { Collection } from "tinacms";

export const PublicationsPageCollection: Collection = {

  name: "publicationsPage",
  label: "Publications Page",
  path: "tina/content/ui/pages/publications",
  format: "json",

  ui: {
    router: () => "/publications/",
    allowedActions: {
      create: false,
      delete: false,
    },
  },

  fields: [
    {
      name: "head",
      label: "HTML head",
      type: "object",
      fields: [
        {
          name: "title",
          label: "Title",
          type: "string",
        },
        {
          name: "description",
          label: "Description",
          type: "string",
        },
      ],
    },
    {
      name: 'booksHeading',
      label: 'Books heading',
      type: 'string',
      required: true,
    },
    {
      name: 'articlesHeading',
      label: 'Articles heading',
      type: 'string',
      required: true,
    },
    {
      name: 'cv',
      label: 'CV link',
      type: 'rich-text',
      required: true,
    },
  ]
};
