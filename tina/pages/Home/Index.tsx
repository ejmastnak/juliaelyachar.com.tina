import { useTina, tinaField } from "tinacms/dist/react";
import Wrapper from '@tina/shared/Wrapper.tsx'
import Hero from './partials/Hero.tsx'
import Semicivilized from './partials/Semicivilized.tsx'
import Publications from './partials/Publications.tsx'
import About from './partials/About.tsx'
import Events from './partials/Events.tsx'

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
    <div>
      <Hero homePage={homePage} />
      <Wrapper classes="mt-4 md:mt-6 lg:mt-8">
        <div className="pb-16 mb-12 md:pb-24 md:mb-20 pt-10 md:py-16 border-b border-gray-200">
          <Semicivilized homePage={homePage} />
        </div>
        <Publications homePage={homePage} />
      </Wrapper>
      <div className="mt-5">
        <About homePage={homePage} />
      </div>
      <Wrapper classes="mt-5">
        <div className="py-10 md:py-16">
          <Events homePage={homePage} />
        </div>
      </Wrapper>

    </div>
  );
}
