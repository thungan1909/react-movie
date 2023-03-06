import {Header } from "antd/es/layout/layout";
import { Menu} from "antd";
import { SearchOutlined } from '@ant-design/icons';
import './customHeader.css'
import { useState } from "react";
import AccountDropdown from "../AccountDropdown/accountDropdown";
import SearchBar from "../SearchBar/searchBar";

const items = [
    {
        label: (
            <a href="#">PHIM ẢNH</a>
        ),
        children: [
            {
              type: 'group',
              label: 'Trending',
            //   children: [
            //     {
            //       label: 'Option 1',
            //       key: 'setting:1',
            //     },
            //     {
            //       label: 'Option 2',
            //       key: 'setting:2',
            //     },
            //   ],
            },
            {
                type: 'group',
                label: 'Top Rated',
            }

        ],
    },
    {
        label: (
            <a href="#">TRUYỀN HÌNH</a>
        )
    },
    {
        label: (
            <a href="#">TV SHOW</a>
        )
    },
    {
        label: (
            <a href="#">NGƯỜI NỔI TIẾNG</a>
        )
    },
    {
        label: (
            <a href="#">THỂ LOẠI</a>
        ),
        children: [
            {
              type: 'group',
              label: 'Phim Chiếu Rạp',
            },
            {
                type: 'group',
                label: 'Khoa học',
            },
            {
                type: 'group',
                label: 'Kinh dị',
            },
            {
                type: 'group',
                label: 'Tình cảm',
            },
              
        ],
    },
    {
        label: (
            <a href="#">QUỐC GIA</a>
        ),
        children: [
            {
              type: 'group',
              label: 'Phim Trung Quốc',
            },
            {
                type: 'group',
                label: 'Phim Nhật Bản',
            },
            {
                type: 'group',
                label: 'Phim Ấn Độ',
            },
            {
                type: 'group',
                label: 'Phim Hàn Quốc',
            },
              
        ],
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
            <SearchBar></SearchBar>
            <AccountDropdown></AccountDropdown>
       </div>
    </Header>
    )
}