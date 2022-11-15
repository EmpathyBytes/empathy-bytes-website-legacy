import * as React from "react";
import '../styles.css';
import NavBar from "../components/navbar";
import PeopleCard from "../components/PeopleCard"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout";

// Multi Bootstrap Imports
import MCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const pageStyles = {
  color: "#232129",
  padding: 96,
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
  backgroundColor: "#003057",
  height: "100vh",
  width: "100vw",
  padding: "3% 1% 1% 3%"
}
const header = {
  fontFamily: "Roboto",
  fontSize: "3vw",
  color: "white"
}
const header2 = {
  fontFamily: "Roboto",
  fontSize: "2vw",
  color: "white"
}
const carouselInner = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "2% 0 3% 0"
}
const gapS = {
  padding: "0.5% 0 0.5% 0"
}
const gapL = {
  padding: "2% 0 2% 0"
}
const paragraph = {
  fontFamily: "Roboto",
  fontWeight: "200",
  fontSize: "1.5vw",
  color: "white"
}

function AboutPage() {

  const data = useStaticQuery(graphql`
    query MyQuery {
        allWpPost(filter: {categories: {nodes: {elemMatch: {slug: {eq: "members"}}}}}) {
          edges {
            node {
              title
              content
            }
          }
        }
      }
     
  `);

  const arr = data.allWpPost.edges;

  const cleanedArr = arr.map((unit) => {
    const { sys, node } = unit;
    const personName = node.title
    const personRoleRough = node.content
   const personRole = personRoleRough.substring(4, personRoleRough.length - 5)
    const cleaned = {personName, personRole}
    return cleaned;
})

 return (
    <Layout>
      <div style={container}>

      <div>
        <h1 style={header}>About Us</h1>
        <p style={paragraph}>We are a Vertically Integrated Project team at Georgia Tech exploring the lives 
        of those touched by Georgia Tech’s research and technology initiatives. The Vertically 
        Integrated Project Program at Georgia Tech brings together teams of undergraduate students 
        from various years, disciplines, and backgrounds with faculty and graduate students to work 
        on long-term, large-scale, multidisciplinary projects. Learn more about Georgia Tech’s VIP 
        program here.</p>
      </div>

      <div>
        <h1 style={header2}>Web Team</h1>
        <hr/>
          <MCarousel responsive={responsive}>
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
  )
       }

export default AboutPage;