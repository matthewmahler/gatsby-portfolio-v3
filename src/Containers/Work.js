import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { motion } from 'framer-motion';
const Container = styled.section`
  min-height: 50vh;
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

  .job {
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
    .job {
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
    min-height: 60vh;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      .job {
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
const Work = ({ waypoint, forwardedRef }) => {
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
      x: 0,
      opacity: 1,
    },
    initial: { x: 200, opacity: 0 },
  };
  return (
    <StaticQuery
      query={query}
      render={(data) => {
        return (
          <Container id="Resume" ref={forwardedRef}>
            <motion.h2
              animate={waypoint ? 'visible' : 'initial'}
              variants={headerVariants}
            >
              {data.contentfulWork.title}
            </motion.h2>
            <motion.div
              animate={waypoint ? 'visible' : 'initial'}
              variants={bodyVariants}
            >
              {data.contentfulWork.jobs.map((job, key) => {
                return (
                  <motion.div variants={itemVariants} className="job" key={key}>
                    <div>
                      <h3>{job.location}</h3>
                      <span>{job.years}</span>
                    </div>
                    <span>{job.title}</span>
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

export default Work;

const query = graphql`
  query WorkQuery {
    contentfulWork {
      title
      jobs {
        title
        years
        location
      }
    }
  }
`;
