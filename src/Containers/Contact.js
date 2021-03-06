import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
const Container = styled.section`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #eee;
  h2 {
    color: #292929;
    font-size: 4rem;
    font-weight: 900;
    margin: 1rem auto;
  }
  hr {
    background: linear-gradient(to right, #0069ff, #00ff95);
    height: 0.5rem;
    border: none;
    width: 150px;
  }
  form {
    width: 667px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    input,
    textarea,
    button {
      margin: 1rem;
      width: 90%;
      font-family: 'Roboto';
    }
    input {
      height: 5rem;
    }
    textarea {
      height: 30rem;
    }
    input[type='submit'] {
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
      transition: 0.2s;
      :hover {
        box-shadow: none;
        color: #eee;
        cursor: pointer;
      }
    }
  }
  @media (max-width: 769px) {
    h2 {
      font-size: 3rem;
    }
    form {
      input[type='submit'] {
        box-shadow: none;
        color: #eee;
      }
    }
  }
  @media (max-width: 415px) {
    h2 {
      margin-top: 5vh;
    }
    form {
      width: 90%;
    }
  }
`;
const Contact = ({ waypoint, forwardedRef }) => {
  const headerVariants = {
    visible: { opacity: 1, x: 0 },
    initial: {
      x: '-100%',
      opacity: 0,
    },
  };
  const bodyVariants = {
    visible: {
      opacity: 1,
    },
    initial: {
      opacity: 0,
    },
  };
  return (
    <Container id="Contact" ref={forwardedRef}>
      <motion.h2
        animate={waypoint ? 'visible' : 'initial'}
        variants={headerVariants}
      >
        Contact Me
      </motion.h2>
      <motion.form
        animate={waypoint ? 'visible' : 'initial'}
        variants={bodyVariants}
        action="https://formspree.io/myrnpkgx"
        method="POST"
      >
        <input type="text" placeholder="Name" name="Name" />
        <input type="email" placeholder="Email" name="Email" />
        <textarea placeholder="Message" name="Message" />
        <motion.input
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="submit"
          value="Send"
          name="Send"
        />
      </motion.form>
    </Container>
  );
};
export default Contact;
