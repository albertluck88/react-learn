import React, { Component } from 'react'
import { Image, List, Icon } from 'semantic-ui-react'

 class LeftMenu extends Component {
  render() {
    return (
     
        <List divided verticalAlign='middle'>
        <List.Item>
        <Icon name='right triangle' />
          <List.Content>
            <List.Header as='a'>Member List</List.Header>
          </List.Content>
        </List.Item>
        <List.Item>
        <Icon name='right triangle' />
          <List.Content>
            <List.Header as='a'>Member List</List.Header>
          </List.Content>
        </List.Item>
      </List>
      
    )


  }
}

export default LeftMenu 