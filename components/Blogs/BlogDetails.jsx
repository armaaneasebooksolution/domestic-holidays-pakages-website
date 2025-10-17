import DynamicBanner from "../Common/DynamicBanner";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import Newsletter from "../Common/NewsLetter";
import TravelBlogs from "../Home/TravelBlogs";
import BlogDetailContent from "./BlogDetailContent";

const BlogDetails = () => {
  return (
    <>
      <Header />
      <DynamicBanner
        title="Travel Inspiration"
        bgImage="/assets/img/innerpages/breadcrumb-bg3.jpg"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Travel Inspiration" },
        ]}
      />
      <BlogDetailContent />
      <TravelBlogs />
      <Newsletter />
      <Footer />
    </>
  );
};

export default BlogDetails;
