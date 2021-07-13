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

    const buffSubmit = (buff : { seraphim: number, saint: number, hecate: number}) => {
        console.log(buff);
    }

    const dealSubmit = (deal : { dealer: number, synergy: number}) => {
        console.log(deal);
    }

    return (
        <>
            {option === 'equipment' && <Equipment />}
            {option === 'damage' && <Damage dealSubmit = {dealSubmit}/>}
            {option === 'buffscore' && <BuffScore buffSubmit = {buffSubmit}/>}
        </>
    )
}

export default SettingDetail;