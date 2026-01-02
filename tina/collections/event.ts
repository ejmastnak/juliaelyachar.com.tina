import type { Collection } from "tinacms";

export const EventCollection: Collection = {

  name: "event",
  label: "Events",
  path: "tina/content/events",
  format: "json",

  defaultItem: {
    title: "Example Event Title: Themes and Topics",
    institution: "Department or Hosting Institution",
    type: "Seminar",
    date: "2025-01-01",
    time: "4:00 pm",
    location: "Room 101, Example University / Online",
    description: "A brief description of the event, outlining its focus, participants, and broader significance.",
    href: "https://www.example.com/event",
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "string",
      required: true,
      isTitle: true,
    },
    {
      name: 'institution',
      label: 'Institution',
      type: 'string',
      required: true,
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
      type: 'datetime',
      required: true,
    },
    {
      name: 'time',
      label: 'Time (optional)',
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
      label: 'Link (optional)',
      type: 'string',
    },
  ],
};
