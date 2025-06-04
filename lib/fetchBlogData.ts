import { GraphQLClient, gql } from 'graphql-request';
import { BlogData, IPostRequest } from "./types";



export async function fetchBlogData
(): Promise<BlogData> {
  const api = 'http://wp-headless-test.local/graphql';
  const client = new GraphQLClient(api);

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
