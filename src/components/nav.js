import React from "react";
import "semantic-ui-css/semantic.css";
import { Menu } from "semantic-ui-react";
import { Link } from "gatsby";

const Nav = () => {
  return (
    <React.Fragment>
      <Menu>
        <Link to="/">
          <Menu.Item icon="home"></Menu.Item>
        </Link>

        <Link to="/games">
          <Menu.Item icon="gamepad"></Menu.Item>
        </Link>
        <Link to="/contact">
          {" "}
          <Menu.Item icon="group"></Menu.Item>
        </Link>
      </Menu>
    </React.Fragment>
  );
};

export default Nav;
