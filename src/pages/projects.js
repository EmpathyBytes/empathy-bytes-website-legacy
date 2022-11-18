import * as React from "react";
import "../styles.css";
import Project from "../components/Project";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Layout from "../components/layout";
import { useStaticQuery, graphql } from "gatsby";

const container = {
  width: "80%",
  padding: 96,
  paddingTop: 150,
};

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query newQuery {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { slug: { eq: "interviews" } } } }
        }
      ) {
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
  `);

  const arr = data.allWpPost.nodes;

  return (
    <Layout>
      <div style={container}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {arr.map((item) => (
              <Grid Project xs={6} padding={2}>
                <Project
                  title={item.title}
                  image={
                    item.featuredImage != null
                      ? item.featuredImage.node.mediaItemUrl
                      : "https://httpcats.com/418.jpg"
                  }
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </Layout>
  );
};

export default ProjectsPage;
