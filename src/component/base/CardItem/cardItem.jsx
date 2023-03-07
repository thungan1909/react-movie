// import IMAGE_URL from "../../utils/urlImage";
import AccountDropdown from "../../AccountDropdown/accountDropdown";
import { useNavigate } from "react-router-dom";
import { Progress } from "antd";
import "./cardItem.css";
export default function CardItem({ item }) {
  const navigate = useNavigate();
  const handleClickCard = (id) => {
    navigate(`/filmDetail/${id}`, { replace: true });
  };
  const date = new Date(item.release_date || item.first_air_date);
  return (
    <a className="film-card__item" onClick={() => handleClickCard(item.id)}>
      <div
        className="film-card__item-img"
        // style={{ backgroundImage: `url(${IMAGE_URL}${item.backdrop_path})` }}
      ></div>
      <span className="film-card__item-name">{item.title || item.name}</span>
      <span className="film-card__item-time">
        {date.toLocaleDateString("en-us", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </span>
      <div className="film-card__item-voting">
        <Progress
          className="film-card__item-voting-percent"
          type="circle"
          percent={Math.round(item.vote_average * 10)}
          width={36}
          strokeColor={
            Math.round(item.vote_average * 10) < 70 ? "#d1d431" : "#20b66b"
          }
          trailColor={"#3f3c10"}
        />
      </div>
    </a>
  );
}
