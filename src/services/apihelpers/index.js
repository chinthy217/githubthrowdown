const baseUrl = 'https://api.github.com'
const endpoints = {
  fetchGitHubUser: `${baseUrl}/search/users?q=`,
  fetchGitHubRepoReadMe: `${baseUrl}/repos`,
}

module.exports = endpoints
