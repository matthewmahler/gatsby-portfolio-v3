import React from 'react';
import list from '../SVGs/IconList';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Container = styled(motion.div)`
  width: 100%;
  max-width: 1200px;
  min-height: 60vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  justify-content: center;
  div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    svg {
    }
  }
  @media (max-width: 769px) {
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
  }
  @media (max-width: 415px) {
    min-height: 70vh;

    grid-gap: 3rem;
    grid-template-columns: 1fr 1fr;
    justify-content: center;

    button {
      padding: 0.5rem 2rem;
      font-size: 1.5rem;
    }
  }
`;

const MoreTech = ({ clicked, width }) => {
  const bodyVariants = {
    initial: {
      opacity: 0,
    },
    visible: {
      opacity: 1,

      transition: {
        delayChildren: 0.5,
      },
    },
  };
  return (
    <Container
      variants={bodyVariants}
      animate={clicked ? 'visible' : 'initial'}
      initial={{ opacity: 0 }}
      className="techlist"
    >
      {list.map((icon, key) => {
        return (
          <div key={key}>
            {React.cloneElement(icon.component, {
              scale: width > 769 ? 2 : 1,
              reduxX: width > 769 ? '30px' : '0px',
              translate: width > 769 ? '-30px, -15px' : '0px, 0px',
            })}
          </div>
        );
      })}
    </Container>
  );
};

export default MoreTech;
