import CustomHeader from "../../component/base/CustomHeader/customHeader";
import BannerSection from "../../component/section/BannerSection/bannerSection";
import TopRatedSection from "../../component/section/TopRatedSection/topRatedSection";
import TrendingSection from "../../component/section/TrendingSection/trendingSection";
import "./homePage.css";

export default function HomePage() {
  return (
    <div id="homepage-wrapper">
      <CustomHeader></CustomHeader>
      <BannerSection></BannerSection>
      <TrendingSection></TrendingSection>
      <TopRatedSection></TopRatedSection>
    </div>
  );
}
