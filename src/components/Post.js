import React from "react";
import { graphql } from "gatsby";
import Navbar from "./navbar";

// To style the content of the post
const container = {
  paddingTop: 170,
  padding: 96
};

/**
 * Creates the Post component, which is a formatted 
 * page containing the content of the WordPress post.
 */
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

/** 
 * Query that retrieves, based on WordPress ID, the
 * title, featured image, and content of a post.
 * Retrieves other information that may be relevant.
 */
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