import type { Collection } from "tinacms";

export const PublicationCategoryCollection: Collection = {

  name: "publicationCategory",
  label: "Publication Categories",
  path: "tina/content/shared/publicationCategory",
  format: "json",

  // ui: {
  //   allowedActions: {
  //     create: false,
  //     delete: false,
  //   },
  // },

  fields: [
    {
      name: "name",
      label: "Name",
      type: "string",
    },
  ],
};
