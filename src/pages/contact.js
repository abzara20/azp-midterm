import React from "react";
import "semantic-ui-css/semantic.css";
import {
  Container,
  Header,
  Form,
  Input,
  TextArea,
  Button,
} from "semantic-ui-react";
import Nav from "../components/nav";
//import {Link} from 'gatsby';

const ContactPage = () => {
  return (
    <React.Fragment>
      <Container>
        <Nav></Nav>
        <Header as="h1">Contact</Header>
        <Form>
          <Form.Field
            control={Input}
            label="Full Name"
            placeholder="Enter your full name..."
          />
          <Form.Field
            control={Input}
            label="Contact Email"
            placeholder="Enter the best email to contact you with..."
          />
          <Form.Field
            control={TextArea}
            label="Message"
            placeholder="Enter your message..."
          />

          <Button color="green">Send Message</Button>
        </Form>
      </Container>
    </React.Fragment>
  );
};

export default ContactPage;
