import { Tooltip, Input } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API_KEY from "../../utils/apiKey";
import BASE_URL from "../../utils/baseURL";
import SearchResult from "../SearchResult/searchResult";
const { Search } = Input;
export default function SearchBar() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState();
  const navigate = useNavigate();

  const onSearch = (value) => {
    handleGetDataBySearch(value);
  };

  const handleGetDataBySearch = (value) => {
    fetch(
      `${BASE_URL}/search/multi?api_key=${API_KEY}&query=${value}&language=en-US&page=1&include_adult=false`
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          console.log("ERR");
        } else {
          setData(res.results);
        }
      })
      .catch(() => {});
  };

  useEffect(() => {
    if (data.length > 0) {
      navigate("/searchResults", {
        replace: true,
        state: {
          data,
        },
      });
    }
  }, [data]);
  return (
    <Tooltip title="Tìm kiếm phim ảnh, TV Show">
      <Search
        className="searchbar"
        placeholder="Tìm kiếm phim ảnh, TV Show, ..."
        onSearch={onSearch}
        enterButton
      />
    </Tooltip>
  );
}
