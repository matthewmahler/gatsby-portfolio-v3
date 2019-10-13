import React, { useState, useRef } from 'react';
import { Waypoint } from 'react-waypoint';
import { createGlobalStyle } from 'styled-components';

import Layout from '../components/Layout';
import Nav from '../components/Nav';

import Landing from '../Containers/Landing';
import About from '../Containers/About';
import Portfolio from '../Containers/Portfolio';
import Work from '../Containers/Work';
import Tech from '../Containers/Tech';
import Education from '../Containers/Education';
import Contact from '../Containers/Contact';
import Social from '../Containers/Social';

const GlobalStyle = createGlobalStyle`
html{
    overflow: scroll;
    font-size: 50%; 
    box-sizing: border-box;
    min-width: 100vw;
    min-height: 100vh;
    ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
}
 
  body {
    margin:0;
    font-family: "Montserrat";
    
  }
  @media all and (max-width: 1200px) {
    width: 100%
    html{
      margin: 0;
    }
    
  }
}
`;

const HomePage = () => {
  const [waypoint, setWaypoint] = useState(false);

  return (
    <Layout>
      <GlobalStyle />
      <Nav waypoint={waypoint} />
      <Landing id="Landing" />
      <Waypoint
        onEnter={() => setWaypoint(true)}
        onLeave={() => setWaypoint(false)}
        topOffset="5%"
      />
      <About />
      <Portfolio />
      <Work />
      <Tech />
      <Education />
      <Contact />
      <Social />
    </Layout>
  );
};

export default HomePage;
