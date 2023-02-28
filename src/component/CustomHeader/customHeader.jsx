import {Header } from "antd/es/layout/layout";
import { Button, Tooltip, Layout, Menu } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import './customHeader.css'
const items = [
    {
        label: 'TOP CAST',
    },
    {
        label: 'PHOTOS',
    },
    {
        label: 'VIDEO',
    },
]
export default function CustomHeader ()
{
    return(
    <Header >
        <div className="logo">
            <span className="logo-first-char">M</span>
        </div>
          <div className="btn-wrapper">
             <Tooltip title="Search">
               <Button className="header-btn" type="primary" shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            <Button className="header-btn">Login</Button>
            <Button className="header-btn">Sign In</Button>
            
       </div>
     
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            items = {items }
            className = "header-menu"
            
         
            >
        </Menu>
     
        
    </Header>
    )
}