import type { Collection } from "tinacms";

export const BookCollection: Collection = {

  name: "book",
  label: "Books",
  path: "tina/content/book",
  format: "json",

  ui: {
    router: ({ document }) => {
      if (document._sys.filename === 'on-the-semicivilized') {
        return '/books/on-the-semicivilized'
      } else if (document._sys.filename === 'markets-of-dispossession') {
        return `/books/markets-of-dispossession`
      } else {
        return undefined
      }
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
      name: 'title',
      label: 'Title',
      type: 'string',
      required: true,
    },
    {
      name: 'subtitle',
      label: 'Subtitle',
      type: 'string',
      required: true,
    },
    {
      name: 'featuredText',
      label: 'Featured text',
      type: 'string',
    },
    {
      name: 'publisherDescription',
      label: "Publisher's description",
      type: 'rich-text',
      required: true,
    },
    {
      name: 'img',
      label: 'Image',
      type: 'image',
      required: true,
    },
    {
      name: 'imgAlt',
      label: 'Image alt text',
      type: 'string',
      required: true,
    },
    {
      name: 'localLink',
      label: 'Link to book on this site',
      type: 'string',
    },
    {
      name: 'localLinkButtonText',
      label: 'Button text for link to local book page',
      type: 'rich-text',
    },
    {
      name: 'publisherLink',
      label: "Link to book page on publisher's site",
      type: 'string',
      required: true,
    },
    {
      name: 'publisherLinkButtonText',
      label: "Button text for link to publisher's book page",
      type: 'rich-text',
    },
    {
      name: 'juliaDescriptionHeading',
      label: "Heading for Julia's description",
      type: 'string',
    },
    {
      name: 'juliaDescription',
      label: "Julia's description",
      type: 'rich-text',
    },
    {
      name: 'reviewsHeading',
      label: 'Reviews heading',
      type: 'rich-text',
    },
    {
      name: 'reviews',
      label: 'Reviews',
      type: 'object',
      list: true,
      ui: {
        itemProps: (review) => {
          return { label: "Review" };
        },
      },
      fields: [
        {
          name: 'review',
          label: 'Review text',
          type: 'rich-text',
          required: true,
        },
        {
          name: 'reviewer',
          label: "Reviewer",
          type: 'rich-text',
          required: true,
        },
      ],
    },
    {
      name: 'moreReviewsSoon',
      label: 'More reviews coming soon?',
      type: 'boolean',
    },
    {
      name: 'moreReviewsSoonText',
      label: 'Message for reviews coming soon',
      type: 'rich-text',
    },
  ]
};
