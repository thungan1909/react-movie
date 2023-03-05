import {Header } from "antd/es/layout/layout";
import { Button, Tooltip, Layout, Menu } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import './customHeader.css'
const items = [
    {
        label: (
            <a href="/home">TRANG CHỦ</a>
        )
    },
    {
        label: (
            <a href="#">PHIM</a>
        )
    },
    {
        label: (
            <a href="#">TRENDING</a>
        )
    },
   
]
export default function CustomHeader ()
{
    const handleChangeMenu = (value) => {
        console.log(value)
    }
    return(
    <Header >
        <a href="/home" className="logo">
            ffim
        </a>
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            items = {items }
            className = "header-menu"
            onClick={e => handleChangeMenu(e)}
            >
        </Menu>
        <div className="btn-wrapper">
             <Tooltip title="Search">
               <Button className="header-btn" type="primary" shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            <Button className="header-btn">Login</Button>
            <Button className="header-btn">Sign In</Button>
       </div>
    </Header>
    )
}