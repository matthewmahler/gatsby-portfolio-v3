import React from 'react';
import styled from 'styled-components';
import PortfolioItem from '../components/PortfolioItem';

const Container = styled.section`
  min-height: 30vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eee;
  h2 {
    color: #292929;
    font-size: 4rem;
    font-weight: 900;
    margin: 4rem auto;
  }
  .wrapper {
    margin-bottom: 4rem;
    width: 80vw;
    max-width: 1200px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
    justify-content: center;
  }
`;
const Portfolio = () => {
  return (
    <Container>
      <h2>Portfolio</h2>
      <div className="wrapper">
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
      </div>
    </Container>
  );
};

export default Portfolio;
