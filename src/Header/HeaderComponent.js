import React, { Component } from "react";
import { connect } from "react-redux";
import { setActivePage } from "../actions";
import { Link } from "react-router-dom";
import {
  Header,
  Menu,
  Segment,
} from "semantic-ui-react";

class HeaderComponent extends Component {

  handleItemClick = (page) => this.props.setActivePage(page);

  render() {
    const { page } = this.props;
    return (
      <Segment.Group style={{border:"2px solid #21ba45"}}>
        <Segment>
          <Header as="h1" content="AGRO KULTURA" subheader="Uz nas voce raste!" style={{ color:"#21ba45", letterSpacing: "10px"}} />
        </Segment>
        <Menu color="green" widths={4}>
          <Menu.Item
            as={Link}
            to="/"
            name="Pocetna"
            active={page === "/"}
            onClick={() => this.handleItemClick('home')}
          />
          <Menu.Item
            as={Link}
            to="/services"
            name="Usluge"
            active={page === "usluge"}
            onClick={() => this.handleItemClick('usluge')}
          />
          <Menu.Item
            as={Link}
            to="/partners"
            name="Partneri"
            active={page === "partners"}
            onClick={() => this.handleItemClick('partners')}
          />
          <Menu.Item
            as={Link}
            to="/contact"
            name="Kontakt"
            active={page === "contact"}
            onClick={() => this.handleItemClick('contact')}
          />
        </Menu>
      </Segment.Group>
    );
  }
}

const mapStateToProps = state => ({
  page: state.headerReducer.page
});
const mapDispatchToProps = {
  setActivePage
};
export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
