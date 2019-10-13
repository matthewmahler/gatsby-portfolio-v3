import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import HeroText from '../components/HeroText';

const Container = styled.section`
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  color: #eee;
  background-image: linear-gradient(#090909ee, #090909cc);
  background-size: cover;
  h1 {
    font-size: 8rem;
    font-weight: 900;
  }
  @media (max-width: 769px) {
    grid-template-columns: 1fr 4fr;
    h1 {
      font-size: 6rem;
    }
  }
  @media (max-width: 415px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    div {
      width: 100%;
      h1 {
        font-size: 4rem;
        text-align: center;
      }
    }
  }
`;

const Landing = props => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        return (
          <BackgroundImage
            Tag="div"
            fluid={data.contentfulLanding.landscapeBackground.fluid}
            fadeIn
            backgroundColor={`#292929`}
            style={{ width: '100%' }}
          >
            <Container id="Landing">
              <div />
              <div>
                <h1>{data.contentfulLanding.title}</h1>
                <HeroText />
              </div>
            </Container>
          </BackgroundImage>
        );
      }}
    />
  );
};

export default Landing;

const query = graphql`
  query LandingQuery {
    contentfulLanding {
      title
      landscapeBackground {
        fluid {
          aspectRatio
          base64
          sizes
          src
          srcSet
          srcWebp
          srcSetWebp
          tracedSVG
        }
      }
    }
  }
`;
