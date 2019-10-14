import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => (props.waypoint ? 'transparent' : '#292929cc')};
  font-weight: bold;
  width: 100vw;
  position: fixed;
  height: 7vh;
  transition: 0.5s ease-in-out;
  z-index: 100;
  :hover {
    background: ${props => (props.waypoint ? 'transparent' : '#292929')};
  }
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    a {
      text-decoration: none;
      color: inherit;
    }
    h1 {
      text-align: left;
      font-size: 3rem;
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
        font-size: 2rem;
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
        font-size: 2.5rem;
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
  @media (max-width: 415px) {
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
          font-size: 1rem;
        }
      }
    }
  }
`;
const Nav = props => {
  return (
    <Container waypoint={props.waypoint}>
      <nav>
        <h1>
          <a href="#Landing">Matt Mahler</a>
        </h1>
        <ul>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#Resume">Resume</a>
          </li>
          <li>
            <a href="#Tech">Tech</a>
          </li>
          <li>
            <a href="#Education">Education</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
          <li>
            <a href="#Social">Social</a>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Nav;
