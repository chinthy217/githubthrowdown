/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import isEmpty from 'lodash/isEmpty'
import { Icon } from 'semantic-ui-react'
import Button from '../../atoms/Button/index'
import Card from '../../molecules/Card'
import {
  submitRepoDetails,
  submitRepoDetailsFaliure,
} from '../../../store/actions'
import { toReadMe } from '../../../services/routehelpers/routes'
import { Context } from '../../../store/index'

const FetchGitHubProjects = (props) => {
  const [state, dispatch] = useContext(Context)
  const [repoData, setRepoData] = useState({})

  const repoApi = state.user.repos_url

  useEffect(() => getGitHubProjects(), [])

  function getGitHubProjects() {
    try {
      axios.get(repoApi).then((response) => {
        setRepoData(response.data)
      })
    } catch (error) {
      dispatch(submitRepoDetailsFaliure(error))
    }
  }

  const fetchReadMeMD = (item) => {
    dispatch(submitRepoDetails(item))
    props.history.push(toReadMe())
  }

  const userCards = !isEmpty(repoData)
    ? repoData.map((item) => {
        return (
          <Card key={item.id} header={item.name} description={item.description}>
            {
              <Button onClick={() => fetchReadMeMD(item)}>
                <Icon name='code branch' />
                Click for ReadMe
              </Button>
            }
          </Card>
        )
      })
    : ''

  return <div>{userCards}</div>
}

export default FetchGitHubProjects
