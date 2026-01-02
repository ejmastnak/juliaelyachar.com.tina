import { tinaField } from "tinacms/dist/react";
import type { MyHomePageQuery, Event, } from "@tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import LinkButton from '@tina/components/LinkButton.tsx'
import Event from '@tina/components/Event.tsx'

type Props = {
  homePage: MyHomePageQuery;
  events: Array<Event>;
};

export default function About({ homePage, events }: Props) {

  const today = new Date()
  const N = 2

  const upcomingEvents = events.filter(e => new Date(e.date) >= today).sort((a, b) => a.date >= b.date ? 1 : -1);
  const pastEvents = events.filter(e => new Date(e.date) < today).sort((a, b) => a.date < b.date ? 1 : -1);

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
