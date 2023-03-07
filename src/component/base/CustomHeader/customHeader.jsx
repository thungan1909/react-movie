import { Header } from "antd/es/layout/layout";
import "./customHeader.css";
import AccountDropdown from "../AccountDropdown/accountDropdown";
import SearchBar from "../SearchBar/searchBar";

export default function CustomHeader() {
  return (
    <Header>
      <a href="/home" className="logo">
        ffim
      </a>
      <div className="btn-wrapper">
        <SearchBar></SearchBar>
        <AccountDropdown></AccountDropdown>
      </div>
    </Header>
  );
}
