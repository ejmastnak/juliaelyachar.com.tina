import { useTina, tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import Book from '@tina/components/Book.tsx'
import LinkButton from '@tina/components/LinkButton.tsx'
import PageWrapper from '@tina/shared/PageWrapper.tsx'
import type { MyPublicationsPageQuery, MyPublicationsPageQueryVariables, Book as BookType, Publication, } from "@tina/__generated__/types";

type Props = {
  variables: MyPublicationsPageQueryVariables;
  data: MyPublicationsPageQuery;
  query: string;
};

const descriptionMdComponents = {
  p: (props) => (
    <p className={(props?._content_source.path[props?._content_source.path.length - 1]) % 2 == 0 ? 'max-w-3xl' : 'max-w-3xl ml-auto'}>
      {props.children}
    </p>
  ),
};

// Extracts a string value from the reviewer rich text's
// Abstract Syntax Tree to use as a loop key.
function extractReviewerKeyfromAst(reviewer) {
  return reviewer?.children[0]?.children[0]?.text || (reviewer?.children[0]?.text)
}

export default function PublicationsPage(props: Props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const book = data.book

  return (
    <PageWrapper>
      <div className="text-center md:text-left">
        <h2 data-tina-field={tinaField(book, "title")} className="text-4xl font-medium">{book.title}</h2>
        <p data-tina-field={tinaField(book, "subtitle")} className="mt-1 text-gray-700">{book.subtitle}</p>
        {book.featuredText && <p data-tina-field={tinaField(book, "featuredText")} className="mx-auto md:mx-0 italic mt-1 w-fit rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-700 ring-1 ring-inset ring-orange-700/40">{book.featuredText}</p>}
      </div>

      <div className="mt-12 md:flex md:flex-row-reverse gap-x-20 lg:px-16">
        <img data-tina-field={tinaField(book, "img")} src={book.img} alt={book.imgAlt} className="md:max-w-sm mx-auto my-6 md:my-0 rounded object-cover h-fit" />
        <div>
          <div data-tina-field={tinaField(book, "publisherDescription")} className="myprose"><TinaMarkdown content={book.publisherDescription} /></div>
          <LinkButton tinaField={tinaField(book, "publisherLinkButtonText")} classes="mt-5" href={book.publisherLink}><TinaMarkdown content={book.publisherLinkButtonText} /></LinkButton>
        </div>
      </div>


      <div className="pt-16 mt-16 border-t border-gray-200">
        <h2 data-tina-field={tinaField(book, "juliaDescriptionHeading")} className="text-2xl font-semibold">{book.juliaDescriptionHeading}</h2>
        <div data-tina-field={tinaField(book, "juliaDescription")} className="mt-5 text-gray-700 leading-prose flex flex-col gap-y-6">
          <TinaMarkdown content={book.juliaDescription} components={descriptionMdComponents} />
        </div>
      </div>

      <div className="pt-16 mt-16 border-t border-gray-200">
        <h2 data-tina-field={tinaField(book, "reviewsHeading")} className="text-2xl font-semibold text-center"><TinaMarkdown content={book.reviewsHeading} /></h2>
        <div className="mt-8 flex flex-col gap-y-10">
          {book.reviews.map((review, idx) => (
            <div key={extractReviewerKeyfromAst(review.reviewer)} className={(idx % 2 == 1) ? 'ml-auto' : ''}>
              <div data-tina-field={tinaField(review, "review")} className="max-w-3xl font-medium text-gray-800 leading-relaxed"><TinaMarkdown content={review.review} /></div>
              <div data-tina-field={tinaField(review, "reviewer")} className="mt-2"><TinaMarkdown content={review.reviewer} /></div>
            </div>
          ))}
          {book.moreReviewsSoon && <div data-tina-field={tinaField(book, "moreReviewsSoonText")} className="mt-5"><TinaMarkdown content={book.moreReviewsSoonText} /></div>}
        </div>
      </div>

    </PageWrapper>
  );
}
