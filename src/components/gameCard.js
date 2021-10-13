import React from "react";
import "semantic-ui-css/semantic.css";
import { Card, Rating, Icon, Grid } from "semantic-ui-react";
//import {Link} from 'gatsby';

const GameCard = ({ title, desc, rating }) => {
  return (
    <React.Fragment>
      <Card>
        <Card.Content>
          <Card.Header as="h3">{title}</Card.Header>
          <Card.Meta>{desc}</Card.Meta>
        </Card.Content>

        <Card.Content extra>
          <Grid columns="2">
            <Grid.Column>
              <Rating icon="star" defaultRating={rating} maxRating={5}></Rating>
            </Grid.Column>
            <Grid.Column textAlign="right">
              <Icon name="exclamation circle" size="large" />
            </Grid.Column>
          </Grid>
        </Card.Content>
      </Card>
    </React.Fragment>
  );
};

export default GameCard;
