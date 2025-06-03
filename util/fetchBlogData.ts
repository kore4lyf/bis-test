import { GraphQLClient, gql } from 'graphql-request';
import { BlogData, IPostRequest } from "./types";



export async function fetchBlogData
(): Promise<BlogData> {
  const endpoint = 'http://wp-headless-test.local/graphql';
  const client = new GraphQLClient(endpoint);

  const query = gql`
    {
      posts(first: 3) {
        nodes {
          title
        }
      }
      generalSettings {
        title
        description
      }
    }
  `;

  const data:IPostRequest = await client.request(query);

  return {
    posts: data.posts.nodes,
    siteTitle: data.generalSettings.title,
    siteDescription: data.generalSettings.description,
  };
}
