import type { Collection } from "tinacms";

export const HomePageCollection: Collection = {

  name: "homePage",
  label: "Home Page",
  path: "tina/content/pages/home",
  format: "json",

  ui: {
    router: () => "/",
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
      name: "subtitle",
      label: "Subtitle",
      type: "string",
      required: true,
    },
    {
      name: 'heroImg',
      label: 'Profile Image',
      type: 'image',
    },
    {
      name: 'heroImgAlt',
      label: 'Profile Image Alt Text',
      type: 'string',
    },
    {
      name: 'bookImg',
      label: 'Semicivilized Book Image',
      type: 'image',
    },
    {
      name: 'bookImgAlt',
      label: 'Semicivilized Book Image Alt Text',
      type: 'string',
    },
    {
      name: "body",
      label: "Body",
      type: "rich-text",
      required: true,
    },
  ],
};
