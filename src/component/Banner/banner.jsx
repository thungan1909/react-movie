import './banner.css'
import '../../App.css'
import CustomHeader from '../CustomHeader/customHeader'
import IMAGE_URL from '../../utils/urlImage'
import { useEffect, useState } from 'react'
import BASE_URL from '../../utils/baseURL'
import API_KEY from '../../utils/apiKey'
import { Carousel, Button } from 'antd'
import { CaretRightOutlined, InfoCircleOutlined} from '@ant-design/icons';


export default function Banner()
{
    const [data, setData] = useState([]);
    const [dataSorted, setDataSorted] = useState([]);
    let tempArray;
    useEffect(() => {
        fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
        .then(
            res => res.json())
        .then(
            res => {
                if (res.error)
                {
                    console.log("ERR")
                }
                else{
                    setData(res.results);
                }
            }
        )
        .catch((error) => {

        })
    }, [])
   
    useEffect(() => {
            sortByRating(data);
           
    }, [data])

    // function swapData ({...a}, {...b}) {
    //     let temp = a;
    //     a = b;
    //     b = temp;
    // }
    const sortByRating = (data) => {
        // let max = data[0].vote_average;
        tempArray = JSON.parse(JSON.stringify(data));
        let temp;
        let len = tempArray.length;
        for (let i = 0; i < len - 1; i++ )
        {
            for(let j = i + 1; j < len; j++)
            {
                if (tempArray[i].vote_average < tempArray[j].vote_average)
                {
                    temp = tempArray[i];
                    tempArray[i] = tempArray[j];
                    tempArray[j] = temp;
                } 
            }
        }
       
        setDataSorted(tempArray)
    }

  
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };


    if (dataSorted != undefined)
    {
        return(
            <div id = "banner">
              <Carousel dotPosition={"bottom"}>
                    {dataSorted?. length === 0 ?
                        (<div>Wait</div>)
                    :
                    dataSorted.map((item, index) =>
                    {
                       if(index < 5)
                       {    
                        
                        return(

                             <>
                                <img className='banner-img' src={IMAGE_URL + item.backdrop_path}></img>
                                <div className="popular-film__detail-wrap">
                                    <div className='popular-film__detail'>
                                        <span className="popular-film__title">{item.title}</span>
                                        <p className="popular-film__overview">{item.overview}</p>
                                        <div className="popular-film__buttonWrapper">
                                        <Button className='popular-film__btn' type="primary" shape="round" size={'large'} icon={<CaretRightOutlined />}>
                                        Xem ngay
                                    </Button>
                                    <Button className='popular-film__btn' type="primary" shape="round" size={'large'} icon={<InfoCircleOutlined />}>
                                        Chi tiết
                                    </Button>
                                        </div>
                                    </div>
                                </div>
               
                                
                            </>
                      
                      
                        )
                       }
                                                 
                    }
                       
                    
                  
                    
                    
                    )
                    
                }
      </Carousel>
            </div>
        )
    }

}