import { Layout, Menu } from "antd";
import { Content} from "antd/es/layout/layout";
import { useEffect, useState } from "react";
import CustomHeader from "../../component/CustomHeader/customHeader";
import Hero from "../../component/Hero/hero";
import './homePage.css'
import BASE_URL from '../../utils/api'
import options from "../../utils/options";


export default function HomePage()
{
    const [data, setData] = useState();

    // fetch(`${BASE_URL}search/basic?country=us&service=netflix&type=movie&genre=18&page=1&output_language=en&language=en`, options)
    //     .then(
    //         response => response.json())
    //     .then(
    //         response => setData(response))
    //     .catch(
    //         err => console.log(err));
    
    //  useEffect(() =>{
    //     console.log(data);
    // }, [data])
    return (
      <Layout className="layout">
          <Hero></Hero>
            
      </Layout>
    )
}