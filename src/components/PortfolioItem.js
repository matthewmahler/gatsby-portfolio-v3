import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import BackgroundImage from 'gatsby-background-image';

const Container = styled.article`
  height: 25vh;
  width: 50rem;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #eee;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  color: #292929;
  transition: 0.2s ease-in-out;
  :hover {
    box-shadow: none;
    transition: 0.2s ease-in-out;

    :before,
    :after {
      content: '';
      position: absolute;
      top: -0.5rem;
      left: -0.5rem;
      background: linear-gradient(to right, #0069ff, #00ff95);
      width: calc(100% + 1rem);
      height: calc(100% + 1rem);
      z-index: -1;
    }
    :after {
      filter: blur(10px);
    }
  }

  p {
    box-sizing: border-box;
    margin: 0 auto;
    text-align: center;
    font-size: 1.5rem;
    padding: 0 2rem;
  }
  .links {
    width: 100%;
    box-sizing: border-box;
    padding-bottom: 2rem;
    font-size: 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    a {
      text-decoration: none;
      color: #292929;
      :hover {
        background: -webkit-linear-gradient(45deg, #0069ff, #00ff95);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
  .img {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: linear-gradient(#090909cc, #090909aa);
    background-size: cover;
    h3 {
      font-size: 3rem;
      font-weight: 900;
      margin-top: 2rem;
    }

    div {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      strong {
        width: 100%;

        text-align: center;
        font-size: 2rem;
        padding: 1rem;
      }
      .tech {
        text-align: center;
        width: 100%;
        box-sizing: border-box;
        font-size: 1.5rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        span {
          padding: 0 1.5rem;
        }
      }
    }
  }
  @media (max-width: 769px) {
    width: 40rem;
    .img {
      justify-content: center;

      h3 {
        font-size: 2.5rem;
      }
      div {
        strong {
          font-size: 1.5rem;
        }
        .tech {
          font-size: 1.25rem;

          span {
            padding: 1rem;
          }
        }
      }
    }
    .wrapper {
      grid-template-columns: 1fr 1fr;
    }
    .links {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 415px) {
    width: 100%;
    height: 15vh;

    .img {
      h3 {
        font-size: 2rem;
      }
      div {
        display: none;
      }
    }
    .wrapper {
      grid-template-columns: 1fr 1fr;
    }
    .links {
      font-size: 1.5rem;
    }
    p {
      display: none;
    }
  }
`;
const PortfolioItem = props => {
  return (
    <Container>
      <BackgroundImage
        Tag="div"
        fluid={props.project.image.fluid}
        fadeIn
        backgroundColor={`#292929`}
        style={{
          width: '100%',
          height: '50%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-around',
          color: '#eee',
        }}
      >
        <div className="img">
          <h3>{props.project.title}</h3>
          <div>
            <strong>Tech Used:</strong>
            <div className="tech">
              {props.project.tech.map((tech, key) => {
                return <span key={key}>{tech}</span>;
              })}
            </div>
          </div>
        </div>
      </BackgroundImage>

      <div
        dangerouslySetInnerHTML={{
          __html: props.project.description.childMarkdownRemark.html,
        }}
      />
      <div className="links">
        <a href=""> Visit Site</a>
        <a href={props.project.githubLink}>
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </Container>
  );
};

export default PortfolioItem;