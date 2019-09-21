import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import client from "./apolloClient";
import Home from "./Home";
import Detail from "./Routes/Detail/Detail";
import Drama from "./Routes/Drama/Drama";
import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";
import Header from './Components/Header/Header';

const GlobalStyle= createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Nanum+Gothic&display=swap');
  ${reset};
  body{
    font-family: 'Nanum Gothic', sans-serif;
    background-color: #ecf0f1;
  }
  a{
      color:inherit;
      text-decoration: none;
  }
  main {
    width: 80%;
    margin: 0 auto;
    padding: 20px;
  }
`


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <GlobalStyle/>
          <Header></Header>
          <main>
            <Route exact={true} path={"/"} component={Home} />
            <Route path={"/details/:movieId"} component={Detail} />
            <Route path={"/drama"} component={Drama} />
          </main>
        </Router>

      </ApolloProvider>
    )
  }

}

export default App;
