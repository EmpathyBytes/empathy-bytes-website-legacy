import * as React from "react";
import '../styles.css';
import NavBar from "../components/navbar";
import Project from "../components/Project"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { client } from "../client";
import { useStaticQuery, graphql } from "gatsby"

const container = {
  width: '80%',
  padding: 96,
  paddingTop: 150
}

const ProjectsPage = () => {

  const data = useStaticQuery(graphql`
    query newQuery {
      allWpPost (filter: {categories: {nodes: {elemMatch: {slug: {eq: "interviews"}}}}}) {
        nodes {
          title
          featuredImage {
              node {
                mediaItemUrl
              }
          }
        }
      }
    }
  `)

  const arr = data.allWpPost.nodes;

  const cleanedArr = arr.map((unit) => {
    const { sys, node } = unit;
    const projTitle = data.allWpPost.nodes.mediaItemUrl
    const projImg = data.allWpPost.nodes.mediaItemUrl
    const cleaned = {projTitle, projImg}
    return cleaned;
  })

   return(
       <div style={container}>
       <NavBar/>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
          {cleanedArr.map((item) => (
            <Grid Project xs={6} padding={2}>
                <Project 
                    title={item.projTitle}
                    image={item.projImg}
                />
                </Grid>
            ))}
          </Grid>
      </Box>
       </div>
   );
};

export default ProjectsPage;