import { tinaField } from "tinacms/dist/react";
import type { MyHomePageQuery, Publication, } from "@tina/__generated__/types";
import LinkButton from '@tina/components/LinkButton.tsx'
import { renderChicagoCitation } from '@src/lib/renderChicagoCitation.jsx'

type Props = {
  homePage: MyHomePageQuery;
  publications: Array<Publication>;
};

export default function Publications({ homePage, publications }: Props) {
  return (
    <div>
      <h2 data-tina-field={tinaField(homePage, "publicationsHeading")} className="text-4xl">{homePage.publicationsHeading}</h2>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-10">
        {publications.filter((publication) => publication.featured).map((publication) => (
          <div key={publication.id}>
            <a target="_blank" rel="noopener noreferrer" href={publication.href} className="block w-fit mx-auto rounded overflow-hidden hover:shadow-lg hover:ring-2 hover:ring-gray-200">
              <img src={publication.img} className="max-w-sm h-96 object-cover object-center mx-auto"/>
            </a>
            <div className="mt-3 text-center leading-snug">
              {renderChicagoCitation(publication)}
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
