import { defineConfig } from "tinacms";
import { HomePageCollection } from "@tina/collections/pages/home.ts";
import { AboutPageCollection } from "@tina/collections/pages/about.ts";
import { NavCollection } from "@tina/collections/shared/nav.ts";
import { FooterCollection } from "@tina/collections/shared/footer.ts";
import { PublicationCategoryCollection } from "@tina/collections/shared/publicationCategory.ts";
import { PublicationCollection } from "@tina/collections/shared/publication.ts";

import { TINA_MEDIA_ROOT, TINA_PUBLIC_FOLDER, TINA_SUPPORTED_IMAGE_MIMES } from "@src/assets/config.ts";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.PUBLIC_TINA_CLIENT_ID || '',
  token: process.env.TINA_TOKEN || '',
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      publicFolder: TINA_PUBLIC_FOLDER,
      mediaRoot: TINA_MEDIA_ROOT,
    },
    accept: TINA_SUPPORTED_IMAGE_MIMES,
  },
  schema: {
    collections: [
      NavCollection,
      FooterCollection,
      HomePageCollection,
      AboutPageCollection,
      PublicationCategoryCollection,
      PublicationCollection,
    ],
  },
});
