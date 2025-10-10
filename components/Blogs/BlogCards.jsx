"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import GlobalSearch from "../Common/GlobalSearch";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../Packages/Pagination";
import { setPage } from "@/redux/slices/paginationSlice";
import TravelBlogs from "../Home/TravelBlogs";
import Newsletter from "../Common/NewsLetter";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title:
      "Explore the Spiritual Essence of Varanasi: A Journey Along the Ganges.",
    location: "Varanasi, Uttar Pradesh",
    date: "02 Jan.",
    image: "/assets/img/home1/blog-img1.jpg",
  },
  {
    id: 2,
    title: "Top 10 Beaches in Goa You Must Visit This Year.",
    location: "Goa, India",
    date: "10 Feb.",
    image: "/assets/img/home1/blog-img2.jpg",
  },
  {
    id: 3,
    title: "Royal Palaces and Heritage Walks Await You in Jaipur.",
    location: "Jaipur, Rajasthan",
    date: "22 Feb.",
    image: "/assets/img/home1/blog-img3.jpg",
  },
  {
    id: 4,
    title: "Backwaters Bliss: Kerala’s Most Relaxing Houseboat Escapes.",
    location: "Alleppey, Kerala",
    date: "05 Mar.",
    image: "/assets/img/home1/blog-img4.jpg",
  },
  {
    id: 5,
    title: "Adventure in the Himalayas: Trekking Routes You Can’t Miss.",
    location: "Manali, Himachal Pradesh",
    date: "18 Apr.",
    image: "/assets/img/home1/blog-img5.jpg",
  },
  {
    id: 6,
    title: "Discover Mumbai: The City of Dreams with Culture and Modernity.",
    location: "Mumbai, Maharashtra",
    date: "25 May.",
    image: "/assets/img/home1/blog-img6.jpg",
  },
];

const BlogCards = () => {
  const dispatch = useDispatch();
  const { currentPage, itemsPerPage } = useSelector(
    (state) => state.pagination.blogs,
  );
  const searchTerm = useSelector((state) => state.search.blogs);

  //  Filter blogs based on title or location
  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.location.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  //  Pagination logic
  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentBlogs = filteredBlogs.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  return (
    <>
      <section className="container mx-auto px-4 py-16">
        {/*  Global Search Component */}
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">
            Travel Inspiration from India
          </h2>
          <GlobalSearch section="blogs" placeholder="Search latest blogs..." />
        </div>

        {/*  Blog Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {currentBlogs.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="group flex h-[380px] w-full flex-col overflow-hidden rounded-[20px] border border-[#e8e8e8] bg-white p-4 transition-shadow duration-300 hover:shadow-md"
            >
              {/*  Image with shine + date */}
              <div className="relative overflow-hidden rounded-[20px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="h-56 w-full rounded-[20px] object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Shine Effect */}
                <div className="shine-effect pointer-events-none absolute inset-0 rounded-[20px]"></div>

                {/*  Date Badge */}
                <div className="absolute right-3 bottom-3 rounded-lg bg-white px-3 py-2 text-center shadow-md">
                  <p className="text-primary text-lg leading-none font-bold">
                    {item.date.split(" ")[0]}
                  </p>
                  <p className="text-sm leading-none">
                    {item.date.split(" ")[1]}
                  </p>
                </div>
              </div>

              {/*  Content */}
              <div className="flex flex-grow flex-col py-5">
                <div>
                  <p className="hover:border-primary hover:text-primary mb-2 inline-flex items-center gap-1 rounded-full border border-[#e8e8e8] px-3 py-1 text-xs font-semibold text-gray-700 transition-colors duration-300">
                    <svg
                      width="14"
                      height="16"
                      viewBox="0 0 14 16"
                      xmlns="http://www.w3.org/2000/svg"
                      className="hover:fill-primary transition-colors duration-300"
                    >
                      <path d="M6.81276 0C3.31734 0 0.473053 2.84433 0.473053 6.34163C0.473053 9.07242 4.2847 13.5258 5.92356 15.3136C6.15052 15.5628 6.47606 15.7042 6.81276 15.7042C7.14946 15.7042 7.475 15.5628 7.70196 15.3136C9.34082 13.5258 13.1525 9.07238 13.1525 6.34163C13.1525 2.84433 10.3082 0 6.81276 0ZM7.35966 14.9991C7.21642 15.1535 7.02297 15.2391 6.81276 15.2391C6.60255 15.2391 6.4091 15.1536 6.26586 14.9991C4.66417 13.2525 0.93812 8.90875 0.93812 6.34167C0.93812 3.10103 3.57221 0.465067 6.81276 0.465067C10.0533 0.465067 12.6874 3.10103 12.6874 6.34167C12.6874 8.90875 8.96135 13.2524 7.35966 14.9991Z"></path>
                      <path d="M6.81277 9.76647C8.6713 9.76647 10.1779 8.25983 10.1779 6.4013C10.1779 4.54277 8.6713 3.03613 6.81277 3.03613C4.95424 3.03613 3.4476 4.54277 3.4476 6.4013C3.4476 8.25983 4.95424 9.76647 6.81277 9.76647Z"></path>
                    </svg>
                    {item.location}
                  </p>
                </div>

                <Link href="#">
                  <h3 className="group-hover:text-primary line-clamp-2 text-lg font-semibold text-gray-900 transition">
                    {item.title}
                  </h3>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/*  Pagination */}
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={(page) => dispatch(setPage({ section: "blogs", page }))}
        />
      </section>
      <Newsletter />
    </>
  );
};

export default BlogCards;
