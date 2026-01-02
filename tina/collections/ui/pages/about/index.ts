import type { Collection } from "tinacms";

export const AboutPageCollection: Collection = {

  name: "aboutPage",
  label: "About Page",
  path: "tina/content/ui/pages/about",
  format: "json",

  ui: {
    router: () => "/about/",
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
      name: "h1",
      label: "Heading",
      type: "string",
      required: true,
    },
    {
      name: 'summary',
      label: 'Summary',
      type: 'string',
      required: true,
    },
    {
      name: 'img',
      label: 'Image',
      type: 'image',
    },
    {
      name: 'imgAlt',
      label: 'Image alt text',
      type: 'string',
    },
    {
      name: 'cvButtonText',
      label: 'CV button text',
      type: 'string',
      required: true,
    },
    {
      name: 'body',
      label: 'Body',
      type: 'rich-text',
      required: true,
    },
  ],
};
