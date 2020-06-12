import React, { useState, useContext } from 'react'
import isEmpty from 'lodash/isEmpty'
import { Form, Icon } from 'semantic-ui-react'
import axios from 'axios'
import Input from '../../atoms/Input/index'
import Button from '../../atoms/Button/index'
import Card from '../../molecules/Card'
import { Context } from '../../../store/index'
import {
  submitUserDetails,
  submitUserDetailsFaliure,
} from '../../../store/actions'
import { toRepos } from '../../../services/routehelpers/routes'
import { fetchGitHubUser } from '../../../services/apihelpers'

const FetchGitHubUser = (props) => {
  const [state, dispatch] = useContext(Context)
  const [inputValue, setInputValue] = useState('')
  const [userData, setuserData] = useState({})
  const [userCountValidation, setUserCountValidation] = useState(false)

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const getGitHubUser = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.get(`${fetchGitHubUser}${inputValue}`)
      if (response.data.total_count === 0) {
        setUserCountValidation(true)
      } else {
        setuserData(response.data)
        setUserCountValidation(false)
      }
    } catch (error) {
      dispatch(submitUserDetailsFaliure(error))
    }
  }

  const fetchUserRepos = (item) => {
    dispatch(submitUserDetails(item))
    props.history.push(toRepos())
  }

  const userCards = !isEmpty(userData.items)
    ? userData.items.map((item) => {
        return (
          <Card key={item.id} header={item.login} imageUrl={item.avatar_url}>
            <Button onClick={() => fetchUserRepos(item)}>
              <Icon name='code branch' />
              Click for Repos
            </Button>
          </Card>
        )
      })
    : ''

  const errorMessage = userCountValidation ? <h3>User not found!</h3> : ''

  return (
    <>
      <Form onSubmit={getGitHubUser}>
        <Input
          icon='search'
          placeholder='Search...'
          onChange={handleInputChange}
        />
        <Button>Search</Button>
      </Form>
      {userCards}
      {errorMessage}
    </>
  )
}

export default FetchGitHubUser
