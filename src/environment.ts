const environment = {
  URL: process.env.NETLIFY ?
    process.env.CONTEXT == 'production' ?
      process.env.URL :
      process.env.DEPLOY_PRIME_URL :
    'http://localhost:8000'
}
export default environment
