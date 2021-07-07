import * as React from 'react'

const BuffScore = () => {
    
    return (
        <>
            <div className = "buffScoreWrapBox">
                <div className = "buffScoreTitleBox">
                    <h3>버프력 컷 설정</h3>
                </div>
                <div className = "buffScoreContentBox">
                    <div className = "seraphimBufferBox">
                        <div className = "seraphimLabel">세라핌 : </div>
                        <input className = "seraphimBuffCut" type = "text" />
                    </div>
                    <div className = "saintBufferBox">
                        <div className = "saintLabel">세인트 : </div>
                        <input className = "saintBuffCut" type = "text" />
                    </div>
                    <div className = "hecateBox">
                        <div className = "hecateLabel">헤카테 : </div>
                        <input className = "hecateBuffCut" type = "text" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default BuffScore;