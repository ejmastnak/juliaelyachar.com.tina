import type { PublicationPublications } from "@tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { ChevronRightIcon } from '@heroicons/react/24/outline'

type Props = {
  publicationCategory: {
    id: string
    name: string
    publications: Array<PublicationPublications>
  }
};

export default function PublicationCategory({ publicationCategory }: Props) {
  return (
    <div>
      <h3 className="text-2xl font-semibold">{publicationCategory.name}</h3>
      <ul className="flex flex-col -mx-6 sm:mx-0 divide-y w-fit">
        {publicationCategory.publications.map((publication) => (
          <li>
            <div className="p-6 rounded-lg hover:bg-gray-50 max-w-3xl">
              <div><TinaMarkdown content={publication.citation}/></div>
              <div className="flex gap-x-4">
                <span className="inline-flex items-center rounded-full bg-indigo-50 px-1.5 py-0.5 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">{publicationCategory.name}</span>
              </div>
              <a href={publication.href} target="_blank" rel="noopener noreferrer" className="mt-4 w-fit font-semibold text-gray-800 flex items-center hover:text-gray-900 hover:underline">
                Link
                <ChevronRightIcon className="size-5 text-gray-900 shrink-0 translate-y-px"/>
              </a>
            </div>
          </li>
        ))}

      </ul>
    </div>

  );
}




