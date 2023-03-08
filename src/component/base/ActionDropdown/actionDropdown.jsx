import { Dropdown, Space } from "antd";
import "./actionDropdown.css";

import {
  UnorderedListOutlined,
  HeartOutlined,
  StarOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
const actionItems = [
  {
    key: "addList",
    label: "Add to list",
    icon: <UnorderedListOutlined />,
  },
  {
    key: "favorite",
    label: "Favorite",
    icon: <HeartOutlined />,
  },
  // {
  //   key: "watchlist",
  //   label: "Watchlist",
  //   icon: faBookmark,
  // },
  {
    key: "rating",
    label: "Your rating",
    icon: <StarOutlined />,
  },
];
const items = [
  {
    key: "addList",
    label: "Add to list",
    icon: <UnorderedListOutlined />,
  },
  {
    key: "favorite",
    label: "Favorite",
    icon: <HeartOutlined />,
  },
  // {
  //   key: "watchlist",
  //   label: "Watchlist",
  //   icon: faBookmark,
  // },
  {
    key: "rating",
    label: "Your rating",
    icon: <StarOutlined />,
  },
];
export default function ActionDropdown() {
  return (
    <Dropdown className="more-action-btn" menu={{ items }}>
      <Space>
        <EllipsisOutlined />
      </Space>
    </Dropdown>
  );
}
