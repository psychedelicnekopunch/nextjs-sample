
module.exports = {
  apps: [{
    script: 'node_modules/.bin/next',
    args: 'start',
    env_production: {
        name: "ticketvillage-web-prod",
        NODE_ENV: "production",
        PORT: 3000,
    },
    env_staging: {
        name: "ticketvillage-web-staging",
        NODE_ENV: "staging",
        PORT: 3001,
    }
  }]
}
