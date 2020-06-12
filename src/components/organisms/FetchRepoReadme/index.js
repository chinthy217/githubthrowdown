/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import renderHTML from 'react-render-html'
import { Icon } from 'semantic-ui-react'
import Button from '../../atoms/Button/index'
import { Link } from 'react-router-dom'
import { fetchGitHubRepoReadMe } from '../../../services/apihelpers'
import { submitReadmeFaliure } from '../../../store/actions'
import { toHome } from '../../../services/routehelpers/routes'
import { Context } from '../../../store/index'

const FetchRepoReadme = (props) => {
  const [state, dispatch] = useContext(Context)
  const [repoReadme, setRepoReadme] = useState(undefined)

  useEffect(() => getGitHubRepoReadme(), [])

  const readMeApi = `${fetchGitHubRepoReadMe}/${state.user.login}/${state.repo.name}/readme`
  function getGitHubRepoReadme() {
    try {
      axios
        .get(readMeApi, {
          headers: {
            'Content-Type': 'application/vnd.github.VERSION.html',
            Accept: 'application/vnd.github.VERSION.html',
          },
        })
        .then((response) => {
          setRepoReadme(response.data)
        })
    } catch (error) {
      dispatch(submitReadmeFaliure(error))
    }
  }

  return (
    <div>
      <h3>Readme.md</h3>
      <Button as={Link} to={toHome()}>
        <Icon name='user' />
        Click to search user
      </Button>
      {repoReadme !== undefined ? renderHTML(repoReadme) : ''}
    </div>
  )
}

export default FetchRepoReadme
