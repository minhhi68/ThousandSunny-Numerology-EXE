import classNames from 'classnames'
import React from 'react'
import Style from './analyze-complete-component.module.scss'

const AnalyzeCompleteComponent = () => {

    const handleGeneralResearch = () => {
        window.location.href = "/analyze-general"
    }

    return (
        <div className={classNames(Style.body)}>
            <h1>Phân tích đã xong</h1>
            <div className={classNames(Style.subContainer)}>
                <div>
                    CÙNG XEM NGÀY SINH CỦA MÌNH ĐẶC BIỆT NHƯ THẾ NÀO NHÉ!
                </div>
            </div>
            <button className='btn btn-secondary mt-5' onClick={handleGeneralResearch}>Xem</button>
        </div>
    )
}

export default AnalyzeCompleteComponent
