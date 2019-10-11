import React, { useState } from 'react';
import styled from 'styled-components';
import list from '../SVGs/IconList';

const Container = styled.section`
  min-height: 50vh;
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
    margin: 0 auto;
  }
  .techlist {
    width: 100%;
    max-width: 1200px;
    min-height: 40vh;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: ${props =>
      props.clicked ? 'repeat(4, 1fr)' : '1fr 1fr'};
    justify-content: center;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      svg {
        transform: ${props => (props.clicked ? 'scale(2, 2)' : 'scale(4,4)')};
      }
    }
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
    :hover {
      box-shadow: none;
      color: #eee;
      cursor: pointer;
    }
  }
`;
const Tech = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <Container clicked={clicked}>
      <h2>Tech</h2>
      <div className="techlist">
        {list.map((icon, key) => {
          if (clicked || key < 4) {
            return <div key={key}>{icon.component}</div>;
          }
        })}
      </div>
      <button onClick={() => setClicked(!clicked)}>
        Show {clicked ? 'Less' : 'More'}
      </button>
    </Container>
  );
};

export default Tech;
