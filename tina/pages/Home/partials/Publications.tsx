import { tinaField } from "tinacms/dist/react";
import type { MyHomePageQuery, MyPublicationQuery, } from "@tina/__generated__/types";
import LinkButton from '@tina/components/LinkButton.tsx'
import { TinaMarkdown } from "tinacms/dist/rich-text";

type Props = {
  homePage: MyHomePageQuery;
  publicationsData: MyPublicationQuery;
};

export default function Publications({ homePage, publicationsData }: Props) {
  return (
    <div>
      <h2 data-tina-field={tinaField(homePage, "publicationsHeading")} className="text-4xl">{homePage.publicationsHeading}</h2>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {publicationsData.publication.publications.filter((publication) => publication.featured).map((publication) => (
          <div>
            <a target="_blank" rel="noopener noreferrer" href={publication.href} className="block w-fit mx-auto rounded overflow-hidden hover:shadow-lg hover:ring-2 hover:ring-gray-200">
              <img src={publication.img} className="max-w-sm h-96 object-cover object-center mx-auto"/>
            </a>
            <div className="mt-1 text-center leading-snug">
              <TinaMarkdown content={publication.citation} />
            </div>
          </div>  
        ))}
      </div>

      <div className="mt-5 mx-auto w-fit">
        <LinkButton tinaField={tinaField(homePage, "publicationsButtonText")} href="/publications#articles">
          {homePage.publicationsButtonText}
        </LinkButton>
      </div>

    </div>
  );
}
