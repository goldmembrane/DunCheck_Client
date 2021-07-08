import * as React from 'react';

const Creature = () => {
    return (
        <>
            <div className = "creatureWrapBox">
                <div className = "creatureTitleBox">
                    <h4>크리쳐 컷 설정</h4>
                </div>
                <div className = "creatureContentBox">
                    <div className = "dealerCreatureBox">
                        <div className = "dealerCreatureLabel">딜러 크리쳐 컷 : </div>
                        <input className = "checkDealerCreature" type = "text" />
                    </div>
                    <div className = "buffCreatureBox">
                        <div className = "buffCreatureLabel">버프 크리쳐 컷 : </div>
                        <div className = "checkBuffCreatureDropdown">버프 크리쳐 드롭다운 들어갈 곳</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Creature;