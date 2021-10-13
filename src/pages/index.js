import React from "react";
import "semantic-ui-css/semantic.css";
import { Container, Segment, Header, Button } from "semantic-ui-react";
import Nav from "../components/nav";
//import {Link} from 'gatsby';

const HomePage = () => {
  return (
    <React.Fragment>
      <Nav></Nav>

      <Container>
        <Segment textAlign="center">
          <Header as="h1">HOME</Header>
          <p>Some text that needs not readen</p>
          <Button color="green">Join Now!</Button>
        </Segment>

        <Header as="h3">News</Header>
        <p>Some more random text</p>
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
