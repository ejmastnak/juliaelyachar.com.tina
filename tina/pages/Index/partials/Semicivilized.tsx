import { tinaField } from "tinacms/dist/react";
import type { HomePageQuery } from "@tina/__generated__/types";
import Book from '@tina/components/Book.tsx'
import LinkButton from '@tina/components/LinkButton.tsx'
import { TinaMarkdown } from "tinacms/dist/rich-text";

type Props = {
  homePage: HomePageQuery
};

export default function Semicivilized({ homePage }: Props) {
  return (
    <Book
      img={homePage.bookImg}
      imgAlt={homePage.bookImgAlt}
      title={homePage.bookHeading}
      subtitle={homePage.bookSubtitle}
      to="/books/on-the-semicivilized"
      review={null}
      reviewer={null}
      imgTinaField={tinaField(homePage, "bookImg")}
      titleTinaField={tinaField(homePage, "bookHeading")}
      subtitleTinaField={tinaField(homePage, "bookSubtitle")}
    >
      <div data-tina-field={tinaField(homePage, "bookDescription")} className="mt-5 flex flex-col gap-y-2">
        <TinaMarkdown content={homePage.bookDescription} />
      </div>
      <LinkButton tinaField={tinaField(homePage, "bookButtonText")} classes="mt-5" href="/publications#books">
        {homePage.bookButtonText}
      </LinkButton>
    </Book>
  );
}
