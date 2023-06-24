import React from 'react';
import ReactDOM from 'react-dom';
import Store from './store/Store';
import StoreContext from './store/StoreContext';
import MainSite from './pages/MainSite';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #606060;
    box-sizing: border-box;
    font-family: Arial;
  }
`;

export default (store: Store) => {
  ReactDOM.render(
    <StoreContext.Provider value={store}>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="*">
            <MainSite />
          </Route>
        </Switch>
      </BrowserRouter>
    </StoreContext.Provider>,
    document.getElementById('root')
  );
};
