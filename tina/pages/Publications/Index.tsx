import { useTina, tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import Book from '@tina/components/Book.tsx'
import LinkButton from '@tina/components/LinkButton.tsx'
import PageWrapper from '@tina/shared/PageWrapper.tsx'
import PublicationCategory from './partials/PublicationCategory.tsx'
import type { MyPublicationsPageQuery, MyPublicationsPageQueryVariables, Book as BookType, Publication, } from "@tina/__generated__/types";

type Props = {
  variables: MyPublicationsPageQueryVariables;
  data: MyPublicationsPageQuery;
  query: string;
  publications: Publication;
  semicivilized: BookType;
  markets: BookType;
  infrastructures: BookType;
};

const mdLinkComponents = {
  a: (props) => (
    <a className="text-blue-500 font-semibold hover:underline hover:text-blue-600 hover:cursor-pointer">{props.children}</a>
  ),
};

export default function PublicationsPage(props: Props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const publicationsPage = data.publicationsPage;
  const semicivilized = props.semicivilized;
  const markets = props.markets;
  const infrastructures = props.infrastructures;

  /**
    Example shape after categorizing:
    [
      {
        id: "tina/content/shared/publicationCategory/ngos.json",
        name: "NGOs, Development, Governmentality",
        publications: [ ... ]
      },
      // ...
    ]
  */
  const categorizedPublications = Array.from(
    props.publications.reduce((map, publication) => {
      const { id, name } = publication.category

      if (!map.has(id)) {
        map.set(id, {
          id,
          name,
          publications: []
        })
      }

      map.get(id).publications.push(publication)
      return map
    }, new Map()).values()
  )

  return (
    <PageWrapper>
      <div className="mb-5 w-fit lg:mb-8 pb-5 lg:pb-8 border-b border-gray-200">
        <h2 data-tina-field={tinaField(publicationsPage, "booksHeading")} className="text-5xl">{publicationsPage.booksHeading}</h2>
      </div>

      <div className="mt-10 md:mt-16">

        {/* SemicivilizedPreview */}
        <div className="pb-16 lg:pb-20 border-b border-gray-200">
          <Book
            title={semicivilized.title}
            subtitle={semicivilized.subtitle}
            href={semicivilized.localLink}
            img={semicivilized.img}
            imgAlt={semicivilized.imgAlt}
          >
            <div className="prose"><TinaMarkdown content={semicivilized.publisherDescription}/></div>
            <LinkButton classes="mt-6" href={semicivilized.localLink}>
              <div><TinaMarkdown content={semicivilized.localLinkButtonText}/></div>
            </LinkButton>
          </Book>
        </div>

        {/* Markets */}
        <div className="pb-16 lg:pb-20 mt-16 lg:mt-20 border-b border-gray-200">
          <Book
            title={markets.title}
            subtitle={markets.subtitle}
            href={markets.localLink}
            img={markets.img}
            imgAlt={markets.imgAlt}
          >
            <div className="prose"><TinaMarkdown content={markets.publisherDescription}/></div>
            <LinkButton classes="mt-6" href={markets.localLink}>
              <div><TinaMarkdown content={markets.localLinkButtonText}/></div>
            </LinkButton>
          </Book>
        </div>

        {/* InfrastructuresPreview */}
        <div className="mt-16 lg:mt-20">
          <Book
            title={infrastructures.title}
            subtitle={infrastructures.subtitle}
            href={infrastructures.href}
            img={infrastructures.img}
            imgAlt={infrastructures.imgAlt}
          >
            <div className="prose"><TinaMarkdown content={infrastructures.publisherDescription}/></div>
            <LinkButton classes="mt-6" href={infrastructures.publisherLink}>
              <div><TinaMarkdown content={infrastructures.publisherLinkButtonText}/></div>
            </LinkButton>
          </Book>
        </div>

      </div>

      <div className="mt-24 w-fit mb-5 lg:mb-8 pb-5 lg:pb-8 border-b border-gray-200">
        <h2 data-tina-field={tinaField(publicationsPage, "articlesHeading")} className="text-5xl">{publicationsPage.articlesHeading}</h2>
      </div>

      <div data-tina-field={tinaField(publicationsPage, "cv")} className="mt-5">
        <TinaMarkdown content={publicationsPage.cv} components={mdLinkComponents} />
      </div>

      {/* List of publications */}
      <div className="flex flex-col gap-y-10 divide-y divide-gray-200">
        {categorizedPublications.map((publicationCategory) => (
          <div className="pt-10" key={publicationCategory.id}>
            <PublicationCategory publicationCategory={publicationCategory} />
          </div>
        ))}
      </div>

    </PageWrapper>
  );
}
