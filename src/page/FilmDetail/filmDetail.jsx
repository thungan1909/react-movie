import React, { useEffect, useState } from "react"
import './filmDetail.css'
import { useParams } from "react-router-dom";
import API_KEY from "../../utils/apiKey";
import BASE_URL from "../../utils/baseURL";
import BannerFilm from "../../component/BannerFilm/bannerFilm";
import CustomHeader from "../../component/CustomHeader/customHeader";
import DetailContent from "../../component/DetailContent/detailContent";

export default function FilmDetail () 
{
    const { id } = useParams();
    const [filmInfo, setFilmInfo] = useState();
        useEffect(() => {
            fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`)
            .then(res=> res.json())
            .then(res =>{
                if(res.error)
                {
                    console.log("ERROR");
                }
                else{
                    
                    setFilmInfo(res);
                 
                }
            })
            .catch((error)=>{

            })
    }, [])
    if(filmInfo!= undefined)
    {
        return(
            <div>
                <CustomHeader></CustomHeader>
                <div className="detail-content">
                    <BannerFilm item={filmInfo}></BannerFilm>
                    <DetailContent item={filmInfo}></DetailContent>
                </div>
            </div>
        )
    }
    
}