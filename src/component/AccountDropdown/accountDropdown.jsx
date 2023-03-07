import { Dropdown } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
const items = [
  {
    key: "1",
    label: (
      <a target="_blank" rel="register" href="#">
        Đăng nhập
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a target="_blank" rel="login" href="#">
        Đăng ký
      </a>
    ),
  },
  // {
  //   key: '3',
  //   label: (
  //     <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
  //       3rd menu item
  //     </a>
  //   ),
  // },
];
export default function AccountDropdown() {
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
