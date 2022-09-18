exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          id
          slug
        }
      }
    }
  `);

  data?.allMdx?.nodes.forEach((node) => {
    const slug = node.slug;
    if (slug.includes('projects/')) {
      actions.createPage({
        path: slug,
        component: require.resolve('./src/templates/project-layout.js'),
        context: { slug: slug },
      });
    }
    else {
      actions.createPage({
        path: slug,
        component: require.resolve('./src/templates/post-layout.js'),
        context: { slug: slug },
      });
    }
  });
};
