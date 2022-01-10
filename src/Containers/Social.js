import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Socials from '../components/Socials';
import Masonry from 'react-masonry-css';
import { motion } from 'framer-motion';

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
const Social = ({ waypoint, forwardedRef }) => {
  const breakpointColumnsObj = {
    default: 4,
    1200: 4,
    991: 4,
    768: 3,
  };
  const headerVariants = {
    visible: { opacity: 1, x: 0 },
    initial: {
      x: '100%',
      opacity: 0,
    },
  };
  const bodyVariants = {
    visible: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: 1, // 1 forwards, -1 backwards
      },
    },
    initial: {},
  };
  const itemVariants = {
    visible: {
      y: 0,
      opacity: 1,
    },
    initial: { y: 200, opacity: 0 },
  };
  const data = useStaticQuery(query);
  return (
    <Container id="Social" ref={forwardedRef}>
      <motion.h2
        animate={waypoint ? 'visible' : 'initial'}
        variants={headerVariants}
      >
        Socials
      </motion.h2>
      <Socials waypoint={waypoint} />
      <motion.div
        className="imageWrapper"
        animate={waypoint ? 'visible' : 'initial'}
        variants={bodyVariants}
      >
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {data.allInstagramContent.edges.map((photo, key) => {
            return (
              <motion.a
                variants={itemVariants}
                href={photo.node.permalink}
                target="_blank"
                rel="noopener noreferrer"
                key={key}
              >
                <Img
                  fadeIn
                  fluid={photo.node.localImage.childImageSharp.fluid}
                  style={{ marginBottom: '0' }}
                />
              </motion.a>
            );
          })}
        </Masonry>
      </motion.div>
    </Container>
  );
};

const query = graphql`
  query SocialQuery {
    allInstagramContent(
      filter: { media_type: { ne: "VIDEO" } }
      sort: { fields: timestamp, order: DESC }
      limit: 20
    ) {
      edges {
        node {
          media_type
          caption
          timestamp
          permalink
          localImage {
            publicURL
            childImageSharp {
              fluid {
                base64
                originalImg
                originalName
                aspectRatio
                src
                srcSet
              }
            }
          }
        }
      }
    }
  }
`;
export default Social;
