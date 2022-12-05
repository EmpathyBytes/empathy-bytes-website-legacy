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
  const path = require(`path`)
  const { slash } = require(`gatsby-core-utils`)
  
  exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
  
    // query content for WordPress posts
    const {
      data: {
        allWpPost: { nodes: allPosts },
      },
    } = await graphql(`
      query {
        allWpPost {
          nodes {
            id
            uri
          }
        }
      }
    `)
  
    const postTemplate = path.resolve(`./src/templates/post.js`)
  
    allPosts.forEach(post => {
      createPage({
        // will be the url for the page
        path: post.uri,
        // specify the component template of your choice
        component: slash(postTemplate),
        // In the ^template's GraphQL query, 'id' will be available
        // as a GraphQL variable to query for this post's data.
        context: {
          id: post.id,
        },
      })
    })
  }
};

export default ProjectsPage;
