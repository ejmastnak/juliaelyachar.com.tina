import type { Collection } from "tinacms";

export const ContactPageCollection: Collection = {

  name: "contactPage",
  label: "Contact Page",
  path: "tina/content/pages/contact",
  format: "json",

  ui: {
    router: () => "/contact",
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
      name: 'officeAddressHeading',
      label: 'Office address heading',
      type: 'string',
      required: true,
    },
    {
      name: 'officeAddress',
      label: 'Office address',
      type: 'rich-text',
      required: true,
    },
    {
      name: 'emailHeading',
      label: 'Email heading',
      type: 'string',
      required: true,
    },
    {
      name: 'email',
      label: 'Email',
      type: 'string',
      required: true,
    },
    {
      name: 'officePhoneHeading',
      label: 'Office phone heading',
      type: 'string',
      required: true,
    },
    {
      name: 'officePhone',
      label: 'Office phone',
      type: 'string',
      required: true,
    },
    {
      name: 'officePhoneMachineReadable',
      label: 'Machine-readable office phone',
      type: 'string',
      required: true,
    },
  ],
};
