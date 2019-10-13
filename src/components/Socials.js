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
      <FontAwesomeIcon icon={faGithub} size="4x" style={{ color: '#4078c0' }} />
      <FontAwesomeIcon
        icon={faLinkedin}
        size="4x"
        style={{ color: '#0077b5' }}
      />
      <FontAwesomeIcon
        icon={faInstagram}
        size="4x"
        style={{ color: '#5851db' }}
      />
      <FontAwesomeIcon
        icon={faSpotify}
        size="4x"
        style={{ color: '#1db954' }}
      />
    </Container>
  );
};

export default Socials;
