import React from "react";
import { connect } from "react-redux";
import "./Footer.css";
import { Container, Grid, Header, List, Segment } from "semantic-ui-react";

const Footer = ({ activePage }) => {
  return (
    <Segment.Group compact basic style={{ width: "100%" }} className="Footer">
      {activePage === "home" && (
        <Segment.Group horizontal>
          <Segment inverted color="green">
            Boja mape
          </Segment>
          <Segment inverted color="red">
            Zastupljeni Centri gajenja
          </Segment>
        </Segment.Group>
      )}
      <Segment inverted vertical style={{ padding: "5em 0em" }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Stranice" />
                <List link inverted>
                  <List.Item as="a">Pocetna</List.Item>
                  <List.Item as="a">Usluge</List.Item>
                  <List.Item as="a">Partneri</List.Item>
                  <List.Item as="a">Kontakt</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Usluge" />
                <List link inverted>
                  <List.Item as="a">Poljoprivredni plan</List.Item>
                  <List.Item as="a">Online savetovanje</List.Item>
                  <List.Item as="a">Terenske posete</List.Item>
                  <List.Item as="a">Postavi pitanje</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as="h4" inverted>
                  Agro kultura platforma
                </Header>
                <p>
                 Nas cilj je pametno ulaganje, planska sadnja i veliki prinos. Tu samo da Vam damo sve neophodne informacije.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </Segment.Group>
  );
};

const mapStateToProps = state => ({
  activePage: state.headerReducer.page
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, null)(Footer);
