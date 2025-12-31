import type { Collection } from "tinacms";

export const FooterCollection: Collection = {

  name: "footer",
  label: "Footer",
  path: "tina/content/shared/footer",
  format: "json",

  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },

  fields: [
    {
      name: "name",
      label: "Name",
      type: "string",
    },
    {
      name: "email",
      label: "Email",
      type: "string",
    },
    {
      name: "footerLinks",
      label: "Footer Links",
      type: "object",
      list: true,
      itemProps: (item) => {
        return { label: item?.text };
      },
      defaultItem: {
        href: "/example",
        text: "Example",
      },
      fields: [
        {
          name: "href",
          label: "href",
          type: "string",
          required: true,
        },
        {
          name: "text",
          label: "Text",
          type: "string",
          required: true,
        },
      ],
    },
    {
      name: "address",
      label: "Address",
      type: "rich-text",
    }
  ],
};
