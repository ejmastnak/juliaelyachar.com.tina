import { tinaField } from "tinacms/dist/react";
import type { HomePageQuery } from "@tina/__generated__/types";
import LinkButton from '@tina/components/LinkButton.tsx'

const selectedArticles =  [
  {
    "citation": "“Public Wealth, Public Enemies, and the Right to Existence: Thinking about Wealth with the Earl of Lauderdale in Cairo and Split.” <i>Current Anthropology</i>, Volume 66, August 2025.",
    "category": "Political Economy and History of Thought (and Ethnography too)",
    "type": "article",
    "img": "/@imagetools/9895b5333746ee36f957931047c950fcf476bd84",
    "href": "https://www.journals.uchicago.edu/doi/full/10.1086/734215"
  },
  {
    "citation": "“Relational Finance: Ottoman Debt, Financialization, and the Problem of the Semi-Civilized.” <i>Journal of Cultural Economy</i> 16, no. 3 (February 2023): 323–36.",
    "category": "Political Economy and History of Thought (and Ethnography too)",
    "type": "article",
    "img": "/@imagetools/4290022afdb8eee10826d91d42d72f30ec2c947d",
    "href": "https://www.tandfonline.com/doi/full/10.1080/17530350.2023.2189146"
  },
  {
    "citation": "“Anthropology of Proprioception: Endurance and Collectivity on Unstable Grounds in Post-Revolutionary Cairo.” <i>American Anthropologist</i> 124, no. 3 (September 2022): 525–35.",
    "category": "Embodiment/Proprioception/Mobility",
    "type": "article",
    "img": "/@imagetools/b861268963de041e1c12920b1b0a6959cde07e48",
    "href": "https://anthrosource.onlinelibrary.wiley.com/doi/abs/10.1111/aman.13760"
  },
  {
    "citation": "“Neoliberalism and the Savage Slot: Rationality, Irrationality, and Calculating Value 1920-2020.” In <i>The Neoliberal Present? Political Economies in Flux</i>, William Callison and Zachary Manfredi, editors. Fordham University Press, 2019, pp. 177-195.",
    "category": "Neoliberalism",
    "type": "chapter",
    "img": "/@imagetools/4fb89eec8c514fd78fc8ac6c2e918f4b8cd857ed",
    "href": "https://academic.oup.com/fordham-scholarship-online/book/30820/chapter-abstract/262437051?redirectedFrom=fulltext"
  },
  {
    "citation": "“Upending Infrastructure in Times of Revolt.” In <i>Distributed Agency</i>, edited by Paul Kockelman and Nick Enfield (Oxford University Press, 2017), 49–56.",
    "category": "Infrastructure",
    "type": "article",
    "img": "/@imagetools/93e6ba50c20e46c078062e684cb5c7fba76140f4",
    "href": "https://academic.oup.com/book/2078/chapter-abstract/141995027?redirectedFrom=fulltext"
  },
  {
    "citation": "“They Tell Me This Is Jerusalem: Grammars of Belonging in Palestine.” In <i>Naseej, Life-Weavings of Palestine</i>, edited by Arpan Roy and Noura Salahaldeen (Pluto Press, 2024).",
    "category": "Palestine/Israel: Public Facing",
    "type": "chapter",
    "img": "/@imagetools/5d9a8704d5d9ac168b5eda959f47210aefdc3d92",
    "href": "https://www.plutobooks.com/9780745350844/naseej/"
  }
];

type Props = {
  homePage: HomePageQuery
};

export default function Articles({ homePage }: Props) {
  return (
    <div>
      <h2 className="text-4xl">Recent articles and chapters</h2>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {selectedArticles.map((article) => (
          <div>
            <a target="_blank" rel="noopener noreferrer" href={article.href} className="block w-fit mx-auto rounded overflow-hidden hover:shadow-lg hover:ring-2 hover:ring-gray-200">
              <img src={article.img} className="max-w-sm h-96 object-cover object-center mx-auto"/>
            </a>
            <p className="mt-1 text-center leading-snug">
              {article.citation}
            </p>
          </div>  
        ))}

      </div>

      <div className="mt-5 mx-auto w-fit">
        <LinkButton href="/publications#articles">
          More articles
        </LinkButton>
      </div>

    </div>
  );
}
