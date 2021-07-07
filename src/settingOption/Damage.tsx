import * as React from 'react';

const Damage = () => {
    return (
        <>
            <div className = "damageWrapBox">
                <div className = "damageTitleBox">
                    <h3>딜표 컷 설정</h3>
                </div>
                <div className = "damageContentBox">
                    <div className = "pureDealerBox">
                        <div className = "pureDealerLabel">퓨어 딜러 : </div>
                        <input className = "pureDealerCut" type = "text" />
                    </div>
                    <div className = "synergyDealerBox">
                        <div className = "synergyDealerLabel">시너지 딜러 : </div>
                        <input className = "synergyDealerCut" type = "text" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Damage;