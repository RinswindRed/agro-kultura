import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import App from './App'
import ApiItem from './ApiItem/ApiItems'
import NotFound404 from './NotFound404/';
import Footer from './Footer/Footer'

const routes = (
    <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/film/:id" component={ApiItem} />
        <Route path='/footer' component={Footer}/>
        {/* <Redirect from="/accounts" to="/users" /> */}
        <Route component={NotFound404} />
    </Switch>
)
export default routes;