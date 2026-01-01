import { useTina, tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { MyTeachingPageQuery, MyTeachingPageQueryVariables, } from "@tina/__generated__/types";
import PageWrapper from '@tina/shared/PageWrapper.tsx'
import LinkButton from '@tina/components/LinkButton.tsx'
import Event from '@tina/components/Event.tsx'

type Props = {
  variables: MyTeachingPageQueryVariables;
  data: MyTeachingPageQuery;
  query: string;
};

export default function TeachingPage(props: Props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const teachingPage = data.teachingPage;

  return (
    <PageWrapper>
      
      <div className="mb-5 lg:mb-8 pb-5 lg:pb-8 border-b border-gray-200">
        <h1 data-tina-field={tinaField(teachingPage, "h1")} class="text-5xl ">{teachingPage.h1}</h1>
      </div>

      <div data-tina-field={tinaField(teachingPage, "description")} className="max-w-2xl prose"><TinaMarkdown content={teachingPage.description} /></div>
      <div data-tina-field={tinaField(teachingPage, "press")} className="mt-5 max-w-3xl prose"><TinaMarkdown content={teachingPage.press} /></div>

      <section class="mt-12">

        <h2 data-tina-field={tinaField(teachingPage, "coursesTaughtHeading")} class="text-4xl pb-3 border-b border-gray-200 w-fit">{teachingPage.coursesTaughtHeading}</h2>

        <p data-tina-field={tinaField(teachingPage, "syllabusAvailability")} class="italic my-6 text-gray-700">{teachingPage.syllabusAvailability}</p>

        <div>
          <h3 data-tina-field={tinaField(teachingPage, "princetonCoursesHeading")} class="text-2xl">{teachingPage.princetonCoursesHeading}</h3>
          <ul class="mt-3 ml-5 list-disc flex flex-col gap-y-2 text-gray-700">
            {teachingPage.princetonCourses.map((course) => (
            <li data-tina-field={tinaField(course, "name")} key={course.name}>{course.name}</li>
            ))}
          </ul>
        </div>

        <div class="mt-8">
          <h3 data-tina-field={tinaField(teachingPage, "uciCoursesHeading")} class="text-2xl">{teachingPage.uciCoursesHeading}</h3>
          <ul class="mt-3 ml-5 list-disc flex flex-col gap-y-2 text-gray-800">
            {teachingPage.uciCourses.map((course) => (
            <li data-tina-field={tinaField(course, "name")} key={course.name}>{course.name}</li>
            ))}
          </ul>
        </div>

        <div class="mt-8">
          <h3 data-tina-field={tinaField(teachingPage, "nyuCoursesHeading")} class="text-2xl">{teachingPage.nyuCoursesHeading}</h3>
          <ul class="mt-3 ml-5 list-disc flex flex-col gap-y-2 text-gray-700">
            {teachingPage.nyuCourses.map((course) => (
            <li data-tina-field={tinaField(course, "name")} key={course.name}>{course.name}</li>
            ))}
          </ul>
        </div>

      </section>
    </PageWrapper>
  );
}
