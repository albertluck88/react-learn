import React, { Component } from 'react'
import axios from 'axios'
const Context = React.createContext();


// eksekusi action yang diterima dari dispatch
const reducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                 listData: state.listData.filter(dataContact => 
                    dataContact.id !== action.payload)
                    
            };
            case 'ADD_CONTACT':
            return {
                ...state,
                 listData: [action.payload, ...state.listData]
                    
            };
            case 'UPDATE_CONTACT':
            return {
                ...state,
                 listData: state.listData.map(data => data.id === action.payload.id ? (data= action.payload) : data)
                    
            };
        default:
            return state;
    }
};

export class Provider extends Component {
    //data object
    state = {
        listData : [],

        dispatch: action =>this.setState(state => reducer(state, action))  // digunakan untuk mengirimkan aksi yang diterima untuk diberikan kepada functio reducer
        
    }

    //data dari json 
    async componentDidMount(){
        const res = await axios
        .get('https://jsonplaceholder.typicode.com/users');

        this.setState({listData: res.data})
        
    }



    render(){
        return (

            // data yang ada distate dapat di akses oleh anak"nya
            <Context.Provider value={this.state}>
            {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer; // variabel untuk mengakses data yang telah diberikan harus menggunakan di area yang diingikan <Consumer> 
