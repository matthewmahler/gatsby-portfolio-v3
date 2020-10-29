import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faSpotify,
  faGithub,
  faLinkedin,
  faTwitch,
} from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
const Container = styled(motion.div)`
  width: 50%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  margin: 2rem;
`;
const Socials = ({ waypoint }) => {
  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        staggerDirection: 1, // 1 forwards, -1 backwards
      },
    },
    initial: {
      transition: {
        delay: 0.2,
      },
    },
  };

  const itemVariants = {
    visible: {
      opacity: 1,
      scale: 1.2,
    },
    initial: { opacity: 0 },
  };
  return (
    <Container
      animate={waypoint ? 'visible' : 'initial'}
      variants={containerVariants}
    >
      <motion.a
        initial={{ opacity: 0 }}
        href="https://github.com/matthewmahler"
        target="_blank"
        rel="noopener noreferrer"
        variants={itemVariants}
      >
        <FontAwesomeIcon
          icon={faGithub}
          size="4x"
          style={{ color: '#4078c0' }}
        />
      </motion.a>
      <motion.a
        initial={{ opacity: 0 }}
        variants={itemVariants}
        href="https://www.linkedin.com/in/matthew-mahler-09003a163/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          size="4x"
          style={{ color: '#0077b5' }}
        />
      </motion.a>
      <motion.a
        initial={{ opacity: 0 }}
        variants={itemVariants}
        href="https://www.instagram.com/matthewmahler/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faInstagram}
          size="4x"
          style={{ color: '#5851db' }}
        />
      </motion.a>
      <motion.a
        initial={{ opacity: 0 }}
        variants={itemVariants}
        href="https://open.spotify.com/artist/4TWQJppHQYlY4FlzuvEDUc"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faSpotify}
          size="4x"
          style={{ color: '#1db954' }}
        />
      </motion.a>
      <motion.a
        initial={{ opacity: 0 }}
        variants={itemVariants}
        href="https://www.twitch.tv/emomatt"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faTwitch}
          size="4x"
          style={{ color: '#6441A4' }}
        />
      </motion.a>
    </Container>
  );
};

export default Socials;
