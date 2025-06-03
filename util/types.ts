export interface IPost {
  title: string;
}

export interface IPostRequest {
  posts: {
    nodes: IPost[];
  },
  generalSettings: {
    title: string;
    description: string;
  }
}

export type BlogData = {
  posts: IPost[];
  siteTitle: string;
  siteDescription: string;
};