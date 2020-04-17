import React from "react";
import { Menu } from "semantic-ui-react";
import logo from "../../App/images/logo.png";
import { NavLink } from "react-router-dom";
import "./style.css";

const Navigation = () => {
  return (
    <div className="nav-top">
      <img alt="logo" src={logo} className="logo" />
      <Menu pointing secondary className="menu">
        <Menu.Item as={NavLink} to="/home">
          Trang Chủ
        </Menu.Item>
        <Menu.Item as={NavLink} to="/diemso">
          Điểm Số
        </Menu.Item>
        <Menu.Item>Môn Học</Menu.Item>
        <Menu.Item>Giảng Dạy</Menu.Item>
      </Menu>
    </div>
  );
};

export default Navigation;
