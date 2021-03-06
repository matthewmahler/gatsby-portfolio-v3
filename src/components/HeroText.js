import React from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';

const StyledTypist = styled(Typist)`
  color: #fff;
  letter-spacing: 0.5rem;
  max-width: 100%;
  font-size: 4rem;
  font-weight: 300;

  p {
    display: inline;
    font-size: 4rem;
    background: -webkit-linear-gradient(45deg, #0069ff, #00ff95);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media (max-width: 1025px) {
    font-size: 2.5rem;
    p {
      font-size: 2.5rem;
    }
  }
  @media (max-width: 769px) {
    font-size: 2.5rem;
    text-align: center;

    p {
      font-size: 2.5rem;
    }
  }
  @media (max-width: 415px) {
    font-size: 1.5rem;
    letter-spacing: 0.25rem;

    text-align: center;
    p {
      width: 100%;
      font-size: 1.5rem;
    }
  }
`;

class HeroText extends React.Component {
  render() {
    if (this.props.text) {
      return (
        <Typist>
          <StyledTypist {...this.props}>
            <strong>
              {this.props.text.split(' ').slice(0, 1)}
              <br />
            </strong>
            {this.props.text.split(' ').slice(1).join(' ')}
          </StyledTypist>
        </Typist>
      );
    }
    return (
      <StyledTypist cursor={{ show: true }} {...this.props}>
        <strong>I Make</strong>
        <p> Music</p>
        <Typist.Backspace count={5} delay={400} />
        <p> Websites</p>
        <Typist.Backspace count={9} delay={400} />
        <p> Web Apps</p>
        <Typist.Backspace count={9} delay={400} />
        <p className="long">
          Questionable Decisions
          <Typist.Delay ms={100} />
          .
          <Typist.Delay ms={200} />
          .
          <Typist.Delay ms={300} />.
        </p>
        <Typist.Backspace count={33} delay={10} />
        <strong>But Mostly</strong>
        <Typist.Backspace count={10} delay={400} />
        <strong> I Make</strong>
        <p> Cool Web Things</p>
      </StyledTypist>
    );
  }
}

export default HeroText;
