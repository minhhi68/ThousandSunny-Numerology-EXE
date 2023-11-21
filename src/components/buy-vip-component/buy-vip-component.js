import React, { useState } from 'react'
import Style from './buy-vip-component.module.scss'
import astroData from '../../mock-data/data.json';
import classNames from 'classnames';
import {
    useNavigate,
} from 'react-router-dom';

const BuyVipComponent = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const navigate = useNavigate();

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handlePaymentClick = () => {
        navigate("/payment-confirm", { state: selectedOption })
    }

    const mockData = astroData.VIP_PACKAGE_DATA;

    return (
        <div className={Style.body}>
            <h1>CHỌN GÓI VIP</h1>
            <div className='row d-flex justify-content-center'>
                {mockData.map((item) => (
                    <label key={item.id} className={classNames(Style.item, 'col-4 m-4')}>
                        <div className='d-flex'>
                            <input
                                type="radio"
                                value={item.id}
                                checked={selectedOption === item.id.toString()}
                                onChange={handleOptionChange}
                            />
                            <div className={Style.subRightItem}>
                                <div>{item.type}</div>
                                <div>{item.price}</div>
                                <div>{item.priceAfterDiscount}</div>
                            </div>
                        </div>
                    </label>
                ))}
                <div className='col-4 m-4 d-flex justify-content-center'>
                    <div>
                        <button className={Style.button} onClick={handlePaymentClick}>MUA GÓI VIP</button><br />
                        <button className={Style.button} onClick={() => navigate(-1)}>QUAY LẠI</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyVipComponent
