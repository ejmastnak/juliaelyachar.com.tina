import type { Publication } from "@tina/__generated__/types";
import { renderChicagoCitation } from '@src/lib/renderChicagoCitation.jsx'
import Pillbox from '@tina/components/Pillbox.tsx'

type Props = {
  publicationCategory: {
    id: string
    name: string
    publications: Array<Publication>
  }
};

export default function PublicationCategory({ publicationCategory }: Props) {
  return (
    <div>
      <h3 className="text-2xl font-medium">{publicationCategory.name}</h3>
      <ul className="flex flex-col -mx-6 sm:mx-0 divide-y w-fit">
        {publicationCategory.publications.map((publication) => (
          <li key={publication.id}>
            <div className="p-6 rounded-lg hover:bg-gray-50 max-w-3xl">
              <div className="font-medium">{renderChicagoCitation(publication)}</div>
              <Pillbox className="mt-1">{publicationCategory.name}</Pillbox>
              <a href={publication.href} target="_blank" rel="noopener noreferrer" className="mt-3 w-fit text-gray-700 font-medium flex items-center hover:text-gray-900 hover:underline">
                Link
              </a>
            </div>
          </li>
        ))}

      </ul>
    </div>

  );
}




