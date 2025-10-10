import DynamicBanner from "@/components/Common/DynamicBanner";
import Footer from "@/components/Common/Footer";
import Header from "@/components/Common/Header";
import DestinationCard from "@/components/Destinations/DestinationCard";
import DestinationDetails from "@/components/Destinations/DestinationDetails";

const DestinationPage = () => {
  return (
    <>
      <Header />
      {/* <DynamicBanner
        title="Explore Destinations"
        bgImage="/assets/img/innerpages/breadcrumb-bg3.jpg"
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Destinations" }]}
      />
      <DestinationCard /> */}
      <DestinationDetails />
      <Footer />
    </>
  );
};

export default DestinationPage;
