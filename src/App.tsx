import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './page/Home';
import Setting from './page/Setting';

const App = () => {
    return (
        <Router>
            <div className = "headerBox">
                <div className = "logoBox">logo</div>
                <div className = "titleBox">
                    <h1>던체크</h1>
                </div>
            </div>
            <div className = "settingButtonBox">
                <div className = "settingButton"><Link to = '/setting'>컷 설정하기</Link></div>
            </div>
            <Route exact = {true} path = '/' component = {Home} />
            <Route path = '/setting' component = {Setting} />
        </Router>
    )
}

export default App;