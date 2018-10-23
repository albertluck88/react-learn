import React, { Component } from 'react'
import { Menu, Image} from 'semantic-ui-react'
import { Link } from 'react-router-dom' // untuk Link ke page menggunakan menurut url

 class MenuExampleSecondaryPointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state



    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item as={Link} to='/' name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item
            as={Link}  // membuat link ke page berikutnya
            to='/contact/add' // nama linknya
            name='member'
            active={activeItem === 'member'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
      
            <Menu.Item
             
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>

        
      </div>
    )
  }
}

export default  MenuExampleSecondaryPointing