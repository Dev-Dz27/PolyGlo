import CallToAction from '~/components/widgets/CallToAction';
import Contact2 from '~/components/widgets/Contact2';
import Features2 from '~/components/widgets/Features2';
import { callToActionData2, callToActionData2fr, contact2Data, contact2DataFr, faqs4Data, featuresData2Fr } from '~/shared/data';

import { featuresData2 } from '~/shared/data';

const Page = ({
  params,
}: {
  params: { lang: string; country: string };
}) => {


    // callToActionDataTranslated
    const callToActionDataTranslated =
    params.lang === "en" ? callToActionData2 : callToActionData2fr;

    // callToActionDataTranslated
    const contact2DataTranslated =
    params.lang === "en" ? contact2Data : contact2DataFr;

    // callToActionDataTranslated
    const featuresData2Translated =
    params.lang === "en" ? featuresData2 : featuresData2Fr;
  return (
    <>
      {/* <Contact2 {...contact2DataTranslated} /> */}
      {/* <CallToAction cta={callToActionDataTranslated} /> */}

      <div className="relative h-0 pb-[56.25%]">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3230.6840452415117!2d0.08745471028791241!3d35.93023297239328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128202139598f319%3A0xc5767572247a435d!2sPolyglo!5e0!3m2!1sen!2sdz!4v1682027348716!5m2!1sen!2sdz"
    style={{ border: 0 }}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="absolute inset-0 w-full h-full bordeer-0"
  ></iframe>
</div>

      <Features2 {...featuresData2Translated} />
    </>
  );
};

export default Page;
