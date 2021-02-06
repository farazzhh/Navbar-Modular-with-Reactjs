import logo from "../../-img-/logo.png";
import "./Navbar_Brand.css";
import { Component } from "react";

// logo and brand of Navbar in Header
class NavBar_brand extends Component {
  render() {
    return (
      <div className="navBar_logo">
        <img src={logo} alt="logo" />
        <h1>{this.props.brand}</h1>
      </div>
    );
  }
}

export default NavBar_brand