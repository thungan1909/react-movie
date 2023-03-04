import { useEffect, useState } from "react";
import {Progress, Grid, Row, Col}   from 'antd';
import API_KEY from "../../utils/apiKey";
import BASE_URL from "../../utils/baseURL";
import IMAGE_URL from "../../utils/urlImage";
import './similarMovie.css'
import { Link, useNavigate } from "react-router-dom";

export default function SimilarMovie({movieID}) 
{
    const [data, setData] = useState([]);
    const navigate = useNavigate();
   
    useEffect(() =>{
        fetch(`${BASE_URL}/movie/${movieID}/similar?api_key=${API_KEY}&language=en-US&page=1`)
        .then(res => res.json())
        .then(res => {
            if (res.error) 
            {
                console.log("ERR")
            }
            else {
                setData(res.results);
            }
        })
        .catch((error) => {

        })
    }, [])

    const handleClickCard = (id) =>{
        navigate(`/filmDetail/${id}`, { replace: true });
    }
    return(
        <div className="horizontal-card__list-wrapper">
        <h1 style={{color: '#FFF'}}>Các phim tương tự</h1>
        <ul className="film-card__list">
        <Row justify={'space-between'}>
             { data?.length === 0 ? 
             (<div>Wait</div>)
            : 
            data.map((item, index) =>
            {
                
                if (index < 10)
                {
                    return(
                      <Col span={4} style = {{margin: '4px'}}>
                        {/* <Link to={`./filmDetail/${item.id}`} target="_blank" > */}
                            <a className="horizontal-card__item" key={item.id} onClick = {() => handleClickCard (item.id)}>
                                <div className="horizontal-card__item-img" style={{backgroundImage: `url(${IMAGE_URL}${item.backdrop_path})` }}></div>
                                <span className="film-card__item-name">{item.title || item.name}</span>
                                <div className="film-card__item-voting">
                                    <Progress className="film-card__item-voting-percent" type="circle"  percent = {Math.round(item.vote_average*10)}  width = {36}  strokeColor = {Math.round(item.vote_average*10) < 70 ? '#d1d431': '#20b66b'} trailColor = {'#3f3c10'}  />
                                </div>
                            </a>
                        {/* </Link> */}
                    </Col>
                    
                  )
                } 
            }
                
        )}
        </Row>
   
        </ul>
       
    </div>  
    )
}