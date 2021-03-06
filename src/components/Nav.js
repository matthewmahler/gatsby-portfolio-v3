import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.header`
  color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.waypoint ? 'transparent' : '#292929cc')};
  font-weight: bold;
  width: 100vw;
  position: fixed;
  height: 7vh;
  transition: 0.3s ease-in-out;
  z-index: 100;
  :hover {
    background: ${(props) => (props.waypoint ? 'transparent' : '#292929')};
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
      flex-direction: column;
      justify-content: space-between;
      text-align: center;
      h1 {
        display: none;
        padding: 0;
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
const Nav = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  const variants = {
    loaded: { opacity: 1 },
    initial: {
      opacity: 0,
      transition: {
        delay: 0.2,
      },
    },
  };

  const ulVariants = {
    loaded: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        staggerDirection: 1, // 1 forwards, -1 backwards
      },
    },
    initial: {
      scale: 1,
    },
  };

  const liVariants = {
    loaded: {
      x: 0,
      opacity: 1,
    },
    initial: { x: -20, opacity: 0 },
  };
  const navItems = [
    'About',
    'Portfolio',
    'Resume',
    'Tech',
    'Education',
    'Contact',
    'Social',
  ];
  return (
    <Container waypoint={props.waypoint}>
      <motion.nav
        variants={variants}
        initial="initial"
        animate={isLoaded ? 'loaded' : 'initial'}
        transition={{ damping: 300 }}
      >
        <motion.h1 animate={{ x: 0 }} initial={{ x: '-2rem' }}>
          <a href="#Landing">Matt Mahler</a>
        </motion.h1>
        <motion.ul variants={ulVariants}>
          {navItems.map((item, key) => {
            return (
              <motion.li variants={liVariants} key={key}>
                <a href={`#${item}`}>{item}</a>
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.nav>
    </Container>
  );
};

export default Nav;
