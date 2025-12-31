import { tinaField } from "tinacms/dist/react";
import type { HomePageQuery } from "@tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import LinkButton from '@tina/components/LinkButton.tsx'
import Event from '@tina/components/Event.tsx'
import client from "@tina/__generated__/client";

type Props = {
  homePage: HomePageQuery
};

const eventsEnvelope = await client.queries.myEvent({ relativePath: "index.json" });
const myEvents = eventsEnvelope.data.event.events;

const events = [
  {
    "title": "Financialized Counterinsurgency: Sovereign Wealth Funds and the Remaking of Cairo after 2013",
    "institution": "Centre for Gulf Studies, University of Exeter",
    "type": "Seminar",
    "date": "2025-03-18",
    "time": "17:00 GMT",
    "location": "Online Centre for Gulf Studies | University of Exeter",
    "description": "Elyachar draws on her new book <i>On the Semi-Civilized: Coloniality, Finance, and Embodied Sovereignty</i>, to discuss the coloniality that shaped—and blocked—sovereign futures for those dubbed barbarian and semicivilized in the former Ottoman Empire.",
    "href": "https://www.exeter.ac.uk/events/details/index.php?event=14204",
    "hrefText": "Link"
  },
  {
    "title": "Book Talk: <i>On the Semi-Civilized: Coloniality, Finance, and Embodied Sovereignty in Cairo</i>",
    "institution": "Department of Anthropology, Princeton University",
    "type": "Book talk",
    "date": "2025-04-24",
    "time": "4:30 pm EST",
    "location": "219 Aaron Burr Hall",
    "description": "Elyachar discusses her new book <i>On the Semi-Civilized: Coloniality, Finance, and Embodied Sovereignty</i>.",
    "href": "https://www.princeton.edu/events/2025/julia-elyachar-semicivilized-coloniality-finance-and-embodied-sovereignty-cairo",
    "hrefText": "Link"
  },
  {
    "title": "Semicivilized Finance: Learning from the Ottoman Sarraf",
    "institution": "Doll Lecture on Religion and Money, Center for Culture, Society, and Religion, Princeton University",
    "type": "Lecture",
    "date": "2025-09-10",
    "time": "4:30 pm EST",
    "location": "219 Aaron Burr Hall",
    "description": "Using historical anthropology, Elyachar examines the <i>sarraf</i> (\"money-changer\" or \"banker\") as a node in dynamic financial relationships deemed \"semicivilized\".",
    "href": "https://anthropology.princeton.edu/events/semicivilized-finance-learning-ottoman-sarraf",
    "hrefText": "Link"
  },
  {
    "title": "Fatima Seck interviews Julia Elyachar",
    "institution": "Conversations in Atlantic Theory, Journal of French and Francophone philosophy,",
    "type": "Interview",
    "date": "2025-09-19",
    "time": "",
    "location": "Online",
    "description": "<i>Conversations in Atlantic Theory</i> explore the cultural, political, and philosophical traditions of the Atlantic world, ranging from European critical theory to the black Atlantic to sites of indigenous resistance and self-articulation, as well as the complex geography of thinking between traditions, inside traditions, and from positions of insurgency, critique, and counternarrative.",
    "href": "https://open.spotify.com/show/1ZeVJKEE5aq4A6kJvb0A52",
    "hrefText": "Link"
  },
  {
    "title": "Mikey Muhanna interviews Julia Elyachar",
    "institution": "Afikra Podcast",
    "type": "Interview",
    "date": "2025-10-03",
    "time": "",
    "location": "Online",
    "description": "The <i>afikra Podcast</i> features experts from academia, art, media, urban planning, and beyond, who are helping document and shape the histories and cultures of the Arab world through work.",
    "href": "https://explore.afikra.com/podcast/the-afikra-podcast/r/recpupcENTxYHkeb6",
    "hrefText": "Link"
  },
  {
    "title": "Public Talk about On the Semicivilized",
    "institution": "University of London",
    "type": "Public Talk",
    "date": "2026-02-12",
    "time": "",
    "location": "University of London",
    "description": "In the series: \"Histories of Capitalism and Race in the Middle East and Beyond,\" School of Oriental and African Studies (SOAS), University of London. ",
    "href": ""
  }
]

const today = new Date()
const N = 2

const upcomingEvents = myEvents.filter(e => new Date(e.date) >= today).sort((a, b) => a.date >= b.date ? 1 : -1);
const pastEvents = myEvents.filter(e => new Date(e.date) < today).sort((a, b) => a.date < b.date ? 1 : -1);

export default function About({ homePage }: Props) {
  return (
    <div>


      <h2 data-tina-field={tinaField(homePage, "eventsHeading")} className="text-5xl">{homePage.eventsHeading}</h2>
      <ul role="list" className="mt-8 lg:mt-12 flex flex-col gap-y-8 w-fit">
        {upcomingEvents.slice(0, N).map((event) => (
          <li><Event event={event}/></li>
        ))}
        <li className="border-t border-gray-300"/>
        {upcomingEvents.length < N && 
          pastEvents.slice(0, N - pastEvents.length).map((event) => (
            <li><Event event={event}/></li>
          ))
        }
      </ul>
      <LinkButton classes="mt-5" href="/events" tinaField={tinaField(homePage, "eventsButtonText")} >
        {homePage.eventsButtonText}
      </LinkButton>
    </div>   
  );
}
