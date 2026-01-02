import { defineConfig } from "tinacms";

import { HomePageCollection } from "@tina/collections/ui/pages/index.ts";
import { AboutPageCollection } from "@tina/collections/ui/pages/about/index.ts";
import { EventsPageCollection } from "@tina/collections/ui/pages/events/index.ts";
import { TeachingPageCollection } from "@tina/collections/ui/pages/teaching/index.ts";
import { ContactPageCollection } from "@tina/collections/ui/pages/contact/index.ts";
import { PublicationsPageCollection } from "@tina/collections/ui/pages/publications/index.ts";
import { NavCollection } from "@tina/collections/ui/shared/nav.ts";
import { FooterCollection } from "@tina/collections/ui/shared/footer.ts";
import { PublicationCategoryCollection } from "@tina/collections/publicationCategory.ts";
import { PublicationCollection } from "@tina/collections/publication.ts";
import { BookCollection } from "@tina/collections/book.ts";
import { EventCollection } from "@tina/collections/event.ts";

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
      HomePageCollection,
      AboutPageCollection,
      PublicationsPageCollection,
      EventsPageCollection,
      TeachingPageCollection,
      ContactPageCollection,
      NavCollection,
      FooterCollection,
      PublicationCategoryCollection,
      PublicationCollection,
      BookCollection,
      EventCollection,
    ],
  },
});
