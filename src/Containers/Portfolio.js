import React, { useState } from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { motion } from 'framer-motion';

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
  button {
    border-radius: 1rem;
    padding: 2rem;
    font-size: 2rem;
    padding: 1rem 3rem;
    color: #292929;
    font-weight: 500;
    box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
    border: solid 3px transparent;
    background-image: linear-gradient(
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0)
      ),
      linear-gradient(101deg, #0069ff, #00ff95);
    background-origin: border-box;
    background-clip: content-box, border-box;
    box-shadow: 2px 1000px 1px #fff inset;
    transition: 0.2s;
    margin-bottom: 1rem;
    :hover {
      box-shadow: none;
      color: #eee;
      cursor: pointer;
    }
  }
  @media (max-width: 769px) {
    h2 {
      font-size: 3rem;
    }
    .wrapper {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: 415px) {
    h2 {
      font-size: 3rem;
    }
    .wrapper {
      grid-template-columns: 1fr;
    }
  }
`;
const Portfolio = ({ waypoint, forwardedRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const headerVariants = {
    visible: { opacity: 1, x: 0 },
    initial: {
      x: '-100%',
      opacity: 0,
    },
  };
  const bodyVariants = {
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
        staggerDirection: 1, // 1 forwards, -1 backwards
      },
    },
    initial: {},
  };

  const itemVariants = {
    visible: {
      y: 0,
      opacity: 1,
    },
    initial: { y: 200, opacity: 0 },
  };
  return (
    <StaticQuery
      query={query}
      render={(data) => {
        return (
          <Container id="Portfolio" ref={forwardedRef}>
            <motion.h2
              animate={waypoint ? 'visible' : 'initial'}
              variants={headerVariants}
            >
              {data.contentfulPortfolio.title}
            </motion.h2>
            <motion.button
              animate={waypoint ? 'visible' : 'initial'}
              variants={headerVariants}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? 'Previous' : 'Next'}
            </motion.button>
            {isOpen ? (
              <motion.div
                animate={waypoint ? 'visible' : 'initial'}
                variants={bodyVariants}
                className="wrapper"
                layout
              >
                {data.contentfulPortfolio.portfolioItems
                  .slice(5, 11)
                  .map((project, key) => {
                    return (
                      <motion.div
                        variants={itemVariants}
                        animate={isOpen ? 'visible' : 'initial'}
                      >
                        <PortfolioItem key={key} project={project} />
                      </motion.div>
                    );
                  })}
              </motion.div>
            ) : (
              <motion.div variants={bodyVariants} className="wrapper" layout>
                {data.contentfulPortfolio.portfolioItems
                  .slice(0, 6)
                  .map((project, key) => {
                    return (
                      <motion.div
                        variants={itemVariants}
                        animate={isOpen ? 'initial' : 'visible'}
                        inherit={false}
                      >
                        <PortfolioItem key={key} project={project} />
                      </motion.div>
                    );
                  })}
              </motion.div>
            )}
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
          }
        }
      }
      title
    }
  }
`;
