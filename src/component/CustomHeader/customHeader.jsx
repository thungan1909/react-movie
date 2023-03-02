import {Header } from "antd/es/layout/layout";
import { Button, Tooltip, Layout, Menu } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import './customHeader.css'
const items = [
    {
        label: (
            <a href="#">TRANG</a>
        )
    },
    {
        label: (
            <a href="#">TRENDING</a>
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
        <div className="logo">
            ffim
        </div>
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