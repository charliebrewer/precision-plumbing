import React from 'react';
import styled from 'styled-components';
// import equalHousing from '../assets/Equal-Housing.jpg';
// import twoPines from '../assets/Two-Pines-Logo.jpg';

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  // background-color: black;
`;

// TODO remove
const FooterItem = styled.div`
  width: 100%;
`;

export default () => {
  return (
    <Footer>
      <FooterItem>
        <h4>Precision Plumbing</h4>

        <h3>
          Call Now: <a href="tel:7073599629">(707)-359-9629</a>
        </h3>

        {/* <img src={twoPines} /> */}

        {/* <p>
          2550 Sycamore Lane
          <br />
          Davis, CA 95616
        </p>

        <p>
          Office Contact:
          <br />
          Joyce Wiseman
          <br />
          (530) 758-2550
          <br />
          dphc@att.net
        </p> */}
      </FooterItem>
    </Footer>
  );
};
