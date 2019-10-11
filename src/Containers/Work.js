import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #292929;
  h2 {
    color: #eee;
    font-size: 4rem;
    font-weight: 900;
    margin: 1rem auto;
  }
  .job {
    width: 667px;
    margin: 3rem;
    box-sizing: border-box;
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      text-transform: uppercase;
      h3 {
        font-size: 2.5rem;
        color: #eee;
      }
      span {
        font-size: 1.5rem;
        color: #bbb;
      }
    }
    hr {
      margin-top: 2rem;
      background: linear-gradient(to right, #0069ff, #00ff95);
      height: 0.5rem;
      border: none;
    }
    span {
      font-size: 1.5rem;
      color: #bbb;
    }
  }
`;
const Work = () => {
  return (
    <Container>
      <h2>Experience</h2>
      <div>
        <div className="job">
          <div>
            <h3>IBM / Express-Scripts</h3>
            <span>2019 - Present</span>
          </div>
          <span>Full Stack Application Developer</span>
          <hr />
        </div>
        <div className="job">
          <div>
            <h3>Achim Importing</h3>
            <span>2017 - 2019</span>
          </div>
          <span>Junior Developer</span>
          <hr />
        </div>
        <div className="job">
          <div>
            <h3>Headset Inc</h3>
            <span>2016 - 2017</span>
          </div>
          <span>Lead Data Expert</span>
          <hr />
        </div>
      </div>
    </Container>
  );
};

export default Work;
