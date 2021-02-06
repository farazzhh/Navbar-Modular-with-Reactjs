/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import "./Navbar_Menu_expand.css";

// menu of Navbar in Header
class NavBar_menu extends Component {
  render() {
    // console.log(this.props.id);

    return (
      <li className="list_item">
        <a href="#">{this.props.item.item}</a>
        {this.props.default_item.editMenu ? <button className="xButton" onClick={() => this.props.delete_item(this.props.item.id)}>X</button> : null}
      </li>
    );
  }
}

export default NavBar_menu;
