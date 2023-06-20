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
      <p>
        Let us handle all of your plumbing needs. We are a professional,
        licensed, and insured plumbing company serving the Yolo county area
        since 1995. CL#1056049.
      </p>

      <hr></hr>

      <div>
        <h3>Services</h3>

        <p>
          We handle everything from small leaks to major repairs. Some examples
          of the services we provide are:
        </p>

        <ul>
          <li>Clogged drains</li>
          <li>Leaking faucets and pipes</li>
          <li>Water heaters</li>
          <li>Irrigation</li>
          <li>
            <i>And more!</i>
          </li>
        </ul>
      </div>

      <hr></hr>

      <div>
        <h3>Testimonials</h3>

        <p>
          <i>
            Leo didn't hesitate and came right over he arrived clean and
            professional (8pm) in appearance and went right to work.
          </i>
        </p>

        <p>
          <i>Same day appointment, prompt and reasonably priced!</i>
        </p>

        <p>
          <i>Highly recommend him for your plumbing needs.</i>
        </p>
      </div>
    </div>
  );
};
