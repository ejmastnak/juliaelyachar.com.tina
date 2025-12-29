import { tinaField } from "tinacms/dist/react";
import type { HomePageQuery } from "@tina/__generated__/types";
import LinkButton from '@tina/components/LinkButton.tsx'

type Props = {
  homePage: HomePageQuery
};

export default function About({ homePage }: Props) {
  return (
    <div className="px-5 sm:px-8 py-20 bg-sc-brown text-sc-white w-full" >

      {/* Mobile */}
      <div className="sm:hidden max-w-6xl w-fit mx-auto">
        <h2 className="text-3xl text-center">About Professor Elyachar</h2>
        <div className="max-w-md text-sc-white">
          <p className="mt-5">
            Julia Elyachar is associate professor of anthropology at the Princeton University Department of Anthropology and the Princeton Institute for International and Regional Studies.
            She is the author of the books <span className="italic">On the Semicivilized: Coloniality, Finance, and Embodied Sovereignty in Cairo</span> and <span className="italic">Markets of Dispossession: NGOs, Economic Development, and the State in Cairo</span>.
            Her work draws on fine-grained ethnography and regional expertise in the Middle East, Levant, and the Maghreb to open up areas for theoretical inquiry and conceptional innovation in anthropology and the social sciences more broadly.
          </p>
          <LinkButton href="/about">
            More about Professor Elyachar
          </LinkButton>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden sm:block max-w-6xl w-fit mx-auto gap-x-10">
        <div className="max-w-md text-sc-white">
          <h2 className="text-4xl">About Professor Elyachar</h2>
          <p className="mt-5">
            Julia Elyachar is associate professor of anthropology at the Princeton University Department of Anthropology and the Princeton Institute for International and Regional Studies.
            She is the author of the books <span className="italic">On the Semicivilized: Coloniality, Finance, and Embodied Sovereignty in Cairo</span> and <span className="italic">Markets of Dispossession: NGOs, Economic Development, and the State in Cairo</span>.
            Her work draws on fine-grained ethnography and regional expertise in the Middle East, Levant, and the Maghreb to open up areas for theoretical inquiry and conceptional innovation in anthropology and the social sciences more broadly.
          </p>
          <LinkButton href="/about">
            More about Professor Elyachar
          </LinkButton>
        </div>
      </div>

    </div>
  );
}
