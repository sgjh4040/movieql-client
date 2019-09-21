import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import client from "./apolloClient";
import Home from "./Home";
import Detail from "./Detail";
import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const GlobalStyle= createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Nanum+Gothic&display=swap');
  ${reset};
  body{
    font-family: 'Nanum Gothic', sans-serif;
    background-color: #ecf0f1;
  }
  a{
      color:inherit;
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
          <main>
            <Route exact={true} path={"/"} component={Home} />
            <Route path={"/details/:movieId"} component={Detail} />
          </main>
        </Router>

      </ApolloProvider>
    )
  }

}

export default App;
