import React, { Component } from 'react'
import { Header, Segment, Icon, Image, Label, Menu, Grid } from 'semantic-ui-react'


class HeaderTop extends Component {
  render() {
    return (
      <Segment clearing>
    <Header as='h2' floated='right'>
    <Image id ='picProfile' circular src='https://sguru.org/wp-content/uploads/2017/06/cool-attitude-profile-pictures-for-facebook-for-boys-5566.jpg' /> Patrick 
      
    </Header>
    <Header as='h2' floated='left'>
    <Icon name='settings' />
    <Header.Content>
      Account Settings
      <Header.Subheader>Manage your preferences</Header.Subheader>
    </Header.Content>
    </Header>
  </Segment>
    )
  }
}

export default HeaderTop ;