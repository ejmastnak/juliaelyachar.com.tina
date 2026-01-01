import { useTina, tinaField } from "tinacms/dist/react";
import LinkButton from '@tina/components/LinkButton.tsx'
import { TinaMarkdown } from "tinacms/dist/rich-text";
import PageWrapper from '@tina/shared/PageWrapper.tsx'

import type { MyAboutPageQuery, MyAboutPageQueryVariables } from "@tina/__generated__/types";
type Props = {
  variables: MyAboutPageQueryVariables;
  data: MyAboutPageQuery;
  query: string;
};

export default function AboutPage(props: Props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const aboutPage = data.aboutPage;

  return (
    <PageWrapper>
      <h1 data-tina-field={tinaField(aboutPage, "h1")} className="text-5xl mb-5 lg:mb-8 pb-5 lg:pb-8 border-b border-gray-200">{aboutPage.h1}</h1>

      <div className="sm:flex sm:flex-row-reverse gap-x-8 md:gap-x-12 max-w-3xl">
        <img data-tina-field={tinaField(aboutPage, "img")} src={aboutPage.img} alt={aboutPage.imgAlt} className="hidden sm:block max-w-sm xl:max-w-md h-80 rounded object-cover object-right" />
        <div>
          <p data-tina-field={tinaField(aboutPage, "summary")}>{aboutPage.summary}</p>
          <LinkButton tinaField={tinaField(aboutPage, "cvButtonText")} classes="mt-5" href="/julia-elyachar-cv.pdf">{aboutPage.cvButtonText}</LinkButton>
        </div>
      </div>

      <div data-tina-field={tinaField(aboutPage, "body")} className="mt-8 md:mt-12 flex flex-col gap-y-4 max-w-2xl">
        <TinaMarkdown content={aboutPage.body} />
      </div>

    </PageWrapper>
  );
}
