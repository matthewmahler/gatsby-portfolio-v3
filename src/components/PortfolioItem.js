import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
const Container = styled.article`
  min-height: 30vh;
  width: 50rem;
  max-width: 30vw;
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
      filter: blur(1.5rem);
    }
  }

  p {
    box-sizing: border-box;
    margin: 0 auto;
    text-align: center;
    font-size: 1.5rem;
    padding: 1rem 2rem;
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
    justify-content: flex-start;
    background-image: linear-gradient(#090909cc, #090909aa);
    background-size: cover;
    h3 {
      font-size: 3rem;
      font-weight: 900;
      margin: 0 auto;
      margin-top: 1rem;

      text-align: center;
      :hover {
        background: -webkit-linear-gradient(45deg, #0069ff, #00ff95);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      a {
        color: inherit;
        text-decoration: none;
      }
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
        margin-bottom: 1rem;
        span {
          padding: 0 1rem;
        }
      }
    }
  }
  @media (max-width: 769px) {
    width: 40rem;
    max-width: 45vw;

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
            padding: 0.5rem;
          }
        }
      }
    }

    .links {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 415px) {
    width: 100%;
    max-width: 90vw;
    max-height: 20vh;

    .img {
      min-height: 15vh;
      h3 {
        font-size: 2rem;
      }
      div {
        display: none;
      }
    }

    .links {
      font-size: 1.5rem;
    }
    p {
      display: none;
    }
  }
`;
const PortfolioItem = (props) => {
  const pluginImage = getImage(props.project.image);
  return (
    <Container>
      <BgImage
        Tag="div"
        image={pluginImage}
        alt={props.project.image.title}
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
          <h3>
            <a
              href={
                props.project.siteLink
                  ? props.project.siteLink
                  : props.project.githubLink
              }
            >
              {props.project.title}
            </a>
          </h3>
          <div>
            <strong>Tech Used:</strong>
            <div className="tech">
              {props.project.tech.map((tech, key) => {
                return <span key={key}>{tech}</span>;
              })}
            </div>
          </div>
        </div>
      </BgImage>

      <div
        dangerouslySetInnerHTML={{
          __html: props.project.description.childMarkdownRemark.html,
        }}
      />
      <div className="links">
        <a
          href={
            props.project.siteLink
              ? props.project.siteLink
              : props.project.githubLink
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Site
        </a>
        <a
          href={props.project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </Container>
  );
};

export default PortfolioItem;
