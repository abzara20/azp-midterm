import React from "react";
import "semantic-ui-css/semantic.css";
import { Container, Header, Grid } from "semantic-ui-react";
import Nav from "../components/nav";
import GameCard from "../components/gameCard";

const GamesPage = () => {
  return (
    <React.Fragment>
      <Nav></Nav>

      <Container>
        <Header as="h1">GAMES</Header>
        <Grid columns="3">
          <Grid.Column>
            <GameCard title="Tic-Tac-Toe" rating="2" desc="Three in a row" />
          </Grid.Column>

          <Grid.Column>
            <GameCard title="Checkers" rating="3" desc="Jumping Race" />
          </Grid.Column>

          <Grid.Column>
            <GameCard title="Snakes and Ladders" rating="4" desc="Snake!" />
          </Grid.Column>

          <Grid.Column>
            <GameCard title="Yahtzee" rating="5" desc="Feeling Lucky?" />
          </Grid.Column>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default GamesPage;
