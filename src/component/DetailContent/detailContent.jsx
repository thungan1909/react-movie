import { Button, Statistic, Rate } from "antd";
import { CaretRightOutlined, PlusOutlined, LikeOutlined} from '@ant-design/icons';
import { useState } from "react";
import './detailContent.css'

export default function DetailContent({item})
{
    const desc = ['Dở tệ', 'Không hay', 'Bình thường', 'Hay', 'Tuyệt vời'];
    const [value, setValue] = useState(1);
    return(
        <>
            <h1 style = {{marginBlock: '16px'}} className="content__title">{item.original_title}</h1>
            <div className="film-detail__buttonWrapper">
                <Button  type="primary" shape="round" size={'large'} icon={<CaretRightOutlined />}>
                Xem ngay
                </Button>
                <Button type="primary" shape="round" size={'large'} icon={<PlusOutlined />}>
                Danh sách
                </Button>
            </div>
            <div className="film-detail__statistic"  style={{marginBlock: '8px'}}>
              
                <div style={{color: '#FFF'}}>
                    <span className="" style={{marginRight: '4px'}}>Đánh giá ngay:</span>
                    <Rate tooltips={desc} onChange={setValue} value={value}  />
                     {value ? <span style={{fontSize: '16px'}} className="ant-rate-text">{desc[value - 1]}</span> : ''}
                </div>
                <div style={{marginTop: '8px'}}>
                        <span className="" style={{marginRight: '4px'}}>Điểm đánh giá:</span>
                            <span></span>
                    <span style={{marginRight: '8px'}}>Lượt bình chọn:</span>
                    <span style = {{marginRight: '4px'}} className="">{item.vote_count}</span>
                    <span style={{marginRight: '8px'}}><LikeOutlined></LikeOutlined></span>
                </div>
            </div>
         
        </>
    )
}