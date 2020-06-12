export const SUBMIT_USER_DETAILS = 'SUBMIT_USER_DETAILS'
export const SUBMIT_USER_DETAILS_FALIURE = 'SUBMIT_USER_DETAILS_FALIURE'

export const SUBMIT_REPO_DETAILS = 'SUBMIT_REPO_DETAILS'
export const SUBMIT_REPO_DETAILS_FALIURE = 'SUBMIT_REPO_DETAILS_FALIURE'

export const SUBMIT_README_FALIURE = 'SUBMIT_README_FALIURE'

export const submitUserDetails = (details) => {
  console.log(details)
  return {
    type: SUBMIT_USER_DETAILS,
    payload: { ...details },
  }
}

export const submitUserDetailsFaliure = (message) => ({
  type: SUBMIT_USER_DETAILS,
  payload: { ...message },
})

export const submitRepoDetails = (details) => {
  console.log(details)
  return {
    type: SUBMIT_REPO_DETAILS,
    payload: { ...details },
  }
}

export const submitRepoDetailsFaliure = (message) => ({
  type: SUBMIT_REPO_DETAILS_FALIURE,
  payload: { ...message },
})

export const submitReadmeFaliure = (message) => ({
  type: SUBMIT_README_FALIURE,
  payload: { ...message },
})
