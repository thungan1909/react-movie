import { Layout, Menu } from "antd";
import { Content} from "antd/es/layout/layout";
import { useEffect, useState } from "react";
import CustomHeader from "../../component/CustomHeader/customHeader";
import Banner from "../../component/Banner/banner";
import './homePage.css'
import TrendingSection from "../../component/TrendingSection/trendingSection";
import LastestSection from "../../component/LastestSection/latestSection";
import NowPlayingSection from "../../component/NowPlayingSection/nowPlayingSection";
import TopRatedSection from "../../component/TopRatedSection/topRatedSection";
import SearchResult from "../../component/SearchResult/searchResult";


export default function HomePage()
{
    return (
      <div id="homepage-wrapper">
          <CustomHeader></CustomHeader>
          <Banner></Banner>
          <TrendingSection></TrendingSection>  
          <TopRatedSection></TopRatedSection>
          {/* <LastestSection></LastestSection> */}
      </div>
    )
}