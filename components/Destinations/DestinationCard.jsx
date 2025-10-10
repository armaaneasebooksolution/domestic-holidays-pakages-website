"use client";

import { useSelector, useDispatch } from "react-redux";
import { setPage } from "@/redux/slices/paginationSlice";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Pagination from "../Packages/Pagination";
import GlobalSearch from "../Common/GlobalSearch";
import Link from "next/link";

const offers = [
  {
    id: 1,
    src: "/assets/img/home1/destination-img1.jpg",
    alt: "Great Temple",
    tours: 12,
  },
  {
    id: 2,
    src: "/assets/img/home1/destination-img2.jpg",
    alt: "Delhi",
    tours: 8,
  },
  {
    id: 3,
    src: "/assets/img/home1/destination-img3.jpg",
    alt: "Jaipur",
    tours: 10,
  },
  {
    id: 4,
    src: "/assets/img/home1/destination-img4.jpg",
    alt: "Agra",
    tours: 6,
  },
  {
    id: 5,
    src: "/assets/img/home1/destination-img5.jpg",
    alt: "Kerala",
    tours: 15,
  },
  {
    id: 6,
    src: "/assets/img/home1/destination-img1.jpg",
    alt: "Chennai",
    tours: 9,
  },
  {
    id: 7,
    src: "/assets/img/home1/destination-img2.jpg",
    alt: "Mumbai",
    tours: 11,
  },
  {
    id: 8,
    src: "/assets/img/home1/destination-img3.jpg",
    alt: "Goa",
    tours: 7,
  },
  {
    id: 9,
    src: "/assets/img/home1/destination-img4.jpg",
    alt: "Hyderabad",
    tours: 5,
  },
  {
    id: 10,
    src: "/assets/img/home1/destination-img5.jpg",
    alt: "Rajasthan",
    tours: 13,
  },
];

export default function DestinationCard() {
  const dispatch = useDispatch();
  const { currentPage, itemsPerPage } = useSelector(
    (state) => state.pagination.destinations,
  );
  const searchTerm = useSelector((state) => state.search.destinations);

  //  Filter globally based on search state
  const filteredOffers = offers.filter((offer) =>
    offer.alt.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const totalPages = Math.ceil(filteredOffers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentOffers = filteredOffers.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  return (
    <section className="container mx-auto px-4 py-20">
      {/*  Global Search Component */}
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">
          Explore Destinations
        </h2>
        <GlobalSearch
          section="destinations"
          placeholder="Search destinations..."
        />
      </div>

      {/*  Cards Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {currentOffers.length > 0 ? (
          currentOffers.map((offer) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={offer.src}
                  alt={offer.alt}
                  width={800}
                  height={400}
                  className="h-96 w-full rounded-[20px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <Link
                  href="#"
                  className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-all duration-500 group-hover:opacity-100"
                >
                  <ArrowUpRight className="bg-primary-gradient h-10 w-10 rounded-full p-2 text-white" />
                </Link>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {offer.alt}
                </h3>
                <p className="text-sm text-gray-600">Tours ({offer.tours})</p>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No results found.
          </p>
        )}
      </div>

      {/*  Pagination */}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={(page) =>
          dispatch(setPage({ section: "destinations", page }))
        }
      />
    </section>
  );
}
