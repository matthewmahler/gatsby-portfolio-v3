import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import PortfolioItem from '../components/PortfolioItem';

const Container = styled.section`
  min-height: 30vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eee;
  z-index: 2;
  h2 {
    color: #292929;
    font-size: 4rem;
    font-weight: 900;
    margin: 2rem auto;
    margin-top: 5vh;
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
    z-index: 3;
  }
  @media (max-width: 769px) {
    h2 {
      font-size: 3rem;
    }
    .wrapper {
      grid-template-columns: 1fr 1fr;
    }
  }
`;
const Portfolio = () => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        return (
          <Container id="Portfolio">
            <h2>{data.contentfulPortfolio.title}</h2>
            <div className="wrapper">
              {data.contentfulPortfolio.portfolioItems.map((project, key) => {
                return <PortfolioItem key={key} project={project} />;
              })}
            </div>
          </Container>
        );
      }}
    />
  );
};

export default Portfolio;

const query = graphql`
  query PortfolioQuery {
    contentfulPortfolio {
      portfolioItems {
        title
        tech
        githubLink
        siteLink
        description {
          childMarkdownRemark {
            html
          }
        }
        image {
          fluid {
            aspectRatio
            base64
            sizes
            src
            srcSet
            srcSetWebp
            srcWebp
            tracedSVG
          }
        }
      }
      title
    }
  }
`;
