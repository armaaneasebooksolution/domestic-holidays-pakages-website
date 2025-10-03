import Footer from "@/components/Common/Footer";
import Header from "@/components/Common/Header";
import Newsletter from "@/components/Common/NewsLetter";
import PackagesBanner from "@/components/Packages/PackagesBanner";
import ResultGrid from "@/components/Packages/ResultGrid";

const Packages = () => {
  return (
    <>
      <Header />
      <PackagesBanner />
      <ResultGrid />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Packages;
