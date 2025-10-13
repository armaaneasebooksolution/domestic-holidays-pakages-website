import Footer from "../Common/Footer";
import Header from "../Common/Header";
import Newsletter from "../Common/NewsLetter";
import BestService from "../Home/BestServices";
import PopularPackages from "../Home/PopularPackages";
import BestTimeToVisit from "./BestTimeToVisit";
import DestinationOverview from "./DestinationOverview";
import DestinationSlider from "./DestinationSlider";
import PopularPlaces from "./PopularPlaces";

const DestinationDetails = ({ destination }) => {
  return (
    <>
      <Header />
      <DestinationSlider images={destination.images} />
      <DestinationOverview destination={destination} />
      <PopularPackages />
      <BestService />
      <BestTimeToVisit destination={destination} />
      <PopularPlaces destination={destination} />
      <Newsletter />
      <Footer />
    </>
  );
};

export default DestinationDetails;
