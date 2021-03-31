import React from 'react';
import { Route, Switch} from "react-router-dom";
import Content from './components/Content';
import ContentNL from './components/ContentNL';
import ContentFR from './components/ContentFR';
import Navigation from './components/Navigation';
import styled from 'styled-components';
// import px2vw from './utils/px2vw';
// BrowserRouter as Router, Link



const Container = styled.div `
min-height: 100vh;
/* font-size: calc(10px + 2vmin); */
    color: white;
`

const Main = styled.main `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

// path - '/' home page, which is content page

const App = () => {

  return (
    <Container>
      <Navigation link />
        <Main>
          <Switch>
          <Route component = {ContentNL}  path='/nl' />
          <Route component = {ContentFR}  path='/fr' />
          <Route component = {Content} path='/' />
          </Switch>
        </Main>
    </Container>
  );
}

export default App;
