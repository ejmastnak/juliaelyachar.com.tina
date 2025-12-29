import { tinaField } from "tinacms/dist/react";
import type { HomePageQuery } from "@tina/__generated__/types";
import Book from '@tina/components/Book.tsx'
import LinkButton from '@tina/components/LinkButton.tsx'

type Props = {
  homePage: HomePageQuery
};

export default function Semicivilized({ homePage }: Props) {
  return (
    <Book
      img={homePage.bookImg}
      imgAlt={homePage.bookImgAlt}
      title="On the Semicivilized"
      to="/books/on-the-semicivilized"
      subtitle="Coloniality, Finance, and Embodied Sovereignty in Cairo"
      review={null}
      reviewer={null}
    >
      <p>
        <span className="italic">On the Semicivilized</span> is a sweeping analysis of the coloniality that shaped—and blocked—sovereign futures for those dubbed barbarian and semicivilized in the former Ottoman Empire.
      </p>
      <p className="mt-2">
        Drawing on thirty years of ethnographic research in Cairo, family archives from Palestine and Egypt, and research on Ottoman debt and finance, Elyachar theorizes a global condition of the “semicivilized” marked by nonsovereign futures, crippling debts, and the constant specter of violence exercised by those who call themselves civilized, inviting us to rethink catastrophe and potentiality in Cairo and the world today.
      </p>

      <LinkButton classes="mt-5" href="/publications#books">
        More books
      </LinkButton>

    </Book>
  );
}
