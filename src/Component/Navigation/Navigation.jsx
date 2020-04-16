import React, { Fragment } from "react";
import { Menu } from "semantic-ui-react";
import { makeStyles } from "@material-ui/core";
import logo from "../../app/images/logo.png";
import { NavLink } from "react-router-dom";

const useStyle = makeStyles({
  menu: {
    paddingTop: "15px",
    paddingBottom: "15px",
    paddingLeft: "30% !important",
    margin: "0 !important",
  },
  logo: {
    width: "120px",
    top: "-30px",
    left:"40px",
    position: "absolute",
    
  }
});

const Navigation = () => {
  const classes = useStyle();
  return (
    <Fragment>
      <img alt="logo" src={logo} className={classes.logo} />
      <Menu pointing secondary className={classes.menu} >
        <Menu.Item as={NavLink} to="/home" >Trang Chủ</Menu.Item>
        <Menu.Item as={NavLink} to="/diemso" >Điểm Số</Menu.Item>
        <Menu.Item>Môn Học</Menu.Item>
        <Menu.Item>Giảng Dạy</Menu.Item>
      </Menu>
    </Fragment>
  );
};

export default Navigation;
