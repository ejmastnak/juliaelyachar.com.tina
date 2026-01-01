import { useTina, tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { MyEventsPageQuery, MyEventsPageQueryVariables, MyEventQuery } from "@tina/__generated__/types";
import PageWrapper from '@tina/shared/PageWrapper.tsx'
import LinkButton from '@tina/components/LinkButton.tsx'
import Event from '@tina/components/Event.tsx'

type Props = {
  variables: MyEventsPageQueryVariables;
  data: MyEventsPageQuery;
  query: string;
  eventsData: MyEventQuery;
};

export default function EventsPage(props: Props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const eventsPage = data.eventsPage;

  const events = props.eventsData.event.events;

  const today = new Date()
  const N = 2

  const upcomingEvents = events.filter(e => new Date(e.date) >= today).sort((a, b) => a.date >= b.date ? 1 : -1);
  const pastEvents = events.filter(e => new Date(e.date) < today).sort((a, b) => a.date < b.date ? 1 : -1);

  return (
    <PageWrapper>
      <div className="mb-5 lg:mb-8 pb-5 lg:pb-8 border-b border-gray-200">
        <h1 data-tina-field={tinaField(eventsPage, "h1")} class="text-5xl ">{eventsPage.h1}</h1>
      </div>

      <div class="lg:flex lg:gap-x-10">

        <div>

          {/* Upcoming events */}
          <div>
            <h2 data-tina-field={tinaField(eventsPage, "upcomingEventsHeading")} class="text-2xl font-semibold">{eventsPage.upcomingEventsHeading}</h2>
            <ul role="list" class="divide-y divide-gray-200">
              {upcomingEvents.map((event) => (
                <li class="py-5"><Event event={event} /></li>
              ))}
            </ul>
          </div>

          {/* Past events */}
          <div class="mt-10 md:mt-16">
            <h2 data-tina-field={tinaField(eventsPage, "pastEventsHeading")} class="text-2xl font-semibold">{eventsPage.pastEventsHeading}</h2>
            <ul role="list" class="divide-y divide-gray-200">
              {pastEvents.map((event) => (
                <li class="py-5"><Event event={event} /></li>
              ))}
            </ul>
          </div>
        </div>

        <img data-tina-field={tinaField(eventsPage, "img")} src={eventsPage.img} alt={eventsPage.imgAlt} class="hidden lg:block max-w-md h-96 rounded object-cover object-right" />

      </div>
    </PageWrapper>
  );
}
