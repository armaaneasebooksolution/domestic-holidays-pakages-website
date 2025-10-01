import Footer from "@/components/Common/Footer";
import Header from "@/components/Common/Header";
import Newsletter from "@/components/Common/NewsLetter";
import PromotionBanner from "@/components/Common/PromotionBanner";
import Testimonials from "@/components/Common/Testimonial";
import WhyBestAgency from "@/components/Common/WhyBestAgency";
import BestService from "@/components/Home/BestServices";
import DiscountOffers from "@/components/Home/DiscountOffers";
import FeaturedDestination from "@/components/Home/FeaturedDestination";
import HeroBanner from "@/components/Home/HeroBanner";
import LastMinuteDeals from "@/components/Home/LastMinuteDeals";
import PopularPackages from "@/components/Home/PopularPackages";
import SearchForm from "@/components/Home/SearchForm";
import TopDestinations from "@/components/Home/TopDestination";
import TravelBlogs from "@/components/Home/TravelBlogs";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroBanner />
      {/* <div className="block md:hidden">
        <SearchForm />
      </div> */}
      <DiscountOffers />
      <FeaturedDestination />
      <BestService />
      <LastMinuteDeals />
      <PopularPackages />
      <PromotionBanner />
      <Testimonials />
      <WhyBestAgency />
      <TravelBlogs />
      <Newsletter />
      <Footer />
      {/* <TopDestinations /> */}
    </>
  );
};

export default HomePage;
