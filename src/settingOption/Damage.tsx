import * as React from 'react';
import { useState } from 'react';

type dealProps = {
    dealSubmit: (deal : {dealer: number, synergy: number}) => void
}

const Damage = ({dealSubmit}: dealProps) => {

    const [pureDeal, setPureDeal] = useState(0);

    const [synergyDeal, setSynergyDeal] = useState(0);

    const onPureDealChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPureDeal((e.target as HTMLInputElement).valueAsNumber);
    }

    const onSynergyDealChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setSynergyDeal((e.target as HTMLInputElement).valueAsNumber);
    }

    return (
        <>
            <div className = "damageWrapBox">
                <div className = "damageTitleBox">
                    <h3>딜표 컷 설정</h3>
                </div>
                <div className = "damageContentBox">
                    <div className = "pureDealerBox">
                        <div className = "pureDealerLabel">퓨어 딜러 : </div>
                        <input className = "pureDealerCut" type = "number" value = {pureDeal} onChange = {onPureDealChange}/>
                    </div>
                    <div className = "synergyDealerBox">
                        <div className = "synergyDealerLabel">시너지 딜러 : </div>
                        <input className = "synergyDealerCut" type = "number" value = {synergyDeal} onChange = {onSynergyDealChange}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Damage;