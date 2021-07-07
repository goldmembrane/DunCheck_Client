import * as React from 'react';
import { Link, Route } from 'react-router-dom';
import EquipmentDetail from './EquipmentDetail';


const Equipment = () => {
    return (
        <>
            <div className = "equipmentWrapBox">
                <div className = "equipmentTitleBox">
                    <h3>장비 컷 설정</h3>
                </div>
                <nav>
                    <ul>
                        <li className = "cutOptions"><Link to = '/setting/equipment/cutequipment'>장비</Link></li>
                        <li className = "cutOptions"><Link to = '/setting/equipment/cutavatar'>아바타</Link></li>
                        <li className = "cutOptions"><Link to = '/setting/equipment/cutcreature'>크리쳐</Link></li>
                        <li className = "cutOptions"><Link to = '/setting/equipment/cuttalisman'>탈리스만</Link></li>
                    </ul>
                </nav>
            </div>
            <Route path = '/setting/equipment' exact = {true} />
            <Route path = '/setting/equipment/:cut' component = {EquipmentDetail} />
        </>
    )
}

export default Equipment;