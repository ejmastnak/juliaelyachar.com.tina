import { useTina, tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import PageWrapper from '@tina/shared/PageWrapper.tsx'

import type { AboutPageQuery, AboutPageQueryVariables } from "@tina/__generated__/types";
type Props = {
  variables: AboutPageQueryVariables;
  data: AboutPageQuery;
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
      <h1 className="text-3xl" data-tina-field={tinaField(aboutPage, "h1")}>{aboutPage.h1}</h1>
      <p className="mt-5" data-tina-field={tinaField(aboutPage, "subtitle")}>{aboutPage.subtitle}</p>
      <div className="prose mt-5" data-tina-field={tinaField(aboutPage, "body")}>
        <TinaMarkdown content={aboutPage.body} />
      </div>
    </PageWrapper>
  );
}
