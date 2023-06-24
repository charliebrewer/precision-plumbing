import React from 'react';
import styled from 'styled-components';
import headerImg from '../assets/precision-plumbing.jpg';

const StyledImg = styled.img`
  width: 100%;
  margin: 0;
  padding: 0;
`;

export default () => {
  return (
    <header>
      <StyledImg src={headerImg} />

      <p>
        <i>Serving your Yolo County plumbing needs</i>
      </p>

      <h3>
        Call Now: <a href="tel:7073599629">(707)-359-9629</a>
      </h3>
    </header>
  );
};
