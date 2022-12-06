import React from "react";
import { graphql } from "gatsby";
import Navbar from "./navbar";
import Grid from "@mui/material/Grid";

const container = {
  paddingTop: 170,
  padding: 96
};

const Post = ({ data }) => (
  <div>
  <Navbar></Navbar>
  <div style={container}>
      <h1>{data.wpPost.title}</h1>
      <p>
        Written by {data.wpPost.author.node.name} on {data.wpPost.date}
      </p>
        <div dangerouslySetInnerHTML={{ __html: data.wpPost.content }}/>
    </div>
  </div>
)

export const query = graphql`
  query($id: String) {
    wpPost(id: { eq: $id }) {
      title
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      content
      excerpt
      date(formatString: "MMMM DD, YYYY")
      author {
        node {
          name
        }
      }
    }
  }
`

export default Post