import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
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
  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
    }
  }
  h1 {
    font-size: 8rem;
    font-weight: 900;
  }
  @media (max-width: 769px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .logo {
      width: 50%;
    }
    div {
      width: 100%;

      h1 {
        font-size: 4rem;
        text-align: center;
      }
    }
  }
`;

const Landing = (props) => {
  return (
    <StaticQuery
      query={query}
      render={(data) => {
        const pluginImage = getImage(
          data.contentfulLanding.landscapeBackground
        );
        return (
          <BgImage
            Tag="div"
            image={pluginImage}
            alt={data.contentfulLanding.landscapeBackground.title}
            fadeIn
            backgroundColor={`#292929`}
            style={{ width: '100%' }}
          >
            <Container id="Landing">
              <div className="logo">
                <GatsbyImage
                  image={data.contentfulLanding.logo.gatsbyImageData}
                  backgroundColor={`transparent`}
                  alt={data.contentfulLanding.logo.title}
                  placeholder="blurred"
                  style={{ width: '100%', maxWidth: '25vw' }}
                />
              </div>
              <div>
                <h1>{data.contentfulLanding.title}</h1>
                <HeroText />
              </div>
            </Container>
          </BgImage>
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
        gatsbyImageData
        title
      }
      logo {
        gatsbyImageData
        title
      }
    }
  }
`;
