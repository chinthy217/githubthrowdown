import {
  SUBMIT_USER_DETAILS,
  SUBMIT_USER_DETAILS_FALIURE,
  SUBMIT_REPO_DETAILS,
  SUBMIT_REPO_DETAILS_FALIURE,
  SUBMIT_README_FALIURE,
} from './actions'

const Reducer = (state, action) => {
  switch (action.type) {
    case SUBMIT_USER_DETAILS:
      return {
        ...state,
        user: action.payload,
      }
    case SUBMIT_USER_DETAILS_FALIURE:
      return {
        ...state,
        error: action.payload,
      }
    case SUBMIT_REPO_DETAILS:
      return {
        ...state,
        repo: action.payload,
      }
    case SUBMIT_REPO_DETAILS_FALIURE:
      return {
        ...state,
        repoError: action.payload,
      }
    case SUBMIT_README_FALIURE:
      return {
        ...state,
        readMeError: action.payload,
      }

    default:
      return state
  }
}

export default Reducer
