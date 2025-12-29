import type { Collection } from "tinacms";

export const PublicationCollection: Collection = {

  name: "publication",
  label: "Publications",
  path: "tina/content/shared/publication",
  format: "json",

  // ui: {
  //   allowedActions: {
  //     create: false,
  //     delete: false,
  //   },
  // },

  fields: [
    {
      name: "publications",
      label: "Publications",
      type: "object",
      list: true,
      itemProps: (item) => {
        return { label: item?.title };
      },
      defaultItem: {
        title: "Title",
        href: "www.publication.com",
      },
      fields: [
        {
          name: "title",
          label: "Title",
          type: "string",
        },
        {
          name: 'category',
          label: 'Category',
          type: 'reference',
          collections: ['publicationCategory'],
        },
        {
          name: "href",
          label: "link",
          type: "string",
        },
      ]
    },
  ],
};
