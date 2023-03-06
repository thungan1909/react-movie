import { useLocation } from "react-router-dom";
import { Row } from "antd";
import HorizontalCardItem from "../HorizontalCardItem/horizontalCardItem";
import { useEffect, useState } from "react";
import CustomHeader from "../CustomHeader/customHeader";

export default function SearchResult() {
  const { state } = useLocation();

  console.log(state.data);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(state.data);
  }, [state]);
  if (data != undefined)
    return (
      <div className="page-wrapper">
        <CustomHeader></CustomHeader>
        <div
          style={{ margin: "40px" }}
          className="horizontal-card__list-wrapper"
        >
          <h1 style={{ color: "#FFF" }}>Kết quả tìm kiếm</h1>
          <ul className="film-card__horizontal-list">
            <Row justify={"space-between"}>
              {data?.length === 0 ? (
                <div>Wait</div>
              ) : (
                data.map((item, index) => {
                  // if (index < 10)
                  // {
                  return (
                    <HorizontalCardItem
                      key={item.id}
                      item={item}
                    ></HorizontalCardItem>
                  );
                  // }
                })
              )}
            </Row>
          </ul>
        </div>
      </div>
    );
}
