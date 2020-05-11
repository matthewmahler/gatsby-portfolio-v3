import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { motion } from 'framer-motion';
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
    margin-top: 5vh;
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
const About = ({ waypoint, forwardedRef }) => {
  const headerVariants = {
    visible: { opacity: 1, x: 0 },
    initial: {
      x: '-100%',
      opacity: 0,
    },
  };
  const bodyVariants = {
    visible: { opacity: 1, x: 0 },
    initial: {
      x: '100%',
      opacity: 0,
    },
  };
  return (
    <StaticQuery
      query={query}
      render={(data) => {
        return (
          <Container id="About" ref={forwardedRef}>
            <motion.h2
              animate={waypoint ? 'visible' : 'initial'}
              variants={headerVariants}
            >
              {data.contentfulAbout.title}
            </motion.h2>
            <motion.div
              animate={waypoint ? 'visible' : 'initial'}
              variants={bodyVariants}
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
