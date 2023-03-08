import { Dropdown } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import CheckTokenServices from "../../../service/checkTokenServices";
import { useEffect, useState } from "react";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

export default function AccountDropdown({}) {
  // const { state } = useLocation();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate(`/login`, { replace: true });
  };
  const items = [
    {
      key: "1",
      label: (
        <a target="_blank" rel="register" onClick={handleLogout}>
          Đăng xuất
        </a>
      ),
    },
    // {
    //   key: "2",
    //   label: (
    //     <a target="_blank" rel="login" href="/register">
    //       Đăng ký
    //     </a>
    //   ),
    // },
  ];

  return (
    <Dropdown
      menu={{
        items,
      }}
      placement="bottomLeft"
      arrow
    >
      <FontAwesomeIcon icon={faCircleUser} fontSize={36}></FontAwesomeIcon>
    </Dropdown>
  );
}
