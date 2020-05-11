import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { motion } from 'framer-motion';

const Container = styled.section`
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #292929;
  h2 {
    color: #eee;
    font-size: 4rem;
    font-weight: 900;
    margin: 1rem auto;
  }

  .school {
    width: 667px;
    margin: 3rem;
    box-sizing: border-box;
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      text-transform: uppercase;
      h3 {
        font-size: 2.5rem;
        color: #eee;
      }
      span {
        font-size: 1.5rem;
        color: #bbb;
      }
    }
    hr {
      margin-top: 2rem;
      background: linear-gradient(to right, #0069ff, #00ff95);
      height: 0.5rem;
      border: none;
      width: 667px;
    }
    span {
      font-size: 1.5rem;
      color: #bbb;
    }
  }
  @media (max-width: 769px) {
    h2 {
      font-size: 3rem;
    }
    .school {
      margin: 2rem;
      div {
        h3 {
          font-size: 2rem;
          color: #eee;
        }
        span {
          font-size: 1.25rem;
        }
      }
      hr {
        margin-top: 1.5rem;
      }
      span {
        font-size: 1.5rem;
      }
    }
  }
  @media (max-width: 415px) {
    min-height: 50vh;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      .school {
        width: 90%;
        margin: 0.5rem;
        div {
          h3 {
            font-size: 1.5rem;
            color: #eee;
          }
          span {
            align-self: center;
            font-size: 1rem;
          }
        }
        hr {
          width: 100%;
          margin-top: 1.25rem;
        }
        span {
          align-self: flex-start;
          font-size: 1.25rem;
        }
      }
    }
  }
`;
const Education = ({ waypoint, forwardedRef }) => {
  const headerVariants = {
    visible: { opacity: 1, x: 0 },
    initial: {
      x: '100%',
      opacity: 0,
    },
  };
  const bodyVariants = {
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0,
        staggerDirection: 1, // 1 forwards, -1 backwards
      },
    },
    initial: {},
  };
  const itemVariants = {
    visible: {
      x: 0,
      opacity: 1,
    },
    initial: { x: -200, opacity: 0 },
  };
  return (
    <StaticQuery
      query={query}
      render={(data) => {
        return (
          <Container id="Education" ref={forwardedRef}>
            <motion.h2
              animate={waypoint ? 'visible' : 'initial'}
              variants={headerVariants}
            >
              {data.contentfulEducation.title}
            </motion.h2>
            <motion.div
              animate={waypoint ? 'visible' : 'initial'}
              variants={bodyVariants}
            >
              {data.contentfulEducation.school.map((school, key) => {
                return (
                  <motion.div
                    variants={itemVariants}
                    className="school"
                    key={key}
                  >
                    <div>
                      <h3>{school.school}</h3>
                      <span>{school.year}</span>
                    </div>
                    <span>{school.degree}</span>
                    <hr />
                  </motion.div>
                );
              })}
            </motion.div>
          </Container>
        );
      }}
    />
  );
};

export default Education;

const query = graphql`
  query SchoolQuery {
    contentfulEducation {
      school {
        school
        year
        degree
      }
      title
    }
  }
`;
