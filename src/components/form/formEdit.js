import React, { Component } from "react";
import { Form, Input, TextArea, Button, Select } from "semantic-ui-react";
import { Consumer } from "../../context"; // untuk mengirimkan request ke ke context.js
import uuid from 'uuid'
import axios from 'axios'



class EditContact extends Component {

  // local data react 
  state = {
    fristName: "",
    lastName: "",
    tanggalLahir : "",
    alamat : "",
    email : ""

  };

  async componentDidMount(){
      const { id } = this.props.match.params;
      const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
 
      const contact = res.data;

      // data yang diambil dari state contact
      this.setState({
          fristName: contact.fristName,
          lastName : contact.lastName,
          tanggalLahir : contact.tanggalLahir,
          alamat : contact.alamat,
          email : contact.email
      })
  }



  onSubmit = async (dispatch, e) => {
    e.preventDefault(); // menghilangkan setting default
   
    // mengirimkan data yang sudah disi ke state
    const { fristName, lastName, tanggalLahir, alamat, email} =this.state
    

    
    const upContact = {
        fristName,
        lastName,
        tanggalLahir,
        alamat,
        email
    }

    const {id} = this.props.match.params;

    const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, upContact);

    dispatch({type:'UPDATE_CONTACT', payload: res.data })



       // membersihkan isi kotak form
       this.setState({
        fristName: '',
        lastName : '',
        tanggalLahir: '',
        alamat : '',
        email: ''
      })

  };


  onChange = e => this.setState({ [e.target.name]: e.target.value }); // mengisi state sesuai dengan kotak yang ditarget
  // onLastNameChange = e => this.setState({lastName: e.target.value}) mengisi state satu persatu menurut nama keynya

  render() {
    const { fristName, lastName, tanggalLahir, alamat, email } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value; // mengirimkan value yang telah isi ke function
          return (
            // mengirimkan value yang telah isi ke function
            <Form onSubmit={this.onSubmit.bind(this, dispatch)}> 
              <Form.Group widths="equal">
                <Form.Field
                  id="form-input-control-first-name"
                  name="fristName"
                  control={Input}
                  label="First name"
                  placeholder="First name"
                  value={fristName}
                  onChange={this.onChange} // mengubah isi kotak form untuk dapat diakses ke state
                />
                <Form.Field
                  id="form-input-control-last-name"
                  name="lastName"
                  control={Input}
                  label="Last name"
                  placeholder="Last name"
                  value={lastName}
                  onChange={this.onChange}
                />
                 <Form.Field
                  id="form-input-control-last-name"
                  name="tanggalLahir"
                  control={Input}
                  label="Tanggal Lahir"
                  placeholder="Tanggal Lahir"
                  value={tanggalLahir}
                  onChange={this.onChange}
                />
                 
              
              </Form.Group>
              <Form.Field
                  id="form-input-control-last-name"
                  name="email"
                  control={Input}
                  label="Email"
                  placeholder="Email"
                  value={email}
                  onChange={this.onChange}
                />
              <Form.Field
                id="form-textarea-control-opinion"
                control={TextArea}
                name="alamat"
                label="Alamat"
                placeholder="Alamat"
                value={alamat}
                onChange={this.onChange}
              />
              <Form.Field
                id="form-button-control-public"
                control={Button}
                content="Edit Data"
      
              />
            </Form>
          );
        }}
      </Consumer>
    );
  }
}

export default EditContact;
