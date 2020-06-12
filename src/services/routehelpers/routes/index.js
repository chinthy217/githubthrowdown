import queryString from 'query-string'
import {
  GET_GITHUB_USERS_PATH,
  GET_GITHUB_REPOS_PATH,
  GET_README_PATH,
} from '../constants'

export function toHome(query) {
  if (query) {
    return `${GET_GITHUB_USERS_PATH}?${queryString.stringify(query)}`
  }
  return GET_GITHUB_USERS_PATH
}

export function toRepos(query) {
  if (query) {
    return `${GET_GITHUB_REPOS_PATH}?${queryString.stringify(query)}`
  }
  return GET_GITHUB_REPOS_PATH
}

export function toReadMe(query) {
  if (query) {
    return `${GET_README_PATH}?${queryString.stringify(query)}`
  }
  return GET_README_PATH
}
