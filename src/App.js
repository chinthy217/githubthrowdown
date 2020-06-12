import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Store from './store/index'
import FetchGitHubUser from './components/organisms/FetchGitHubUser'
import FetchGitHubProjects from './components/organisms/FetchGitHubProjects'
import FetchRepoReadme from './components/organisms/FetchRepoReadme'

function App() {
  return (
    <Store>
      <Router>
        <div className='App'>
          <Switch>
            <Route path='/' component={FetchGitHubUser} exact />
            <Route path='/github-projects' component={FetchGitHubProjects} />
            <Route path='/github-readme' component={FetchRepoReadme} />
          </Switch>
        </div>
      </Router>
    </Store>
  )
}

export default App
