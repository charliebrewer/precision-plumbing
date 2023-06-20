import React, { useContext } from 'react';
import StoreContext from '../store/StoreContext';
import Store from '../store/Store';
import Welcome from './Welcome';
import Footer from '../components/Footer';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
// import headerImg from '../assets/cropped-header-four-2016.jpg';
import headerImg from '../assets/precision-plumbing.jpg';
import { Switch, Route } from 'react-router-dom';

const App = styled.div`
  max-width: 900px;
  margin: auto;
  padding: 20px;
  background-color: #ffffff;
`;

const StyledImg = styled.img`
  width: 100%;
`;

export default observer(() => {
  const store = useContext(StoreContext) as Store;

  return (
    <App>
      <header>
        <h1>Precision Plumbing</h1>

        <p>
          <i>Serving your Yolo County plumbing needs</i>
        </p>

        <h3>
          Call Now: <a href="tel:7073599629">(707)-359-9629</a>
        </h3>

        {/* <StyledImg src={headerImg} /> */}
      </header>

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
