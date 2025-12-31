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
    // -------------------------------------------------------- //
    // Head
    // -------------------------------------------------------- //
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

    // -------------------------------------------------------- //
    // Hero
    // -------------------------------------------------------- //
    {
      name: "heroHeading",
      label: "Main heading",
      type: "string",
      required: true,
    },
    {
      name: "heroDescription",
      label: "Description",
      type: "rich-text",
      required: true,
    },
    {
      name: 'heroImg',
      label: 'Profile image',
      type: 'image',
    },
    {
      name: 'heroImgAlt',
      label: 'Profile image alt text',
      type: 'string',
    },
    {
      name: "heroButtonText",
      label: "Button text",
      type: "rich-text",
      required: true,
    },

    // -------------------------------------------------------- //
    // Book partial
    // -------------------------------------------------------- //
    {
      name: 'bookHeading',
      label: 'Book heading',
      type: 'string',
      required: true,
    },
    {
      name: 'bookSubtitle',
      label: 'Book subtitle',
      type: 'string',
      required: true,
    },
    {
      name: 'bookDescription',
      label: 'Book description',
      type: 'rich-text',
      required: true,
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
      name: 'bookButtonText',
      label: 'Book button text',
      type: 'string',
      required: true,
    },

    // -------------------------------------------------------- //
    // Publications
    // -------------------------------------------------------- //
    {
      name: 'publicationsHeading',
      label: 'Publications heading',
      type: 'string',
      required: true,
    },
    {
      name: 'publicationsButtonText',
      label: 'Publications button text',
      type: 'string',
      required: true,
    },

    // -------------------------------------------------------- //
    // About
    // -------------------------------------------------------- //
    {
      name: 'aboutHeading',
      label: 'About heading',
      type: 'string',
      required: true,
    },
    {
      name: 'aboutDescription',
      label: 'About description',
      type: 'rich-text',
      required: true,
    },
    {
      name: 'aboutButtonText',
      label: 'About button text',
      type: 'string',
      required: true,
    },

    // -------------------------------------------------------- //
    // Events
    // -------------------------------------------------------- //
    {
      name: 'eventsHeading',
      label: 'Events heading',
      type: 'string',
      required: true,
    },
    {
      name: 'eventsButtonText',
      label: 'Events button text',
      type: 'string',
      required: true,
    },

  ],
};
