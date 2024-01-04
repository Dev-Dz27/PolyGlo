
import Hero from "~/components/widgets/Hero";
import Features3 from "~/components/widgets/Features3";
import Content from "~/components/widgets/Content";
import Steps from "~/components/widgets/Steps";
import Testimonial from "~/components/widgets/Testimonial";
import FAQs2 from "~/components/widgets/FAQs2";
import Pricing from "~/components/widgets/Pricing";
import Team from "~/components/widgets/Team";
import CallToAction2 from "~/components/widgets/CallToAction2";
import Contact from "~/components/widgets/Contact";

import {
  content2Data,
  contentData,
  featuresData,
  callToActionData2fr,
  featuresDataFr,
  contentDataFr,
  content2DataFr,
  stepsData,
  stepsDataFr,
  testimonialData,
  testimonialDataFr,
  heroDataFr,
  heroData,
  faqsData,
  faqsDataFr,
  pricingData,
  pricingDataFr,
  callToActionData2,
  teamData,
  teamDataFr,
  contactData,
  contactDataFr,
} from "~/shared/data";
import FacebookMsg from "~/components/widgets/FacebookMsg";


export default async function Home({
  params,
}: {
  params: { lang: string; country: string };
}) {


  // featuresDataTranslated
  const featuresDataTranslated =
    params.lang === "en" ? featuresData : featuresDataFr;

  // callToActionDataTranslated
  const contentDataTranslated =
    params.lang === "en" ? contentData : contentDataFr;

  // callToActionDataTranslated
  const content2DataTranslated =
    params.lang === "en" ? content2Data : content2DataFr;

  // callToActionDataTranslated
  const stepsDataTranslated = params.lang === "en" ? stepsData : stepsDataFr;

  // callToActionDataTranslated
  const testimonialDataTranslated =
    params.lang === "en" ? testimonialData : testimonialDataFr;

  // callToActionDataTranslated
  const HeroDataTranslated = params.lang === "en" ? heroData : heroDataFr;

  // callToActionDataTranslated
  const faqsDataTranslated = params.lang === "en" ? faqsData : faqsDataFr;

  // callToActionDataTranslated
  const pricingDataTranslated =
    params.lang === "en" ? pricingData : pricingDataFr;

  // callToActionDataTranslated
  const callToActionDataTranslated =
    params.lang === "en" ? callToActionData2 : callToActionData2fr;

  // callToActionDataTranslated
  const teamDataTranslated =
    params.lang === "en" ? teamData : teamDataFr;



  // callToActionDataTranslated
  const contactDataTranslated =
    params.lang === "en" ? contactData : contactDataFr;
  return (
    <>

      <Hero {...HeroDataTranslated} />
      {/* <SocialProof /> */}
      <Features3 {...featuresDataTranslated} />
      <Content {...contentDataTranslated} />
      <Content {...content2DataTranslated} />
      <Steps {...stepsDataTranslated} />
      <Testimonial {...testimonialDataTranslated} />
      <FAQs2 {...faqsDataTranslated} />
      <Pricing {...pricingDataTranslated} />
      <Team  {...teamDataTranslated} />
      <Contact {...contactDataTranslated}/>
      <CallToAction2 {...callToActionDataTranslated} />
      {/* <FacebookMsg /> */}
     
    </>
  );
}
