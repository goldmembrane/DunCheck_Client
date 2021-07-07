import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import BuffScore from '../settingOption/BuffScore';
import Damage from '../settingOption/Damage';
import Equipment from '../settingOption/Equipment';

interface MatchParams {
    option: string;
}

const SettingDetail = ({ match }: RouteComponentProps<MatchParams>) => {
    const { option } = match.params;

    return (
        <>
            {option === 'equipment' && <Equipment />}
            {option === 'damage' && <Damage />}
            {option === 'buffscore' && <BuffScore />}
        </>
    )
}

export default SettingDetail;