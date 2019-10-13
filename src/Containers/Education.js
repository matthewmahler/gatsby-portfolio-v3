import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

const Container = styled.section`
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
      width: 667px;
    }
    span {
      font-size: 1.5rem;
      color: #bbb;
    }
  }
  @media (max-width: 769px) {
    h2 {
      font-size: 3rem;
    }
    .school {
      margin: 2rem;
      div {
        h3 {
          font-size: 2rem;
          color: #eee;
        }
        span {
          font-size: 1.25rem;
        }
      }
      hr {
        margin-top: 1.5rem;
      }
      span {
        font-size: 1.5rem;
      }
    }
  }
  @media (max-width: 415px) {
    min-height: 50vh;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      .school {
        width: 90%;
        margin: 0.5rem;
        div {
          h3 {
            font-size: 1.5rem;
            color: #eee;
          }
          span {
            align-self: center;
            font-size: 1rem;
          }
        }
        hr {
          width: 100%;
          margin-top: 1.25rem;
        }
        span {
          align-self: flex-start;
          font-size: 1.25rem;
        }
      }
    }
  }
`;
const Education = () => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        return (
          <Container>
            <h2>{data.contentfulEducation.title}</h2>
            <div>
              {data.contentfulEducation.school.map((school, key) => {
                return (
                  <div className="school" key={key}>
                    <div>
                      <h3>{school.school}</h3>
                      <span>{school.year}</span>
                    </div>
                    <span>{school.degree}</span>
                    <hr />
                  </div>
                );
              })}
            </div>
          </Container>
        );
      }}
    />
  );
};

export default Education;

const query = graphql`
  query SchoolQuery {
    contentfulEducation {
      school {
        school
        year
        degree
      }
      title
    }
  }
`;
