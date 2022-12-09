import * as React from "react";
import "../styles.css";
import PeopleCard from "../components/PeopleCard";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";

// Multi Bootstrap Imports
import MCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// React Icons Imports
import { BiRightArrow } from 'react-icons/bi';
import { BiLeftArrow } from 'react-icons/bi';

// Making the Carousels Responsive - Jacob
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

// Custom Arrows on the About Page (Not working bc of container issues)
// Styling for custom buttons on the carousel (NOT IN USE CURRENTLY) - Jacob
const arrowStyleRight = {
  background: "transparent",
  color: "#fff",
  fontSize: "80px",
  position: "absolute",
  top: "30%",
  right: "calc(-4% + 1px)",
};
const arrowStyleLeft = {
  background: "transparent",
  color: "#fff",
  fontSize: "80px",
  position: "absolute",
  top: "30%",
  left: "calc(-4% + 1px)",
};
const CustomRight = ({ onClick }) => (
  <button onClick={onClick} style={arrowStyleRight}>
    <BiRightArrow style={{ fontSize: "2vw" }}></BiRightArrow>
  </button>
);
const CustomLeft = ({ onClick }) => (
  <button onClick={onClick} style={arrowStyleLeft}>
    <BiLeftArrow style={{ fontSize: "2vw" }}></BiLeftArrow>
  </button>
);


// Styling for html components & Layout - Jacob
const pageStyles = {
  color: "#005091",
  padding: 96,
  paddingTop: 180,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const headingAccentStyles = {
  color: "#663399",
};

const container = {
  backgroundColor: "#003663",
  padding: "6% 5% 6% 5%",
  paddingTop: 180,
};
const header = {
  fontFamily: "Titillium Web",
  fontSize: "3vw",
  color: "white",
};
const header2 = {
  fontFamily: "Titillium Web",
  fontSize: "2vw",
  color: "white",
};
const carouselInner = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "2% 0 3% 0",
};
const gapS = {
  padding: "0.5% 0 0.5% 0",
};
const gapL = {
  padding: "2% 0 2% 0",
};
const paragraph = {
  fontFamily: "Roboto",
  fontWeight: "200",
  fontSize: "1.5vw",
  color: "white",
};


// Pulling "Team Member" info from the Wordpress Database - Jacob
function AboutPage() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { slug: { eq: "members" } } } }
        }
      ) {
        edges {
          node {
            title
            content
          }
        }
      }
    }
  `);

  // Storing and Cleaning the Data gather above from WordPress - Jacob
  const arr = data.allWpPost.edges;
  const cleanedArr = arr.map((unit) => {
    const { sys, node } = unit;
    const personName = node.title;
    const personRoleRough = node.content;
    const personRole = personRoleRough.substring(4, personRoleRough.length - 5);
    const cleaned = { personName, personRole };
    return cleaned;
  });

  return (
    <Layout>
      <div style={container}>
        <div>
          <h1 style={header}>About Us</h1>
          <p style={paragraph}>
            We are a Vertically Integrated Project team at Georgia Tech
            exploring the lives of those touched by Georgia Tech’s research and
            technology initiatives. The Vertically Integrated Project Program at
            Georgia Tech brings together teams of undergraduate students from
            various years, disciplines, and backgrounds with faculty and
            graduate students to work on long-term, large-scale,
            multidisciplinary projects. Learn more about Georgia Tech’s VIP
            program here.
          </p>
        </div>
        {/* Web Team Info - Jacob */}
        <div style={gapS}>
          <h1 style={header2}>Web Team</h1>
          <MCarousel 
            responsive={responsive} 
            autoPlay={true}
            autoPlaySpeed={7000}
            infinite={true}
            // customLeftArrow={<CustomLeft />}
            // customRightArrow={<CustomRight />}
            >

            {cleanedArr.map((item) => (
              <div style={carouselInner}>
                <PeopleCard
                  name={item.personName}
                  image={item.personImage}
                  role={item.personRole}
                />
              </div>
            ))}
          </MCarousel>
        </div>
        {/* Media Team Info */}
        <div style={gapS}>
          <h1 style={header2}>Media Team</h1>
          <MCarousel 
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={7000}
            infinite={true}>
            {cleanedArr.map((item) => (
              <div style={carouselInner}>
                <PeopleCard
                  name={item.personName}
                  image={item.personImage}
                  role={item.personRole}
                />
              </div>
            ))}
          </MCarousel>
        </div>
        {/* App Team Info */}
        <div style={gapS}>
          <h1 style={header2}>App Team</h1>
          <MCarousel 
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={7000}
            infinite={true}>
            {cleanedArr.map((item) => (
              <div style={carouselInner}>
                <PeopleCard
                  name={item.personName}
                  image={item.personImage}
                  role={item.personRole}
                />
              </div>
            ))}
          </MCarousel>
        </div>
        {/* Emerging Tech Team Info */}
        <div style={gapS}>
          <h1 style={header2}>Emerging Tech Team</h1>
          <MCarousel 
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={7000}
            infinite={true}>
            {cleanedArr.map((item) => (
              <div style={carouselInner}>
                <PeopleCard
                  name={item.personName}
                  image={item.personImage}
                  role={item.personRole}
                />
              </div>
            ))}
          </MCarousel>
        </div>
      </div>
    </Layout>
  );
}

export default AboutPage;
