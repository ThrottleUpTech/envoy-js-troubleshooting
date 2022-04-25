/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require(`path`)
const { exec } = require("child_process");

// Deploy to the Cloudflare Worker
exports.onPostBuild = ({ reporter }) => {
  reporter.info(JSON.stringify(process.env))
  if (process.env.IS_PRODUCTION_BRANCH === "true") {
    if (typeof process.env.CF_API_TOKEN_WHOLE30 !== 'undefined') {
      reporter.info('Deploying to Cloudflare Workers according to the wrangler.toml configuration.')
      const command = 'npm i @cloudflare/wrangler -g --loglevel error && npm run deploy --loglevel error'
      exec(command, (error, stdout, stderr) => {
        if (error) {
          reporter.error(error)
        }
        reporter.info('Deployed to Cloudflare Worker.')
        if (stderr) reporter.info(stderr);
        if (stdout) reporter.info(stdout);
      })
    }
  }
};

//Create individual envoy profile pages
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return graphql(`
    {
      allWpEnvoy {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
  `).then(result => {
        result.data.allWpEnvoy.edges.forEach(({ node }) => {
            const { slug } = node
            const permalink =  `envoy/${slug}/`
            createPage({
                path: `/${permalink}`,
                component: path.resolve(`./src/templates/single-envoy.js`),
                context: {
                    slug: slug,
                },
            })

        })
    })
}