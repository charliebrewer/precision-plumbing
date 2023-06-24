import React, { useContext } from 'react';
import StoreContext from '../store/StoreContext';
import Store from '../store/Store';
import Welcome from './Welcome';
import Footer from '../components/Footer';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
// import headerImg from '../assets/cropped-header-four-2016.jpg';
import { Switch, Route } from 'react-router-dom';
import Header from '../components/Header';

const App = styled.div`
  max-width: 900px;
  margin: auto;
  padding: 10px;
  background-color: #b0b0b0;
`;

export default observer(() => {
  const store = useContext(StoreContext) as Store;

  return (
    <App>
      <Header></Header>

      <Switch>
        <Route path="*">
          <Welcome />
        </Route>
      </Switch>

      <hr />

      <Footer></Footer>
    </App>
  );
});
