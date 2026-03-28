import { tinaField } from "tinacms/dist/react";
import { useEffect, useState } from "react";
import type { MyHomePageQuery, Event, } from "@tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import LinkButton from '@tina/components/LinkButton.tsx'
import Event from '@tina/components/Event.tsx'

type Props = {
  homePage: MyHomePageQuery;
  events: Array<Event>;
};

export default function About({ homePage, events }: Props) {

  const EVENTS_TO_DISPLAY = 2

  function sortAsc(a, b) {
    return new Date(a.date) - new Date(b.date);
  }

  function sortDesc(a, b) {
    return new Date(b.date) - new Date(a.date);
  }

  function splitEvents(events, today) {
    const upcoming = [];
    const past = [];

    events.forEach((e) => {
      const date = new Date(e.date);
      if (date >= today) upcoming.push(e);
        else past.push(e);
    });

    return {
      upcoming: upcoming.sort(sortAsc),
      past: past.sort(sortDesc),
    };
  }

  // SSG fallback (runs at build time) 
  const initial = splitEvents(events, new Date());

  // Runs during SSG, and also client-side if JS enabled
  const [upcomingEvents, setUpcomingEvents] = useState(initial.upcoming);
  const [pastEvents, setPastEvents] = useState(initial.past);

  useEffect(() => {
    const { upcoming, past } = splitEvents(events, new Date());
    setUpcomingEvents(upcoming);
    setPastEvents(past);
  }, [events]);

  return (
    <div>
      <h2 data-tina-field={tinaField(homePage, "eventsHeading")} className="text-5xl">{homePage.eventsHeading}</h2>
      <ul role="list" className="mt-8 lg:mt-12 flex flex-col gap-y-8 w-fit">
        {upcomingEvents.slice(0, EVENTS_TO_DISPLAY).map((event) => (
          <li key={event.id}><Event event={event}/></li>
        ))}
        <li className="border-t border-gray-300"/>
        {upcomingEvents.length < EVENTS_TO_DISPLAY && 
          pastEvents.slice(0, EVENTS_TO_DISPLAY - pastEvents.length).map((event) => (
            <li key={event.id}><Event event={event}/></li>
          ))
        }
      </ul>
      <LinkButton classes="mt-5" href="/events" tinaField={tinaField(homePage, "eventsButtonText")} >
        {homePage.eventsButtonText}
      </LinkButton>
    </div>   
  );
}
