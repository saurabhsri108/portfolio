const GET_BLOGS_GQ = `
    query GetBlogs($page: Int!) {
        user(username: "saudev001") {
            publication {
                posts(page: $page) {
                    _id
                    slug
                    title
                    dateAdded
                    brief
                    coverImage
                }
            }
        }
    }
`;

const {
  data: {
    user: {
      publication: { posts },
    },
  },
} = await hashnode_gql(GET_BLOGS_GQ, { page: 0 });

const blogs = posts;

async function hashnode_gql(query, variables = {}) {
  const data = await fetch("https://api.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });
  return data.json();
}

export default blogs;
