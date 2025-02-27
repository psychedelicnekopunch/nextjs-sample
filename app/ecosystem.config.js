
module.exports = {
  apps: [{
    script: 'node_modules/.bin/next',
    args: 'start',
    env_production: {
        name: "nextjs-sample-prod",
        NODE_ENV: "production",
        PORT: 3000,
    },
    env_staging: {
        name: "nextjs-sample-stg",
        NODE_ENV: "staging",
        PORT: 3001,
    }
  }]
}
