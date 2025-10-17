import Header from "@/components/Common/Header";
import Footer from "@/components/Common/Footer";
import DynamicBanner from "@/components/Common/DynamicBanner";
import GetQuoteForm from "@/components/GetQouteForm/GetQuoteForm";

export const metadata = {
  title: "Get a Quote | TikTraveller",
  description:
    "Get your personalized tour quote instantly. Fill your travel details and we’ll connect with you shortly.",
};

//  async and await searchParams
export default function GetQuotePage({ searchParams }) {
  // const params = await searchParams;
  const packageName = searchParams?.package || "Custom Tour Package";

  return (
    <>
      <Header />
      <DynamicBanner
        title="Get Your Travel Quote"
        bgImage="/assets/img/innerpages/breadcrumb-bg3.jpg"
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Get Quote" }]}
      />

      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-6 text-center text-3xl font-semibold text-gray-900">
          Booking Enquiry for{" "}
          <span className="text-primary">{packageName}</span>
        </h2>
        <p className="mb-12 text-center text-gray-600">
          Fill the form below and our experts will prepare a custom quote for
          your trip within minutes.
        </p>

        <GetQuoteForm packageName={packageName} />
      </section>

      <Footer />
    </>
  );
}
