import { useTina, tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import PageWrapper from '@tina/shared/PageWrapper.tsx'

import type { HomePageQuery, HomePageQueryVariables } from "@tina/__generated__/types";
type Props = {
  variables: HomePageQueryVariables;
  data: HomePageQuery;
  query: string;
};

export default function HomePage(props: Props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const homePage = data.homePage;

  return (
    <PageWrapper>
      <h1 className="text-3xl" data-tina-field={tinaField(homePage, "h1")}>{homePage.h1}</h1>
      <p data-tina-field={tinaField(homePage, "subtitle")}>{homePage.subtitle}</p>
      <div className="prose">
        <TinaMarkdown content={homePage.body} />
      </div>
    </PageWrapper>
  );
}
