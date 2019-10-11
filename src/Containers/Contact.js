import React from 'react';
import styled from 'styled-components';
const Container = styled.section`
  min-height: 40vh;
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
    }
    input {
      height: 4rem;
    }
    textarea {
      height: 30rem;
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
  }
`;
const Contact = () => {
  return (
    <Container>
      <h2>Contact Me</h2>

      <form action="https://formspree.io/myrnpkgx" method="POST">
        <input type="text" placeholder="Your name" />
        <input type="email" placeholder="Your email" />
        <textarea placeholder="Your message" />
        <button type="submit" value="Send">
          Submit
        </button>
      </form>
    </Container>
  );
};
export default Contact;
