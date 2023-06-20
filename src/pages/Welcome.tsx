import React from 'react';
import styled from 'styled-components';

const CenteredImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

export default () => {
  return (
    <div>
      <h2>Welcome</h2>

      <p>We handle everything from a to b to c to d</p>
    </div>
  );
};
