import type { Collection } from "tinacms";
import publicationTypes from "@src/assets/data/publicationTypes.json";

export const PublicationCollection: Collection = {

  name: "publication",
  label: "Articles and Chapters",
  path: "tina/content/publications",
  format: "json",
  defaultItem: {
    title: "Markets, Morality, and the State",
    type: Object.values(publicationTypes)[0],
    authors: [ { givenName: "Julia", familyName: "Elyachar" } ],
    containerTitle: "Example Journal of Social Theory"
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'string',
      required: true,
      isTitle: true,
    },
    {
      name: 'type',
      label: 'Type of publication',
      type: 'string',
      required: true,
      options: Object.values(publicationTypes),
    },
    {
      name: 'authors',
      label: 'Author(s)',
      type: 'object',
      list: true,
      ui: {
        itemProps: (editor) => {
          return { label: (editor.givenName ? editor.givenName + ", " : "") + editor.familyName };
        },
      },
      fields: [
        {
          name: 'givenName',
          label: 'Given name',
          type: 'string',
        },
        {
          name: 'familyName',
          label: 'Family name',
          type: 'string',
        },
      ],
    },
    {
      name: 'editors',
      label: 'Editor(s) (optional)',
      type: 'object',
      list: true,
      ui: {
        itemProps: (editor) => {
          return { label: (editor.givenName ? editor.givenName + ", " : "") + editor.familyName };
        },
      },
      defaultItem: {
        givenName: "John",
        familyName: "Doe"
      },
      fields: [
        {
          name: 'givenName',
          label: 'Given name',
          type: 'string',
        },
        {
          name: 'familyName',
          label: 'Family name',
          type: 'string',
        },
      ],
    },
    {
      name: 'containerTitle',
      label: 'Container title',
      description: "Title of the journal, book, encyclopedia, newspaper, etc. in which the item was published",
      type: 'string',
    },
    {
      name: 'publisher',
      label: 'Publisher',
      type: 'string',
    },
    {
      name: 'volume',
      label: 'Volume',
      type: 'string',
    },
    {
      name: 'issue',
      label: 'Issue',
      type: 'string',
    },
    {
      name: 'pages',
      label: 'Pages (e.g. 234-242)',
      type: 'string',
    },
    {
      name: 'year',
      label: 'Year',
      type: 'string',
    },
    {
      name: 'categories',
      label: 'Categories',
      categories: "E.g. NGOs, Political Economy, etc.",
      type: 'object',
      list: true,
      ui: {
        itemProps: (category) => {
          return { label: category.category };
        },
      },
      fields: [
        {
          name: 'category',
          label: 'Category',
          type: 'reference',
          collections: ['publicationCategory'],
          // required: true,
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
        }
      ],
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
    },
    {
      name: 'featured',
      label: 'Featured on home page?',
      type: "boolean",
    },
  ],
};
