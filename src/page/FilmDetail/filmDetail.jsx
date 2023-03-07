import React, { useEffect, useState } from "react";
import "./filmDetail.css";
import { useParams } from "react-router-dom";
import API_KEY from "../../utils/apiKey";
import BASE_URL from "../../utils/baseURL";
import BannerFilm from "../../component/base/BannerFilm/bannerFilm";
import CustomHeader from "../../component/base/CustomHeader/customHeader";
import DetailContentSection from "../../component/section/DetailContentSection/detailContentSection";
import IMAGE_URL from "../../utils/urlImage";
import SimilarMovieSection from "../../component/section/SimilarMovieSection/similarMovieSection";

export default function FilmDetail() {
  const { id } = useParams();
  const [filmInfo, setFilmInfo] = useState();
  useEffect(() => {
    fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          console.log("ERROR");
        } else {
          setFilmInfo(res);
        }
      })
      .catch((error) => {});
  }, []);
  if (filmInfo !== undefined) {
    return (
      <div className="page-wrapper">
        <CustomHeader></CustomHeader>
        <div className="detail-wrapper">
          <div
            className="detail-background"
            style={{
              backgroundImage: `url(${IMAGE_URL}${filmInfo.backdrop_path})`,
            }}
          >
            <div className="detail-background--cover"></div>
          </div>
          <div className="detail-info">
            <BannerFilm item={filmInfo}></BannerFilm>
            <DetailContentSection item={filmInfo}></DetailContentSection>
          </div>
        </div>
        <div className="similar-movie-wrapper">
          <SimilarMovieSection movieID={filmInfo.id}></SimilarMovieSection>
        </div>
      </div>
    );
  }
}
