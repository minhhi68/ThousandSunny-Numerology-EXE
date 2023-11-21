import React, { useEffect, useState } from 'react'
import Style from './analyze-general-component.module.scss'
import astroData from '../../mock-data/data.json'
import { useLocation, useNavigate } from 'react-router-dom'

const AnalyzeGeneralComponent = () => {
    const navigate = useNavigate();
    const data = astroData.astroData;
    const [randomObject, setRandomObject] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const selectedObject = data[randomIndex];
        setRandomObject(selectedObject);
    }, [location.state.dob])

    const handleReadClick = () => {
        navigate('/analyze-detail', { state: randomObject });
    }

    return (
        randomObject === null ? <></> :
            <div className={Style.body}>
                <div>
                    <span>Họ và tên: {location.state.name}</span><br />
                    <span>Ngày Sinh: {location.state.dob}</span>
                </div>
                <div className='m-5'><strong>Số Chủ Đạo</strong></div>
                <div className={Style.mainNumber}>
                    {randomObject.mainNumber}
                </div>
                <div>
                    <strong> Cung hoàng đạo: {randomObject.zodiac}</strong>
                </div>
                <div className={Style.content}>
                    <div dangerouslySetInnerHTML={{ __html: randomObject.generalInformation }} />
                </div>
                <button className="btn-light btn w-25 m-3" onClick={handleReadClick}>Xem Tiếp</button>
            </div>
    )
}

export default AnalyzeGeneralComponent
