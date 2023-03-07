import { useState } from "react";
import { Row } from "antd";
import "./similarMovieSection.css";
import HorizontalCardItem from "../../base/HorizontalCardItem/horizontalCardItem";

export default function SimilarMovieSection({ movieID }) {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     `${BASE_URL}/movie/${movieID}/similar?api_key=${API_KEY}&language=en-US&page=1`
  //   )
  //     .then((res) => res.json())
  //     .then((res) => {
  //       if (res.error) {
  //         console.log("ERR");
  //       } else {
  //         setData(res.results);
  //       }
  //     })
  //     .catch((error) => {});
  // }, []);

  return (
    <div className="horizontal-card__list-wrapper">
      <h1 style={{ color: "#FFF" }}>Các phim tương tự</h1>
      <ul className="film-card__horizontal-list">
        <Row justify={"space-between"}>
          {data?.length === 0 ? (
            <div>Wait</div>
          ) : (
            data.map((item, index) => {
              if (index < 10) {
                return <HorizontalCardItem item={item}></HorizontalCardItem>;
              }
            })
          )}
        </Row>
      </ul>
    </div>
  );
}
