import React, { Component } from "react";
import { Grid, Image, Segment, Header } from "semantic-ui-react";
import Lists  from "../list/lists";
import FormExampleFieldControlId from "../form/formRegister";
import UpdateContact from "../form/formEdit";


class GridExampleStackable extends Component {
  render() {
    return (
      <Grid stackable columns={2}>
        <Grid.Column>
          <Segment>
            <Header as="h3" dividing>
              LIST MEMBER
            </Header>
            <Lists />
          </Segment> 
        </Grid.Column>
        <Grid.Column>
          <Segment>
          <Header as='h3' dividing>
   DAFTARKAN MEMBER!!
  </Header>
  <FormExampleFieldControlId />
        
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default GridExampleStackable;
