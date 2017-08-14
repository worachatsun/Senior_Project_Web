import React, { Component } from 'react'
import {
  BrowserRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import HomePage from '../components/HomePage'
import EventPage from '../components/EventPage'
import CareerPage from '../components/CareerPage'
import DonationPage from '../components/DonationPage'

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path={'/'} component={HomePage}/>
                    <Route path={'/event'} component={EventPage}/>
                    <Route path={'/donation'} component={DonationPage}/>
                    <Route path={'/career'} component={CareerPage}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router