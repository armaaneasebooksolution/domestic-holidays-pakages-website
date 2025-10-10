import BestService from "../Home/BestServices";
import BestTimeToVisit from "./BestTimeToVisit";
import DestinationOverview from "./DestinationOverview";
import DestinationSlider from "./DestinationSlider";
import PopularPlaces from "./PopularPlaces";

const DestinationDetails = () => {
  return (
    <>
      <DestinationSlider />
      <DestinationOverview />
      <PopularPlaces />
      <BestService />
      <BestTimeToVisit />
    </>
  );
};

export default DestinationDetails;
