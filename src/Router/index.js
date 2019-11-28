import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'
import App from '../App'
import React from 'react'
import Concerned from '../Views/Concerned'
import Message from '../Views/Message'
import Home from '../Views/Home'
import Login from '../Views/Login'
import Reset from '../Views/Reset'
import Physician from '../Views/Physician'
import User from '../Views/User'
import Medicinal from '../Views/Medicinal'
import Comment from '../Views/Comment'
import Order from '../Views/Order'
const router = (
    <HashRouter>
        <App>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/reset" component={Reset}/>
                <Route path="/home" render={() => {
                    return <Home >
                        <Switch>
                            <Route path="/home/concerned" component={Concerned}/>
                            <Route path="/home/message" component={Message} />
                            <Route path="/home/user" component={User}/>
                            <Route path="/home/physician" component={Physician}/>
                            <Route path="/home/medicinal" component={Medicinal}/>
                            <Route path="/home/comment" component={Comment}/>
                            <Route path="/home/order" component={Order}/>
                            </Switch>
                    </Home>
                }} /> 
                <Redirect from="/" to="/login"/>                      
            </Switch>
        </App>
    </HashRouter>
)
export default router