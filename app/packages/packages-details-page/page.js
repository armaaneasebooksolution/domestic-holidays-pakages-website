import Footer from "@/components/Common/Footer";
import Header from "@/components/Common/Header";
import LastMinuteDeals from "@/components/Home/LastMinuteDeals";
import Details from "@/components/PackagesDetails/Details";

const PackagesDetailsPage = () => {
  return (
    <>
      <Header />
      <Details />
      <div className="mt-10">
        <LastMinuteDeals />
      </div>
      <Footer />
    </>
  );
};

export default PackagesDetailsPage;
