import React from 'react'
import { RouteComponentProps, Link, Route } from 'react-router-dom';
import Equipment from './Equipment';

const Setting = (props: RouteComponentProps<{}>) => {


    const returnBack = () => {
        props.history.push('/');
    }

    return (
        <>
            <div className = "settingWrapBox">
                <div className = "settingCheckOptionBox">
                    <ul className = "settingCheckOptionCollection">
                        <li className = "settingCheckOption"><Link to ='/setting/equipment'>마부</Link></li>
                        <li className = "settingCheckOption">딜표</li>
                        <li className = "settingCheckOption">버프력</li>
                    </ul>
                </div>
            </div>
            <Route path = '/setting' exact render = {() => 
                <div className = "settingContentBox">
                    <div className = 'returnBackButtonBox'>
                        <button className = 'returnBackButton' onClick = {returnBack}>설정하기</button>
                    </div>
                </div>} />
            <Route path = '/setting/:option' component = {Equipment} />
        </>
    )
}

export default Setting;