import React from 'react'
import { RouteComponentProps } from 'react-router';

const Setting = (props: RouteComponentProps) => {

    const returnBack = () => {
        props.history.push('/');
    }

    return (
        <>
            <div className = "settingWrapBox">
                <div className = "settingCheckOptionBox">
                    <ul className = "settingCheckOptionCollection">
                        <li className = "settingCheckOption">마부</li>
                        <li className = "settingCheckOption">딜표</li>
                        <li className = "settingCheckOption">버프력</li>
                    </ul>
                </div>
                <div className = "settingContentBox">
                    <div className = 'returnBackButtonBox'>
                        <button className = 'returnBackButton' onClick = {returnBack}>설정하기</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Setting;