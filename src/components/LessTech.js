import React from 'react';
import list from '../SVGs/IconList';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Container = styled(motion.div)`
  width: 100%;
  max-width: 1200px;
  min-height: 60vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  justify-content: center;
  div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 769px) {
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    div {
      svg {
        transform: scale(1.25);
      }
    }
  }
  @media (max-width: 415px) {
    min-height: 70vh;
    grid-gap: 3rem;
    grid-template-columns: 1fr;
    justify-content: center;
    div {
      svg {
        transform: scale(1.25);
      }
    }
  }
`;
const LessTech = ({ waypoint }) => {
  const bodyVariants = {
    initial: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  return (
    <Container
      variants={bodyVariants}
      animate={waypoint ? 'visible' : 'initial'}
      initial={{ opacity: 0 }}
      className="techlist"
    >
      {list.map((icon, key) => {
        if (key < 4) {
          return (
            <div key={key}>
              {React.cloneElement(icon.component, {
                scale: window.innerWidth > 769 ? 4 : 2,
              })}
            </div>
          );
        } else return;
      })}
    </Container>
  );
};

export default LessTech;
