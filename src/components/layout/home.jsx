import React, { Component } from "react";
import { Grid, Image, Segment } from "semantic-ui-react";
import LeftMenu from '../menu/leftMenu'

class Home extends Component {
  render() {
    return (
      <Grid columns="equal">
        <Grid.Row stretched>
          <Grid.Column width={4}>
            <Segment>
              <Grid.Column>
                <LeftMenu />
              </Grid.Column>
            </Segment>
          </Grid.Column>

          <Grid.Column width={12}>
            <Segment>
            <h1>tesss</h1>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Home;
