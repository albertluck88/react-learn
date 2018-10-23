import React, { Component } from 'react'
import ListExampleFloated from  './list'
import { Consumer } from '../../context' // untuk dapat mengakses Provider , file dalam Component memerlukan <Consumer> .... </Consumer>

class Lists extends Component {
   
    
    

  render() {

    return (
        // untuk mengakses data state yang berada di Context.js
        <Consumer>
            {value => {
                const { listData } = value;
                return (
                    <React.Fragment>
                    {/* lopping data sebanyak data yang ada di state */}
                    { listData.map(dataContact =>(
                        <ListExampleFloated  key={dataContact.id} dataContact={dataContact}  />
                    ))}
                  </React.Fragment>
                )
            }}
        </Consumer>
    )



      
   
  }
}


export default  Lists
