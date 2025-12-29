import { tinaField } from "tinacms/dist/react";
import type { HomePageQuery } from "@tina/__generated__/types";
import LinkButton from '@tina/components/LinkButton.tsx'

type Props = {
  homePage: HomePageQuery
};

export default function Hero({ homePage }: Props) {

  return (
    <div
      className="px-5 sm:px-8 pt-8 sm:pt-12 md:pt-24 pb-28 bg-sc-brown w-full text-sc-white" 
    >

      {/* Mobile */}
      <div className="md:hidden mx-auto w-fit">
        <h1 className="text-center sm:text-left text-4xl">Julia Elyachar</h1>

        <img src={homePage.heroImg} alt={homePage.heroImgAlt} className="my-5 mx-auto sm:mx-0 w-full max-w-[200px] sm:max-w-[300px] h-64 rounded object-cover object-right" />

        <div className="max-w-lg text-center sm:text-left">
          <p>
            Julia Elyachar is an anthropologist, political economist, and award winning author.
          </p>
          <p className="mt-3">
            She was trained in anthropology, economics, history of political and economic thought, political economy, social theory, Middle Eastern Studies, and Arabic language.
            She is an associate professor of anthropology at Princeton University, and associate professor at the Princeton Institute for International and Regional Studies.
            She is a Faculty Researcher with the Dignity and Debt network and serves on the Executive Boards of the Princeton Institute for International and Regional Studies, and the Center for Iran and Persian Gulf Studies. 
          </p>

          <LinkButton classes="mt-5" href="/books/on-the-semicivilized">
            New book: <span className="italic">On the Semicivilized</span>
          </LinkButton>

        </div>

      </div>

      {/* Desktop */}
      <div className="hidden md:flex max-w-6xl w-fit mx-auto gap-x-12 xl:gap-x-16">

        <img src={homePage.heroImg} alt={homePage.heroImgAlt} className="max-w-sm xl:max-w-md h-80 rounded object-cover object-right" />

        <div className="max-w-md">
          <h1 className="text-4xl">Julia Elyachar</h1>
          <p className="mt-5">
            Julia Elyachar is an anthropologist, political economist, and award winning author.
          </p>
          <p className="mt-3">
            She was trained in anthropology, economics, history of political and economic thought, political economy, social theory, Middle Eastern Studies, and Arabic language.
            She is an associate professor of anthropology at Princeton University, and associate professor at the Princeton Institute for International and Regional Studies.
            She is a Faculty Researcher with the Dignity and Debt network and serves on the Executive Boards of the Princeton Institute for International and Regional Studies, and the Center for Iran and Persian Gulf Studies. 
          </p>

          <LinkButton classes="mt-5" href="/books/on-the-semicivilized">
            New book: <span className="italic">On the Semicivilized</span>
          </LinkButton>

        </div>

      </div>

    </div>


  );

}
