"use client";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPage } from "@/redux/slices/paginationSlice";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Pagination from "../Packages/Pagination";
import GlobalSearch from "../Common/GlobalSearch";
import Link from "next/link";

export default function DestinationCard() {
  const dispatch = useDispatch();
  const { currentPage, itemsPerPage } = useSelector(
    (state) => state.pagination.destinations,
  );
  const searchTerm = useSelector((state) => state.search.destinations);
  const [destinations, setDestinations] = useState([]);

  //  Fetch data from JSON file (inside /data)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/data/destinations.json");
        console.log(res);
        const data = await res.json();
        setDestinations(data);
      } catch (error) {
        console.error("Failed to load destinations:", error);
      }
    };
    fetchData();
  }, []);

  //  Filter based on global search
  const filteredOffers = destinations.filter((offer) =>
    offer.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  //  Pagination Logic
  const totalPages = Math.ceil(filteredOffers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentOffers = filteredOffers.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  return (
    <section className="container mx-auto px-4 py-20">
      {/* ===== Header + Search ===== */}
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-900">
          Explore Destinations
        </h2>
        <GlobalSearch
          section="destinations"
          placeholder="Search destinations..."
        />
      </div>

      {/* ===== Cards Grid ===== */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {currentOffers.length > 0 ? (
          currentOffers.map((offer) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={
                    offer.images?.[0] ||
                    offer.src ||
                    "/assets/img/placeholder.jpg"
                  }
                  alt={offer.name}
                  width={800}
                  height={400}
                  className="h-80 w-full rounded-[20px] object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* ✅ Dynamic Link using slug */}
                <Link
                  href={`/destinations/${offer.slug}`}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-all duration-500 group-hover:opacity-100"
                >
                  <ArrowUpRight className="bg-primary-gradient h-10 w-10 rounded-full p-2 text-white" />
                </Link>
              </div>

              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {offer.name}
                </h3>
                <p className="text-sm text-gray-600">Tours ({offer.tours})</p>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No destinations found.
          </p>
        )}
      </div>

      {/* ===== Pagination ===== */}
      {totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={(page) =>
            dispatch(setPage({ section: "destinations", page }))
          }
        />
      )}
    </section>
  );
}
