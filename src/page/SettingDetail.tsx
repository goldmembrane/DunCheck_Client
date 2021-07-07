import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface MatchParams {
    option: string;
}

const SettingDetail = ({ match }: RouteComponentProps<MatchParams>) => {
    const { option } = match.params;

    return (
        <>
            <div>{option}</div>
        </>
    )
}

export default SettingDetail;