import * as React from 'react'
import { useState } from 'react';

type buffProps = {
    buffSubmit: (buff: {seraphim: number, saint: number, hecate: number}) => void
}

const BuffScore = ({buffSubmit}: buffProps) => {

    const [seraphimBuff, setSeraphimBuff] = useState(0);

    const [saintBuff, setSaintBuff] = useState(0);

    const [hecateBuff, setHecateBuff] = useState(0);

    const onSeraphimChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setSeraphimBuff((e.target as HTMLInputElement).valueAsNumber);
    }

    const onSaintChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setSaintBuff((e.target as HTMLInputElement).valueAsNumber);
    }

    const onHecateChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setHecateBuff((e.target as HTMLInputElement).valueAsNumber);
    }
    
    return (
        <>
            <div className = "buffScoreWrapBox">
                <div className = "buffScoreTitleBox">
                    <h3>버프력 컷 설정</h3>
                </div>
                <div className = "buffScoreContentBox">
                    <div className = "seraphimBufferBox">
                        <div className = "seraphimLabel">세라핌 : </div>
                        <input className = "seraphimBuffCut" type = "number" value = {seraphimBuff} onChange = {onSeraphimChange}/>
                    </div>
                    <div className = "saintBufferBox">
                        <div className = "saintLabel">세인트 : </div>
                        <input className = "saintBuffCut" type = "number" value = {saintBuff} onChange = {onSaintChange}/>
                    </div>
                    <div className = "hecateBox">
                        <div className = "hecateLabel">헤카테 : </div>
                        <input className = "hecateBuffCut" type = "number" value = {hecateBuff} onChange = {onHecateChange}/>
                    </div>
                </div>

            </div>
        </>
    )
}

export default BuffScore;