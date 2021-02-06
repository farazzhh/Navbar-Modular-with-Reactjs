import { Component } from 'react'
import "./Header_body.css";
import Container from "../Container80/Container80"

// // the Body of Header
class HeaderBody extends Component {
  render() {
    return (
      <header className="header">
        <header className="header_body">
          <Container>
            <div className="header_title">
              <h4 className="title_shadow">WELCOME TO</h4>
              <h1 className="title_shadow">MY NEW WORLD</h1>
            </div>
          </Container>
        </header>
      </header>
    );
  }
}

export default HeaderBody