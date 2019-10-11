import React from 'react';
import styled from 'styled-components';
import img from '../images/irvan-smith-5eBW5GomfhY-unsplash.jpg';
import HeroText from '../components/HeroText';

const Container = styled.section`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  color: white;
  background-image: linear-gradient(#090909cc, #090909ee), url(${img});
  background-size: cover;
  h1 {
    font-size: 8rem;
    font-weight: 900;
  }
`;

const Landing = () => {
  return (
    <Container>
      <div />
      <div>
        <h1>Hi, I'm Matt</h1>
        <HeroText />
      </div>
    </Container>
  );
};

export default Landing;
