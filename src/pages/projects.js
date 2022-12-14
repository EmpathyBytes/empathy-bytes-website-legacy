import * as React from "react";
import "../styles.css";
import Project from "../components/Project";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Layout from "../components/layout";
import { useStaticQuery, graphql } from "gatsby";

// For formatting
const container = {
  width: "80%",
  padding: 96,
  paddingTop: 150,
};

/**
 * Creates the projects page by querying WP posts tagged
 * as interviews, retrieving the posts' titles and featured
 * images, and passing those posts as props into the Project
 * card component. Cards are mapped to an array that is 
 * rendered as a MUI grid.
 */
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
          slug
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
                      : "../images/empathy-bytes-1.jpeg"
                  }
                  url={item.slug}
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
