import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
const useStyle = makeStyles({
  menu: {
    borderBottom: "0 !important",
    position: "absolute",
    right: "8%",
    top:"20px",
    zIndex: 3,
  },
  item: {
    textAlign:"center",
    color: "white !important",
    fontSize: "19px",
    marginLeft: "20px !important",
    marginRight: "20px !important",
  },
});

const Navbar = () => {
  const classes = useStyle();
  return (
    <Fragment>
      <Menu pointing secondary className={classes.menu}>
        <Menu.Item
          className={classes.item}
          name="home"
          as={NavLink}
          exact
          to="/home"
        />
        <Menu.Item
          className={classes.item}
          name="messages"
          as={NavLink}
          exact
          to="/messages"
        />
        <Menu.Item
          className={classes.item}
          name="friends"
          as={NavLink}
          exact
          to="/friends"
        />
        <Menu.Item
          className={classes.item}
          name="About"
          as={NavLink}
          exact
          to="/About"
        />
      </Menu>
    </Fragment>
  );
};

export default Navbar;
