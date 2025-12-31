import type { Collection } from "tinacms";

export const EventsPageCollection: Collection = {

  name: "eventsPage",
  label: "Events Page",
  path: "tina/content/pages/events",
  format: "json",

  ui: {
    router: () => "/events",
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
      name: 'upcomingEventsHeading',
      label: 'Upcoming events heading',
      type: 'string',
      required: true,
    },
    {
      name: 'pastEventsHeading',
      label: 'Past events heading',
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
  ],
};
