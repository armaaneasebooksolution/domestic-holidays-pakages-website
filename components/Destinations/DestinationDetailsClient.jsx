"use client";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDestinations } from "@/redux/slices/destinationSlice";
import DestinationDetails from "./DestinationDetails";

export default function DestinationDetailsClient({ destination }) {
  const dispatch = useDispatch();
  const {
    data: destinations,
    loading,
    error,
  } = useSelector(
    (state) => state.destinations || { data: [], loading: false, error: null },
  );

  useEffect(() => {
    //  Only fetch if Redux data is completely empty AND no destination prop
    if (!destinations.length && !destination) {
      dispatch(getDestinations());
    }
  }, [dispatch, destinations.length, destination]);

  //  If we have a destination from props, don’t show loading
  if (!destination && loading) {
    return (
      <div className="flex h-[70vh] items-center justify-center text-gray-600">
        Loading destination details...
      </div>
    );
  }

  if (error)
    return (
      <div className="flex h-[70vh] items-center justify-center text-red-600">
        {error}
      </div>
    );

  return <DestinationDetails destination={destination} />;
}
