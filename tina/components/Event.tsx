import { ChevronRightIcon } from '@heroicons/react/24/outline'

type Props = {
  event: {
    title: string,
    institution: string,
    date: string,
    time?: string,
    location: string,
    description: string,
    href: string,
  }
};

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/**
  Input date of the form YYYY-MM-DD
  Output month as e.g. "Sep" or "Oct"
*/
function month(inputDate) {
  const date = new Date(inputDate);
  const month = months[date.getMonth()];
  return month;
}

/**
  Input date of the form YYYY-MM-DD
  Output day as e.g. "9" or "12"
*/
function day(inputDate) {
  const date = new Date(inputDate);
  return date.getDate();
}

function year(inputDate) {
  const date = new Date(inputDate);
  return date.getFullYear();
}

function date2string(inputDate) {
  const date = new Date(inputDate);
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}


export default function Event({event}: Props) {

  return (
    <div className="flex gap-x-4">

      {/* Date */}
      <div className="text-center">
        <p className="text-xl text-gray-800">{month(event.date)}</p>
        <p className="-mt-1 text-3xl font-medium text-gray-700">{day(event.date)}</p>
        <p className="-mt-0.5 font-medium text-gray-700">{year(event.date)}</p>
      </div>

      <div>
        <p className="font-semibold">{event.title}</p>
        <p className="italic text-sm">{event.institution}</p>
        <p className="mt-px text-gray-700 text-sm">{event.tye}</p>
        <p className="text-gray-700 text-sm">{event.location}</p>
        <p className="mt-3 text-sm max-w-2xl">{event.description}</p>
        {event.href && <a href={event.href} className="mt-3 w-fit text-sm font-semibold flex items-center hover:text-gray-900 hover:underline"><span>{event.hrefText}</span> <ChevronRightIcon className="size-5 shrink-0 translate-y-px"/></a>}
      </div>
    </div>
  );

}
