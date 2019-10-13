import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => (props.waypoint ? 'transparent' : '#292929')};
  font-weight: bold;
  width: 100vw;
  position: fixed;
  height: 5vh;
  transition: 0.5s ease-in-out;
  z-index: 100;
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    h1 {
      text-align: left;
      font-size: 4rem;
      margin: 0;
      padding: 2rem;
      font-family: 'Pacifico';

      :hover {
        background: -webkit-linear-gradient(45deg, #0069ff, #00ff95);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      :after {
        mix-blend-mode: difference;
      }
    }

    ul {
      mix-blend-mode: difference;

      li {
        font-size: 2.5rem;
        margin-right: 2rem;
        display: inline;
        :hover {
          background: -webkit-linear-gradient(45deg, #0069ff, #00ff95);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        :after {
          mix-blend-mode: difference;
        }
      }
    }
  }
  @media (max-width: 769px) {
    nav {
      h1 {
        font-size: 3rem;
        background: -webkit-linear-gradient(45deg, #0069ff, #00ff95);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      ul {
        li {
          font-size: 1.5rem;
        }
      }
    }
  }
  @media (max-width: 375px) {
    nav {
      box-sizing: border-box;

      justify-content: space-between;
      text-align: center;
      h1 {
        display: none;
      }
      ul {
        box-sizing: border-box;
        width: 100%;
        padding: 0;
        margin-left: 1rem;
        li {
          font-size: 1.25rem;
        }
      }
    }
  }
`;
const Nav = props => {
  return (
    <Container waypoint={props.waypoint}>
      <nav>
        <h1>Matt Mahler</h1>
        <ul>
          <li>About</li>
          <li>Portfolio</li>
          <li>Resume</li>
          <li>Tech</li>
          <li>Education</li>
          <li>Media</li>
        </ul>
      </nav>
    </Container>
  );
};

export default Nav;
