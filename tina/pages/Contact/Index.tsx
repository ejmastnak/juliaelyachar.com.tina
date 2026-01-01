import { useTina, tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import PageWrapper from '@tina/shared/PageWrapper.tsx'

import type { MyContactPageQuery, MyContactPageQueryVariables } from "@tina/__generated__/types";
type Props = {
  variables: MyContactPageQueryVariables;
  data: MyContactPageQuery;
  query: string;
};

export default function ContactPage(props: Props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const contactPage = data.contactPage;

  return (
    <PageWrapper>
      <div className="mb-5 lg:mb-8 pb-5 lg:pb-8 border-b border-gray-200">
        <h1 data-tina-field={tinaField(contactPage, "h1")} class="text-5xl">{contactPage.h1}</h1>
      </div>

      <div>
        <h2 data-tina-field={tinaField(contactPage, "officeAddressHeading")} class="font-semibold">{contactPage.officeAddressHeading}</h2>
        <div data-tina-field={tinaField(contactPage, "officeAddress")}>
          <TinaMarkdown content={contactPage.officeAddress} />
        </div>
      </div>

      <div class="mt-5">
        <h2 data-tina-field={tinaField(contactPage, "emailHeading")} class="font-semibold">{contactPage.emailHeading}</h2>
        <a data-tina-field={tinaField(contactPage, "email")} class="block hover:text-blue-700" href={`mailto:${contactPage.email}`}>
          {contactPage.email}
        </a>
      </div>

      <div class="mt-5">
        <h2 data-tina-field={tinaField(contactPage, "officePhoneHeading")} class="font-semibold">{contactPage.officePhoneHeading}</h2>
        <a data-tina-field={tinaField(contactPage, "officePhone")} class="block hover:text-blue-700" href={`tel:${contactPage.officePhoneMachineReadable}`}>
          {contactPage.officePhone}
        </a>
      </div>

    </PageWrapper>
  );
}
