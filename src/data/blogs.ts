import 'regenerator-runtime/runtime.js';

const GET_BLOGS_GQ: string = `
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
      publication: {posts},
    },
  },
} = await hashnodeGql(GET_BLOGS_GQ, {page: 0});

/**
 * It returns data.json containing page 0 blog posts
 * @param {string} query
 * @param {Object} variables
 */
async function hashnodeGql(query: string, variables = {}) {
  const data = await fetch('https://api.hashnode.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({query, variables}),
  });
  return data.json();
}

export default posts;
