import type { Collection } from "tinacms";

export const PublicationCollection: Collection = {

  name: "publication",
  label: "Publications",
  path: "tina/content/shared/publication",
  format: "json",

  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },

  fields: [
    {
      name: "publications",
      label: "Publications",
      type: "object",
      list: true,
      itemProps: (item) => {
        return { label: item?.citation };
      },
      defaultItem: {
        citation: "“Markets, Morality, and the State.” *Example Journal of Social Theory* 12, no. 2 (April 2018): 123–45.",
        category: "tina/content/shared/publicationCategory/ngos.json",
        href: "www.publication.com",
      },
      fields: [
        {
          name: "citation",
          label: "Title",
          type: "rich-text",
          required: true,
        },
        {
          name: 'category',
          label: 'Category',
          type: 'reference',
          collections: ['publicationCategory'],
          required: true,
          ui: {
            optionComponent: (
              props: {
                name: string,
              },
              _internalSys: { path: string }
            ) => {
              return props.name;
            }
          }
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
          name: 'href',
          label: 'Link',
          type: 'string',
          required: true,
        },
        {
          name: 'featured',
          label: 'Featured on home page?',
          type: "boolean",
          required: true,
        },
      ]
    },
  ],
};
