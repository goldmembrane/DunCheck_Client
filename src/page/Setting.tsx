import React from 'react'
import { RouteComponentProps, Link, Route } from 'react-router-dom';
import SettingDetail from './SettingDetail';

const Setting = (props: RouteComponentProps<{}>) => {


    const returnBack = () => {
        props.history.push('/');
    }

    return (
        <>
            <div className = "settingWrapBox">
                <div className = "settingCheckOptionBox">
                    <ul className = "settingCheckOptionCollection">
                        <li className = "settingCheckOption"><Link to = '/setting/equipment'>장비</Link></li>
                        <li className = "settingCheckOption"><Link to = '/setting/damage'>딜표</Link></li>
                        <li className = "settingCheckOption"><Link to = '/setting/buffscore'>버프력</Link></li>
                    </ul>
                </div>
            </div>
            <Route path = '/setting' exact = {true} />
            <Route path = '/setting/:option' component = {SettingDetail} />
            <div className = "settingContentBox">
                <div className = 'returnBackButtonBox'>
                    <button className = 'returnBackButton' onClick = {returnBack}>설정하기</button>
                </div>
            </div>
        </>
    )
}

export default Setting;