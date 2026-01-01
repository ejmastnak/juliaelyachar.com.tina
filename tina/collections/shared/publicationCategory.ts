import type { Collection } from "tinacms";

export const PublicationCategoryCollection: Collection = {

  name: "publicationCategory",
  label: "Article and Chapter Categories",
  path: "tina/content/shared/publicationCategory",
  format: "json",

  fields: [
    {
      name: "name",
      label: "Name",
      type: "string",
    },
  ],
};
