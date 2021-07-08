import * as React from 'react';

const Talisman = () => {
    return (
        <>
            <div className = "talismanWrapBox">
                <div className = "talismanTitleBox">
                    <h4>탈리스만 컷 설정</h4>
                </div>
                <div className = "talismanContentBox">
                    <div className = "talismanAllCapelaLabel">모든 카펠라 탈리스만 체크 여부 : </div>
                    <input className = "checkAllCapelaTalisman" type = "checkbox" />
                </div>
            </div>
        </>
    )
}

export default Talisman;