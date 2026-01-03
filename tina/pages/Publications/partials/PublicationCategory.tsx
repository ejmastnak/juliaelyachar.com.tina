import type { Publication } from "@tina/__generated__/types";
import { renderChicagoCitation } from '@src/lib/renderChicagoCitation.jsx'

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
      <h3 className="text-2xl font-semibold">{publicationCategory.name}</h3>
      <ul className="flex flex-col -mx-6 sm:mx-0 divide-y w-fit">
        {publicationCategory.publications.map((publication) => (
          <li key={publication.id}>
            <div className="p-6 rounded-lg hover:bg-gray-50 max-w-3xl">
              <div className="font-medium">{renderChicagoCitation(publication)}</div>
              <span className="mt-2 inline-block items-center rounded-full bg-indigo-50 px-1.5 py-0.5 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">{publicationCategory.name}</span>

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




