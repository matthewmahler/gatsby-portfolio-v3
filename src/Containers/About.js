import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
const Container = styled.section`
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eee;
  h2 {
    color: #040404;
    font-size: 4rem;
    font-weight: 900;
    margin: 1rem auto;
  }
  hr {
    background: linear-gradient(to right, #0069ff, #00ff95);
    height: 0.5rem;
    border: none;
    width: 150px;
  }
  div {
    max-width: 667px;
    p {
      font-size: 2rem;
      text-align: center;
    }
  }
  @media (max-width: 769px) {
    h2 {
      font-size: 3rem;
    }
    div {
      max-width: 75%;
      p {
        font-size: 1.5rem;
      }
    }
  }
`;
const About = () => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        return (
          <Container>
            <h2>{data.contentfulAbout.title}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: data.contentfulAbout.bio.childMarkdownRemark.html,
              }}
            />
          </Container>
        );
      }}
    />
  );
};

export default About;

const query = graphql`
  query AboutQuery {
    contentfulAbout {
      bio {
        childMarkdownRemark {
          html
        }
      }
      title
    }
  }
`;
