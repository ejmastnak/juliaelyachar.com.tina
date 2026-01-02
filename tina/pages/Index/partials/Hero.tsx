import { tinaField } from "tinacms/dist/react";
import type { HomePageQuery } from "@tina/__generated__/types";
import LinkButton from '@tina/components/LinkButton.tsx'
import { TinaMarkdown } from "tinacms/dist/rich-text";

type Props = {
  homePage: HomePageQuery
};

export default function Hero({ homePage }: Props) {

  const components = {
    p: (props) => (
      <p className="mt-2">{props.children}</p>
    ),
  };

  return (
    <div
      className="px-5 sm:px-8 pt-8 sm:pt-12 md:pt-24 pb-28 bg-sc-brown w-full text-sc-white" 
    >

      {/* Mobile */}
      <div className="md:hidden mx-auto w-fit">
        <h1 className="text-center sm:text-left text-4xl" data-tina-field={tinaField(homePage, "heroHeading")}>{homePage.heroHeading}</h1>
        <img src={homePage.heroImg} alt={homePage.heroImgAlt} data-tina-field={tinaField(homePage, "heroImg")} className="my-5 mx-auto sm:mx-0 w-full max-w-[200px] sm:max-w-[300px] h-64 rounded object-cover object-right" />
        <div className="max-w-lg text-center sm:text-left">
          <div data-tina-field={tinaField(homePage, "heroDescription")} className="mt-5 flex flex-col gap-y-2">
            <TinaMarkdown content={homePage.heroDescription} />
          </div>
          <LinkButton tinaField={tinaField(homePage, "heroButtonText")} classes="mt-5" href="/books/on-the-semicivilized">
            <TinaMarkdown content={homePage.heroButtonText} />
          </LinkButton>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex max-w-6xl w-fit mx-auto gap-x-12 xl:gap-x-16">
        <img src={homePage.heroImg} alt={homePage.heroImgAlt} data-tina-field={tinaField(homePage, "heroImg")} className="max-w-sm xl:max-w-md h-80 rounded object-cover object-right" />
        <div className="max-w-md">
          <h1 className="text-4xl" data-tina-field={tinaField(homePage, "heroHeading")}>{homePage.heroHeading}</h1>
          <div data-tina-field={tinaField(homePage, "heroDescription")} className="mt-5 flex flex-col gap-y-2">
            <TinaMarkdown content={homePage.heroDescription} />
          </div>
          <LinkButton tinaField={tinaField(homePage, "heroButtonText")} classes="mt-5" href="/books/on-the-semicivilized">
            <TinaMarkdown content={homePage.heroButtonText} />
          </LinkButton>
        </div>
      </div>

    </div>


  );

}
