import * as React from 'react';
import { useState } from 'react';

type magicProps = {
    magicSubmit: (magic : {weapon : number, shirt: number, accessory: number, auxiliary: number, magicStone: number, earling: number}) => void
}

const EquipmentMagic = ({magicSubmit}: magicProps) => {

    const [powerWeapon, setPowerWeapon] = useState(0)

    const onWeaponChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPowerWeapon((e.target as HTMLInputElement).valueAsNumber);
    }

    const [powerShirt, setPowerShirt] = useState(0);

    const onShirtChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPowerShirt((e.target as HTMLInputElement).valueAsNumber);
    }

    const [powerAccessory, setPowerAccessory] = useState(0);

    const onAccessoryChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPowerAccessory((e.target as HTMLInputElement).valueAsNumber);
    }

    const [powerAuxiliary, setPowerAuxiliary] = useState(0);

    const onAuxiliaryChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPowerAuxiliary((e.target as HTMLInputElement).valueAsNumber);
    }

    const [powerMagicStone, setPowerMagicStone] = useState(0);

    const onMagicStoneChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPowerMagicStone((e.target as HTMLInputElement).valueAsNumber);
    }

    const [powerEarling, setPowerEarling] = useState(0);

    const onEarlingChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPowerEarling((e.target as HTMLInputElement).valueAsNumber);
    }


    return (
        <>
            <div className = "equipmentMagicWrapBox">
                <div className = "equipmentMagicTitleBox">
                    <h4>장비 마부 컷 설정</h4>
                </div>
                <div className = "equipmentMagicContentBox">
                    <div className = "weaponBox">
                        <div className = "weaponLabel">무기 : </div>
                        <input className = "checkWeaponMagic" type = "number" value = {powerWeapon} onChange = {onWeaponChange}/>
                        <div className = "weaponReinforce">12강 여부</div>
                        <input className = "checkWeaponReinforce" type = "checkbox" />
                        <div className = "weaponSuperDegree">마칼작 여부</div>
                        <input className = "checkWeaponSuperDegree" type = "checkbox" />
                    </div>
                    <div className = "shirtAndPantsBox">
                        <div className = "shirtAndPantsLabel">상하의 : </div>
                        <div className = "shirtAndPantsStat">스텟 수치 : </div>
                        <input className = "checkShirtAndPantsStat" type = "number" value = {powerShirt} onChange = {onShirtChange} />
                        <div className = "shirtAndPantsPower">공격력 수치 : </div>
                        <input className = "checkShirtAndPantsPower" type = "text" />
                    </div>
                    <div className = "accessoriesBox">
                        <div className = "accessoriesLabel">악세사리 : </div>
                        <input className = "checkAccessories" type = "number" value = {powerAccessory} onChange = {onAccessoryChange} />
                    </div>
                    <div className = "auxiliaryBox">
                        <div className = "auxiliaryLabel">보조장비 : </div>
                        <input className = "checkAuxiliary" type = "number" value = {powerAuxiliary} onChange = {onAuxiliaryChange} />
                    </div>
                    <div className = "magicStoneBox">
                        <div className = "maginStoneLabel">마법석 : </div>
                        <input className = "checkMagicStone" type = "number" value = {powerMagicStone} onChange = {onMagicStoneChange} />
                    </div>
                    <div className = "earlingBox">
                        <div className = "earlingLabel">귀걸이 : </div>
                        <input className = "checkEarling" type = "number" value = {powerEarling} onChange = {onEarlingChange} />
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