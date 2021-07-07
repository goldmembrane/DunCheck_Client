import * as React from 'react';

const Avatar = () => {
    return (
        <>
            <div className = "avatarWrapBox">
                <div className = "avatarTitleBox">
                    <h4>아바타 컷 설정</h4>
                </div>
                <div className = "avatarContentBox">
                    <div className = "checkDealPlatinumBox">
                        <div className = "dealPlatinumLabel">딜 플티 여부 : </div>
                        <input className = "checkDealPlatinum" type = "checkbox" />
                    </div>
                    <div className = "checkResistDarkBox">
                        <div className = "resistDarkLabel">암속성 저항 수치 만족 여부 : </div>
                        <input className = "checkResistDark" type = "checkbox" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Avatar;