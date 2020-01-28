import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
// import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import client from "./apolloClient";
import Home from "./Home";
import Detail from "./Routes/Detail/Detail";
import TvDetail from "./Routes/Detail/TvDetail";
import Tv from "./Routes/Tv/Tv";
import PersonDetail from "./Routes/Detail/PersonDetail";
import Person from "./Routes/Person/Person";
import GlobalStyles from "./Styles/GlobalStyles";
import Theme from "./Styles/Theme";
import styled, { ThemeProvider } from "styled-components";
import Header from './Components/Header/Header';
import Search from './Routes/Search/Search';

const Wrapper = styled.div`
  position: relative;
  margin: 40px auto;
  width: 100%;
  /* max-width: ${props => props.theme.maxWidth}; */
`;


class App extends Component {
  render() {
    return (
      <ApolloHooksProvider client={client}>
        <ThemeProvider theme={Theme}>
          <Router>
              <GlobalStyles />
              <Header></Header>
              <Wrapper>
                <Route exact={true} path={"/"} component={Home} />
                <Route path={"/details/:movieId"} component={Detail} />
                <Route exact={true} path={"/tv"} component={Tv} />
                <Route path={"/tv/:tvId"} component={TvDetail} />
                <Route exact={true} path={"/person"} component={Person} />
                <Route path={"/person/:personId"} component={PersonDetail} />
                <Route path={"/search"} component={Search} />
                
              </Wrapper>
          </Router>
        </ThemeProvider>

      </ApolloHooksProvider>
    )
  }

}

export default App;
