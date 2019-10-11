import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Container = styled.section`
  min-height: 25vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #eee;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  h3 {
    color: #292929;
    font-size: 3rem;
    font-weight: 900;
    margin: 2rem auto;
  }

  p {
    box-sizing: border-box;
    margin: 0 auto;

    font-size: 1.5rem;
    padding: 2rem;
  }
  .links {
    box-sizing: border-box;
    padding: 2rem;
    font-size: 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
  .tech {
    width: 100%;
    box-sizing: border-box;
    padding: 2rem;
    font-size: 1.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
`;
const PortfolioItem = () => {
  return (
    <Container>
      <h3>Title</h3>
      <div className="tech">
        <span>React</span> <span>Node</span> <span>MongoDB</span>
      </div>
      <div>
        <p>
          Keytar viral mumblecore coloring book gentrify. Kale chips church-key
          etsy activated charcoal, distillery fam locavore truffaut gentrify.
        </p>
        <div className="links">
          <span>Visit Site</span>

          <FontAwesomeIcon icon={faGithub} />
        </div>
      </div>
    </Container>
  );
};

export default PortfolioItem;
