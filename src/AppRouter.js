import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import App from './App'
import CharacterDetailPage from './components/CharacterDetailPageContainer'
import NotFoundPage from './components/NotFoundPage'


const createHistory = require('history').createBrowserHistory
export const history = createHistory()


const AppRouter = () => (
    <Router onUpdate={() => window.scrollTo(0,0)} history={history} >
        <Switch>
        <Route exact path='/' component={App} />
        <Route path = '/character/:id' component={CharacterDetailPage} />
        <Route path='/error' component={NotFoundPage} />
        <Route component={NotFoundPage} />
        </Switch>
    </Router>
)

export default AppRouter 