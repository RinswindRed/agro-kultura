import React from "react";
// import "./Services.css";
import {
  Header,
  Segment,
  Icon,
  Form,
  Input,
  TextArea,
  Button,
  Grid,
  GridColumn,
} from "semantic-ui-react";

class Contact extends React.Component {
  render() {
    return (
      <Segment>
        <Grid columns={2} divided>
          <GridColumn width={8}>
            <Segment>
              <Header as="h3" icon textAlign="center">
                <Icon name="phone" circular />
                <Header.Content>Kontakt</Header.Content>
                <Header.Subheader>
                  Zainteresovani ste za nase usluge i cene nasih usluga? Budite
                  slobodni da nam posaljete informativni email sa opisom, vaseg
                  postojeceg zasada ili zasada koji planirate da podignete, a
                  jedan od nasih inzenjera ce Vas kontaktirati u najkracem
                  mogucem roku u cilju problema.
                </Header.Subheader>
              </Header>
            </Segment>
          </GridColumn>
          <Grid.Column width={8}>
            <Segment>
              <Form>
                <Form.Group widths="equal">
                  <Form.Field
                    id="form-input-control-first-name"
                    control={Input}
                    label="Ime"
                    placeholder="Ime"
                  />
                  <Form.Field
                    id="form-input-control-last-name"
                    control={Input}
                    label="Prezime"
                    placeholder="Prezime"
                  />
                  <Form.Field
                    id="form-input-control-last-name"
                    control={Input}
                    label="Telefon"
                    placeholder="Telefon"
                  />
                </Form.Group>
                <Form.Field
                  id="form-textarea-control-opinion"
                  control={TextArea}
                  label="Tekst poruke"
                  placeholder="Tekst poruke"
                />
                <Form.Field
                  id="form-input-control-error-email"
                  control={Input}
                  label="Email"
                  placeholder="petarpetrovic@schmoe.com"
                  //   error={{
                  //     content: 'Please enter a valid email address',
                  //     pointing: 'below',
                  //   }}
                />
                <Form.Field
                  id="form-button-control-public"
                  control={Button}
                  content="Posalji"
                  label="Posalji pitanje"
                />
              </Form>
            </Segment>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

export default Contact;
