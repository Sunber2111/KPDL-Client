import React, { Fragment } from "react";
import { Menu } from "semantic-ui-react";
import { makeStyles } from "@material-ui/core";
import logo from "../../App/images/logo.png";
import { NavLink } from "react-router-dom";
import "./style.css";

const Navigation = () => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default Navigation;
