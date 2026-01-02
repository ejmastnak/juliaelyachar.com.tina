import type { Collection } from "tinacms";

export const EventCollection: Collection = {

  name: "event",
  label: "Events",
  path: "tina/content/event",
  format: "json",

  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },

  fields: [
    {
      name: "events",
      label: "Events",
      type: "object",
      list: true,
      itemProps: (item) => {
        return { label: item?.title };
      },
      defaultItem: {
        title: "Example Event Title: Themes and Topics",
        institution: "Department or Hosting Institution",
        type: "Seminar",
        date: "2025-01-01",
        time: "4:00 pm",
        location: "Room 101, Example University / Online",
        description: "A brief description of the event, outlining its focus, participants, and broader significance.",
        href: "https://www.example.com/event",
      }
      ,
      fields: [
        {
          name: "title",
          label: "Title",
          type: "rich-text",
          required: true,
        },
        {
          name: 'institution',
          label: 'Institution',
          type: 'string',
        },
        {
          name: 'type',
          label: 'Type of event',
          type: 'string',
          required: true,
        },
        {
          name: 'date',
          label: 'Date',
          type: 'string',
          required: true,
        },
        {
          name: 'time',
          label: 'Time',
          type: 'string',
        },
        {
          name: 'location',
          label: 'Location',
          type: 'string',
          required: true,
        },
        {
          name: 'description',
          label: 'Description',
          type: 'rich-text',
          required: true,
        },
        {
          name: 'href',
          label: 'Link',
          type: 'string',
        },
      ]
    },
  ],
};
