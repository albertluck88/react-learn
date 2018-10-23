import React, { Component } from "react";
import "./App.css";
import EditContact from "./components/form/formEdit"
import About from "./routers/pages/About";
import HeaderTop from "./components/header/header";
import { Provider } from "./context"; // untuk mengakses data yang ada di halaman context.js
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // untuk berpindah-pindah halaman sesuai url
import MenuExampleSecondaryPointing from "./components/menu/menu";
import GridExampleStackable from "./components/layout/layout";
import Home from "./components/layout/home"
import notFound from "./routers/pages/notFound";


class App extends Component {
  render() {
    return (
      // untuk menentukan area yang dapat mengakses context diperlukan <Provider>  elementnya apa  </Provider>
      <Provider>
        <Router>
          <div>
            <HeaderTop />
            <MenuExampleSecondaryPointing />
            <Switch>
              <Route
                exact
                path="/contact/add" component={GridExampleStackable} />
              <Route
                exact
                path="/contact/edit/:id" component={EditContact} /> 
              <Route exact path="/about" component={About} />
              <Route component={Home} />
            
            </Switch> 
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
