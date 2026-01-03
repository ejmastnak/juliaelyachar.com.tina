import { tinaField } from "tinacms/dist/react";
import type { HomePageQuery } from "@tina/__generated__/types";
import LinkButton from '@tina/components/LinkButton.tsx'
import { TinaMarkdown } from "tinacms/dist/rich-text";

type Props = {
  homePage: HomePageQuery
};

export default function About({ homePage }: Props) {
  return (
    <div className="px-5 sm:px-8 py-20 bg-sc-brown text-sc-white w-full" >

      {/* Mobile */}
      <div className="sm:hidden max-w-6xl w-fit mx-auto">
        <h2 data-tina-field={tinaField(homePage, "aboutHeading")} className="text-3xl text-center">{homePage.aboutHeading}</h2>
        <div className="max-w-md text-sc-white">
          <div data-tina-field={tinaField(homePage, "aboutDescription")} className="mt-5 myprosedark">
            <TinaMarkdown content={homePage.aboutDescription} />
          </div>
          <LinkButton tinaField={tinaField(homePage, "aboutButtonText")} classes="mt-6" href="/about">
            {homePage.aboutButtonText}
          </LinkButton>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden sm:block max-w-6xl w-fit mx-auto gap-x-10">
        <div className="max-w-md text-sc-white">
          <h2 data-tina-field={tinaField(homePage, "aboutHeading")} className="text-4xl">{homePage.aboutHeading}</h2>
          <div data-tina-field={tinaField(homePage, "aboutDescription")} className="mt-5 myprosedark">
            <TinaMarkdown content={homePage.aboutDescription} />
          </div>
          <LinkButton tinaField={tinaField(homePage, "aboutButtonText")} classes="mt-6" href="/about">
            {homePage.aboutButtonText}
          </LinkButton>
        </div>
      </div>

    </div>
  );
}
