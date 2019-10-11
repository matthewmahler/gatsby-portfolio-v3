import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eee;
  h2 {
    color: #040404;
    font-size: 4rem;
    font-weight: 900;
    margin: 1rem auto;
  }
  div {
    max-width: 667px;
    p {
      font-size: 2rem;
      text-align: center;
    }
  }
`;
const About = () => {
  return (
    <Container>
      <h2>About Me</h2>
      <div>
        <p>
          For the last 15 years I've eaten, slept and breathed music, from
          playing in multiple bands to being an all around concert addict and
          everything in between. Ultimately, this led me to Ramapo College of
          New Jersey where I graduated in 2015 with a B.A. in Music Production
          and Audio Engineering. After a few years of freelancing around New
          Jersey it was time for a new challenge.
        </p>
        <p>
          Realizing my passion for web development, I pivoted career paths,
          enrolled in the Rutgers Coding Bootcamp for Full Stack Development,
          and haven’t looked back. My current pet project is a music streaming
          service geared towards unknown and unsigned local bands built in
          modern javascript (MongoDB, Express, React, Node, and GraphQL) but
          when I’m not working on websites and web apps, you can usually find me
          in the pit singing along to every word of my favorite songs.
        </p>
      </div>
    </Container>
  );
};

export default About;
