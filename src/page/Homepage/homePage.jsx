import { Layout, Menu } from "antd";
import { Content} from "antd/es/layout/layout";
import { useEffect, useState } from "react";
import CustomHeader from "../../component/CustomHeader/customHeader";
import Banner from "../../component/Banner/banner";
import './homePage.css'
import TrendingSection from "../../component/TrendingSection/trendingSection";


export default function HomePage()
{
    const [data, setData] = useState();


    return (
      <div id="homepage-wrapper">
          <CustomHeader></CustomHeader>
          <Banner></Banner>
          <TrendingSection></TrendingSection>
          
            
      </div>
    )
}