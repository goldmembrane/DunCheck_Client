import * as React from 'react';

const EquipmentMagic = () => {
    return (
        <>
            <div className = "equipmentMagicWrapBox">
                <div className = "equipmentMagicTitleBox">
                    <h4>장비 마부 컷 설정</h4>
                </div>
                <div className = "equipmentMagicContentBox">
                    <div className = "weaponBox">
                        <div className = "weaponLabel">무기 : </div>
                        <input className = "checkWeaponMagic" type = "text" />
                        <div className = "weaponReinforce">12강 여부</div>
                        <input className = "checkWeaponReinforce" type = "checkbox" />
                        <div className = "weaponSuperDegree">마칼작 여부</div>
                        <input className = "checkWeaponSuperDegree" type = "checkbox" />
                    </div>
                    <div className = "shirtAndPantsBox">
                        <div className = "shirtAndPantsLabel">상하의 : </div>
                        <div className = "shirtAndPantsStat">스텟 수치 : </div>
                        <input className = "checkShirtAndPantsStat" type = "text" />
                        <div className = "shirtAndPantsPower">공격력 수치 : </div>
                        <input className = "checkShirtAndPantsPower" type = "text" />
                    </div>
                    <div className = "accessoriesBox">
                        <div className = "accessoriesLabel">악세사리 : </div>
                        <input className = "checkAccessories" type = "text" />
                    </div>
                    <div className = "auxiliaryBox">
                        <div className = "auxiliaryLabel">보조장비 : </div>
                        <input className = "checkAuxiliary" type = "text" />
                    </div>
                    <div className = "magicStoneBox">
                        <div className = "maginStoneLabel">마법석 : </div>
                        <input className = "checkMagicStone" type = "text" />
                    </div>
                    <div className = "earlingBox">
                        <div className = "earlingLabel">귀걸이 : </div>
                        <input className = "checkEarling" type = "text" />
                    </div>
                    <div className = "fullCriticalBox">
                        <div className = "fullCriticalLabel">만크 여부 확인 : </div>
                        <input className = "checkFullCritical" type = "checkbox" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default EquipmentMagic;