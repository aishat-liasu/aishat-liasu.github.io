const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value: value.replace(/^\/|\/$/g, ''), // e.g. "blog/my-first-post" or "projects/trivia-app"
    });
  }
};

exports.setFieldsOnGraphQLNodeType = ({ type }) => {
  if (type.name === `Mdx`) {
    return {
      slug: {
        type: `String`,
        resolve: (node) => node.fields?.slug,
      },
    };
  }
  return {};
};

exports.createPages = async function ({ actions, graphql }) {
  const { createRedirect } = actions;
  const postTemplate = path.resolve('./src/templates/post-layout.js');
  const projectTemplate = path.resolve('./src/templates/project-layout.js');

  const { data } = await graphql(`
    query {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        nodes {
          id
          fields {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  data?.allMdx?.nodes.forEach(node => {
    const slug = node.fields?.slug;
    if (slug?.includes('projects/')) {
      actions.createPage({
        path: slug,
        component: `${projectTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
        context: { id: node.id, slug: slug },
      });
    } else if (slug) {
      actions.createPage({
        path: slug,
        component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
        context: { id: node.id, slug: slug },
      });
    }
  });

  createRedirect({
    fromPath: '/__third-party-proxy?url=https://www.googletagmanager.com/gtag/js?id=G-89HHSZSCLE',
    toPath: 'https://www.googletagmanager.com/gtag/js?id=G-89HHSZSCLE',
    statusCode: 200,
  });

  createRedirect({
    fromPath: '/__third-party-proxy?url=https%3A%2F%2Fwww.googletagmanager.com%2Fgtag%2Fjs%3Fid%3DG-89HHSZSCLE',
    toPath: 'https://www.googletagmanager.com/gtag/js?id=G-89HHSZSCLE',
    statusCode: 200,
  });
};
