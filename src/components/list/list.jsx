import React, { Component } from "react";
import { Button, Image, List } from "semantic-ui-react";
import PropTypes from "prop-types"; // untuk menentukan tipe data yang diterima
import { Consumer } from "../../context"; // untuk akses state yang ada di context dibutuhkan <consumer> (konsumen)
import axios from 'axios'
import {Link} from 'react-router-dom'



class ListExampleFloated extends Component {
  // Object data digunakan untuk buka tutup info
  state = {
    showContactInfo: false
  };
  // Event onClick (jika mengubah state gunakanlah function setState())
  showClick = e => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

   //Function untuk mendelete mengunakan axios
   onDeleteClick = async (id, dispatch) => {
     try{
     const res =await axios.delete
     (`https://jsonplaceholder.typicode.com/users/${id}`);
     dispatch({type:'DELETE_CONTACT', payload: id });
     } catch (e){
      dispatch({type:'DELETE_CONTACT', payload: id });
     }
};     
 

  

  render() {
    // baca data dari state yang ada di lists.jsx hasil dari function map listData
    const { id, fristName, lastName, tanggalLahir, alamat, email} = this.props.dataContact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => { 
          const { dispatch } = value; //untuk mengirimkan data yang dibutuhkan untuk eksekusi di function reducer
          return (
            <React.Fragment>
              <List divided verticalAlign="middle">
                <List.Item> 
                  <List.Content floated="right">
                    <Button onClick={this.showClick}>View</Button>
                    <Button
                      onClick={this.onDeleteClick.bind(this, id, dispatch)}  // mendapatkan id keberapa lalu di eksekusi menggunakan function dispatch
                    >
                      Delete
                    </Button>
                    <Button
                    as={Link}  // membuat link ke page berikutnya
                    to={`/contact/edit/${id}`} // nama linknya 
                    >Update</Button>
                  </List.Content>
                  <Image
                    avatar
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTmwU4fAWAOj9aZXKn3Rz_oeiBwebfRGMj9-djpWbz4bxGfsuyxg"
                  />
                  <List.Content>Nama Lengkap: {fristName} {lastName}</List.Content>
                </List.Item>

                {showContactInfo ? (
                  <React.Fragment>
                    <List.Item>
                      <List.Icon name="users" />
                      <List.Content>Tanggal Lahir: {tanggalLahir}</List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name="user circle"  />
                      <List.Content>Email: {email}</List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon name="user circle" />
                      <List.Content>
                      Alamat: {alamat}
                      </List.Content>
                    </List.Item>
                  </React.Fragment>
                ) : null }
              </List>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

// untuk menentukan tipe data yang diterima
ListExampleFloated.ProtoType = {
  ListExampleFloated: PropTypes.object.isRequired
};

export default ListExampleFloated;
