import { Component } from "react";
import NavBar from "../Navbar/NavBar";
import Header_body from "./Header_body";
import "./Header.css";
import "../../Container80/Container80.css";

// Main Header
class Header extends Component {
  state = {
    id: [0],
    menu: [
      { brand: "React WebSite" },
      { item: "Home" },
      { item: "About us" },
      { item: "Services" },
      { item: "Contact us" },
    ],
  };
  // stateEnglish = {
  //   id: [0],
  //   menu: [
  //     { brand: "React WebSite" },
  //     { item: "Home" },
  //     { item: "About us" },
  //     { item: "Services" },
  //     { item: "Contact us" },
  //   ],
  // };
  // stateFarsi = {
  //   id: [1],
  //   menu: [
  //     { brand: "وب سایت ریکت" },
  //     { item: "خانه" },
  //     { item: "درباره ما" },
  //     { item: "خدمات" },
  //     { item: "ارتباط با ما" },
  //   ],
  // };
  Translate = (navbar_data) => {
    console.log(navbar_data.menu[0].brand);
    this.setState({
      id: [navbar_data.id[0]],
      menu: [
        { brand: navbar_data.menu[0].brand },
        { item: navbar_data.menu[1].item },
        { item: navbar_data.menu[2].item },
        { item: navbar_data.menu[3].item },
        { item: navbar_data.menu[4].item },
      ],
    });
  };

  chooseLanguage = (english,farsi) => {
    console.log(english);
    console.log(farsi);
    if (this.state.id[0] === 0) {
      this.Translate(farsi);
    } else {
      this.Translate(english);
    }
  };

  render() {
    console.log(this.state.menu);
    return (
      <header className="header">
        <NavBar
          Navbar_data={this.state.menu}
          chooseLanguage={this.chooseLanguage}
        />
        {/* eslint-disable-next-line */}
        <Header_body />
      </header>
    );
  }
}

export default Header;
