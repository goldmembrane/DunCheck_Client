import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../page/Home';
import Setting from '../page/Setting';

const Root: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path = '/' exact component = {Home} />
            <Route path = '/setting' component = {Setting} />
            <Redirect path = '*' to = '/' />
        </Switch>
    </BrowserRouter>
)

export default Root;