import Pricing from "~/components/widgets/Pricing";
import Comparison from "~/components/widgets/Comparison";
import FAQs3 from "~/components/widgets/FAQs3";
import { comparisonData, comparisonDataFr, pricingData, pricingDataFr } from "~/shared/data";

const Page = ({ params }: { params: { lang: string; country: string } }) => {
  const pricingDataTranslated =
    params.lang === "en" ? pricingData : pricingDataFr;

  const comparisonDataTranslated =
    params.lang === "en" ? comparisonData : comparisonDataFr;
  return (
    <>
      <Pricing {...pricingDataTranslated} />
      <Comparison {...comparisonDataTranslated} />
      <FAQs3 />
    </>
  );
};

export default Page;
