import { Button, Statistic, Rate } from "antd";
import { CaretRightOutlined, PlusOutlined, LikeFilled, StarFilled, StarOutlined, StarTwoTone} from '@ant-design/icons';
import { useState } from "react";
import './detailContent.css'

export default function DetailContent({item})
{
    const desc = ['Dở tệ', 'Không hay', 'Bình thường', 'Hay', 'Tuyệt vời'];
    console.log(item);
    const [value, setValue] = useState(1);
    return(
        <>
            <h1 style = {{marginBlock: '16px'}} className="content__title">{item.original_title}</h1>
            <div className="film-detail__buttonWrapper">
                <Button style={{marginRight: '16px'}}  type="primary" shape="round" size={'large'} icon={<CaretRightOutlined />}>
                Xem ngay
                </Button>
                <Button type="primary" shape="round" size={'large'} icon={<PlusOutlined />}>
                Danh sách
                </Button>
            </div>
            <div className="film-detail__statistic">
                  <span className="film-detail__statistic-point">{parseFloat(item.vote_average).toFixed(1)}</span>
                  <div className="film-detail__statistic-rating">
                       <div>
                        <Rate style={{fontSize: 24}} tooltips={desc} onChange={setValue} value={value}  />
                            {value ? <span style={{fontSize: '16px'}} className="ant-rate-text">{desc[value - 1]}</span> : ''}
                       </div>
                        <span style = {{marginRight: '4px'}} className="">{item.vote_count} đánh giá</span>
                  </div>
            </div>
            <div className="film-detail__descripton">{item.overview}</div>
            <div></div>
         
        </>
    )
}