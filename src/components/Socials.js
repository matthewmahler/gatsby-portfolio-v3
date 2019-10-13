import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faSpotify,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const Container = styled.div`
  width: 50%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  margin: 2rem;
`;
const Socials = () => {
  return (
    <Container>
      <a
        href="https://github.com/matthewmahler"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faGithub}
          size="4x"
          style={{ color: '#4078c0' }}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/matthew-mahler-09003a163/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          size="4x"
          style={{ color: '#0077b5' }}
        />
      </a>
      <a
        href="https://www.instagram.com/matthewmahler/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faInstagram}
          size="4x"
          style={{ color: '#5851db' }}
        />
      </a>
      <a
        href="https://open.spotify.com/artist/4TWQJppHQYlY4FlzuvEDUc"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faSpotify}
          size="4x"
          style={{ color: '#1db954' }}
        />
      </a>
    </Container>
  );
};

export default Socials;
