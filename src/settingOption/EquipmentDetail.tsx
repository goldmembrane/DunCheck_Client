import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import EquipmentMagic from './equipment/EquipmentMagic';
import Avatar from './equipment/Avatar';
import Creature from './equipment/Creature';
import Talisman from './equipment/Talisman';

interface MatchParams {
    cut : string
}

const EquipmentDetail = ({ match }: RouteComponentProps<MatchParams>) => {
    
    const { cut } = match.params;

    return (
        <>
        {cut === 'cutequipment' && <EquipmentMagic />}
        {cut === 'cutavatar' && <Avatar />}
        {cut === 'cutcreature' && <Creature />}
        {cut === 'cuttalisman' && <Talisman />}
        </>
    )
}

export default EquipmentDetail;