import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import MoreTech from '../components/MoreTech';
import LessTech from '../components/LessTech';
const Container = styled.section`
  min-height: 60vh;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #eee;
  h2 {
    color: #292929;
    font-size: 4rem;
    font-weight: 900;
    margin: 2rem;
    margin-top: 5vh;
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

    :hover {
      box-shadow: none;
      color: #eee;
      cursor: pointer;
    }
  }
  @media (max-width: 769px) {
    min-height: 50vh;

    h2 {
      font-size: 3rem;
    }

    button {
      color: #eee;
      box-shadow: none;
      background-image: linear-gradient(
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 0)
        ),
        linear-gradient(101deg, #0069ff, #00ff95);
    }
  }
  @media (max-width: 415px) {
    min-height: 70vh;

    button {
      padding: 0.5rem 2rem;
      font-size: 1.5rem;
    }
  }
`;
const Tech = ({ waypoint, forwardedRef }) => {
  const [clicked, setClicked] = useState(false);
  const headerVariants = {
    visible: { opacity: 1, x: 0 },
    initial: {
      x: '-100%',
      opacity: 0,
    },
  };
  const buttonVariants = {
    visible: { opacity: 1, x: 0 },
    initial: {
      x: '100%',
      opacity: 0,
    },
  };

  return (
    <Container clicked={clicked} id="Tech" ref={forwardedRef}>
      <motion.h2
        animate={waypoint ? 'visible' : 'initial'}
        variants={headerVariants}
      >
        Tech
      </motion.h2>
      <motion.button
        animate={waypoint ? 'visible' : 'initial'}
        variants={buttonVariants}
        onClick={() => {
          setClicked(!clicked);
        }}
      >
        Show {clicked ? 'Less' : 'More'}
      </motion.button>
      {clicked ? (
        <MoreTech waypoint={waypoint} clicked={clicked} />
      ) : (
        <LessTech waypoint={waypoint} clicked={clicked} />
      )}
    </Container>
  );
};

export default Tech;
