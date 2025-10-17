import BlogDetails from "@/components/Blogs/BlogDetails";
import BlogList from "@/components/Blogs/BlogList";
import DynamicBanner from "@/components/Common/DynamicBanner";
import Footer from "@/components/Common/Footer";
import Header from "@/components/Common/Header";

const TravelInspiration = () => {
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
      <BlogList />
      <Footer />
      {/* <BlogDetails /> */}
    </>
  );
};

export default TravelInspiration;
