import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  min-height: 30vh;
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
  .school {
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
const Education = () => {
  return (
    <Container>
      <h2>Education</h2>
      <div>
        <div className="school">
          <div>
            <h3>Rutgers University</h3>
            <span>2018</span>
          </div>
          <span>Certification in Full Stack Web Development</span>
          <hr />
        </div>
        <div className="school">
          <div>
            <h3>Ramapo College of New Jersey</h3>
            <span>2015</span>
          </div>
          <span>B.A. in Music Production and Audio Engineering</span>
          <hr />
        </div>
      </div>
    </Container>
  );
};

export default Education;
