import {  Segmented}   from 'antd';
import { useEffect, useState } from 'react';
import API_KEY from '../../utils/apiKey';
import BASE_URL from '../../utils/baseURL';
import CardItem from '../CardItem/cardItem';
export default function TopRatedSection()
{
    const [data, setData]  = useState([]);
    // const [timerSegmented, setTimerSegmented] = useState('day');

    
 
    // const handleChangeTimerSegmented = (value) => {
    //         if (value === 'Today')
    //         {
    //             setTimerSegmented('day');
    //         }
    //         else if (value === 'This week')
    //         {
    //             setTimerSegmented('week');
    //         }
    // }
    useEffect (() => {
        fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
        .then(
            res => res.json())
        .then(res =>
            {
                if(res.error)
                {
                    console.log("ERR")
                }
                else{
                    setData(res.results)
                }
             }
            )
        .catch((error) => 
        {
        
        })
    }, [])
  
if (data != undefined)
    {
 return(
        <div className="film-card-section">
            <div className="film-card__header">
                <h2 className="film-card__title">Top Rated</h2>
                {/* <Segmented 
                    options={['Today', 'This week']}
                  
                    onChange={(e) => {handleChangeTimerSegmented(e)}}
                 /> */}
            </div>
            <div className="film-card__list-wrapper">
                <ul className="film-card__list">
                     { data?.length === 0 ? 
                     (<div></div>)
                    : 
                    data.map((item) =>
                    {
                        
                                  return(
                                    <CardItem  key={item.id}  item={item}></CardItem>
                                  
                                )
                    }
                )}
           
                </ul>
               
            </div>  
        </div>
    )
}
}