import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Socials from '../components/Socials';
import Masonry from 'react-masonry-css';

const Container = styled.section`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #292929;
  h2 {
    color: #eee;
    font-size: 4rem;
    font-weight: 900;
    margin: 2rem auto;
    margin-top: 5vh;
  }

  .imageWrapper {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2rem;
    img {
      width: 100%;
    }

    .my-masonry-grid {
      display: -webkit-box; /* Not needed if autoprefixing */
      display: -ms-flexbox; /* Not needed if autoprefixing */
      display: flex;
      margin-left: 0; /* gutter size offset */
      width: 100%;
    }
    .my-masonry-grid_column {
      padding-left: 0; /* gutter size */
      background-clip: padding-box;
    }
    .my-masonry-grid_column > div {
      /* change div to reference your elements you put in <Masonry> */
      background: grey;
      margin-bottom: 30px;
    }
    @media all and (max-width: 1200px) {
      grid-template-columns: 1fr;
      grid-gap: 15px;
      .my-masonry-grid {
        margin-left: 0; /* gutter size offset */
      }
      .my-masonry-grid_column {
        padding-left: 0; /* gutter size offset */
      }
      .my-masonry-grid_column > div {
        margin-bottom: 0; /* space between items */
      }
    }
  }
  @media (max-width: 769px) {
    h2 {
      font-size: 3rem;
    }
  }
`;
const Social = () => {
  const breakpointColumnsObj = {
    default: 4,
    1200: 4,
    991: 4,
    768: 3,
  };
  return (
    <StaticQuery
      query={query}
      render={data => {
        return (
          <Container id="Social">
            <h2>Social</h2>
            <Socials />
            <div className="imageWrapper">
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {data.allInstagramContent.edges.map((photo, key) => {
                  return (
                    <a
                      href={photo.node.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Img
                        fadeIn
                        fluid={photo.node.localImage.childImageSharp.fluid}
                        // srcSet={
                        //   photo.node.localImage.childImageSharp.fluid.srcSet
                        // }
                        key={key}
                        style={{ marginBottom: '0' }}
                      />
                    </a>
                  );
                })}
              </Masonry>
            </div>
          </Container>
        );
      }}
    />
  );
};

const query = graphql`
  query SocialQuery {
    allInstagramContent(limit: 12) {
      edges {
        node {
          link
          localImage {
            childImageSharp {
              fluid {
                aspectRatio
                base64
                originalImg
                originalName
                presentationHeight
                presentationWidth
                sizes
                src
                srcSet
                srcSetWebp
                srcWebp
                tracedSVG
              }
            }
          }
        }
      }
    }
  }
`;
export default Social;
