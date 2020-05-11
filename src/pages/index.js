import React, { useState } from 'react';
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
import { useDimensions } from '../Hooks/useDimensions';

const GlobalStyle = createGlobalStyle`
html{
    overflow-y: scroll;
    overflow-x: hidden;
    font-size: 50%; 
    box-sizing: border-box;
    min-width: 100vw;
    min-height: 100vh;
    scrollbar-color: transparent transparent;
    scrollbar-width: none;
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
  const [about, setAbout] = useState(false);
  const [portfolio, setPortfolio] = useState(false);
  const [work, setWork] = useState(false);
  const [tech, setTech] = useState(false);
  const [education, setEducation] = useState(false);
  const [contact, setContact] = useState(false);
  const [social, setSocial] = useState(false);

  const [aboutRef, aboutSize] = useDimensions();
  const [portfolioRef, portfolioSize] = useDimensions();
  const [workRef, workSize] = useDimensions();
  const [techRef, techSize] = useDimensions();
  const [educationRef, educationSize] = useDimensions();
  const [contactRef, contactSize] = useDimensions();
  const [socialRef, socialSize] = useDimensions();

  return (
    <Layout>
      <GlobalStyle />
      <Nav waypoint={waypoint} />
      <Landing id="Landing" />
      <Waypoint
        onEnter={() => setWaypoint(true)}
        onLeave={() => setWaypoint(false)}
        topOffset="7%"
      />
      <About forwardedRef={aboutRef} waypoint={about} />
      <Waypoint
        onEnter={() => setAbout(true)}
        bottomOffset={-aboutSize.height * 0.8}
      />
      <Portfolio forwardedRef={portfolioRef} waypoint={portfolio} />
      <Waypoint
        onEnter={() => setPortfolio(true)}
        bottomOffset={-portfolioSize.height * 0.8}
      />
      <Work forwardedRef={workRef} waypoint={work} />
      <Waypoint
        onEnter={() => setWork(true)}
        bottomOffset={-workSize.height * 0.8}
      />
      <Tech forwardedRef={techRef} waypoint={tech} />
      <Waypoint
        onEnter={() => setTech(true)}
        bottomOffset={-techSize.height * 0.8}
      />
      <Education forwardedRef={educationRef} waypoint={education} />
      <Waypoint
        onEnter={() => setEducation(true)}
        bottomOffset={-educationSize.height * 0.8}
      />
      <Contact forwardedRef={contactRef} waypoint={contact} />
      <Waypoint
        onEnter={() => setContact(true)}
        bottomOffset={-contactSize.height * 0.8}
      />
      <Social forwardedRef={socialRef} waypoint={social} />
      <Waypoint
        onEnter={() => setSocial(true)}
        bottomOffset={-socialSize.height * 0.8}
      />
    </Layout>
  );
};

export default HomePage;
