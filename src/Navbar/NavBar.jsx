import { Component } from "react";
import "./Navbar.css";
import NavBar_brand from "./Navbar_Brand/Navbar_Brand";
import NavBar_menu from "./Navbar_Menu_expand/Navbar_Menu_Expand";
import Container from "../Container80/Container80";
import HeaderBody from "../Header Body/Header_body";

// the Navbar in Header
class NavBar extends Component {
  state = {
    default: {
      toggle: true,
      brand: "React WebSite",
      menu: [
        { id: 0, item: "Home" },
        { id: 1, item: "About us" },
        { id: 2, item: "Contact us" },
      ],
      editMenu: false,
    },
    english: {
      toggle: true,
      brand: "React WebSite",
      menu: [
        { id: 0, item: "Home" },
        { id: 1, item: "About us" },
        { id: 2, item: "Contact us" },
      ],
      editMenu: false,
    },
    farsi: {
      toggle: false,
      brand: "وب سایت ریکت",
      menu: [
        { id: 0, item: "خانه" },
        { id: 1, item: "درباره ما" },
        { id: 2, item: "خدمات" },
        { id: 3, item: "ارتباط با ما" },
        { id: 5, item: "فروشگاه" },
      ],
      editMenu: false,
    },
  };
  setStateToFarsi = () => {
    this.setState({
      default: this.state.farsi,
    });
  };
  setStateToEnglish = () => {
    this.setState({
      default: this.state.english,
    });
  };

  edit = () => {
    const default_state = { ...this.state.default };
    default_state.editMenu = !this.state.default.editMenu;
    this.setState({ default: default_state });
    if (default_state.toggle) {
      this.setState({ english: default_state });
    } else {
      this.setState({ farsi: default_state });
    }
  };
  render() {
    const toggle = () => {
      const default_state = { ...this.state.default };
      if (default_state.toggle) {
        this.setState({ english: default_state });
      } else {
        this.setState({ farsi: default_state });
      }
      if (this.state.default.toggle) {
        this.setStateToFarsi();
      } else {
        this.setStateToEnglish();
      }
    };
    const delete_item = (id) => {
      const default_menu = { ...this.state.default };
      console.log(id);
      default_menu.menu = default_menu.menu.filter((item) => {
        return item.id !== id;
      });
      this.setState({
        default: default_menu,
      });
    };
    return (
      <>
        <nav className="navBar">
          <Container>
            {/* eslint-disable-next-line */}
            <NavBar_brand brand={this.state.default.brand} />
            <ul className="navBar_menu">
              {this.state.default.menu.map((item, index) => (
                // eslint-disable-next-line react/jsx-pascal-case
                <NavBar_menu
                  key={index}
                  item={item}
                  default_item={this.state.default}
                  nav_item={this.state.default.menu}
                  delete_item={delete_item}
                />
              ))}
              <button className="edit" onClick={this.edit}>
                Edit
              </button>
              <button className="translate" onClick={toggle}>
                Translate
              </button>
            </ul>
          </Container>
        </nav>
        <HeaderBody />
      </>
    );
  }
}
export default NavBar;
