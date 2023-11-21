import React, { useEffect, useState } from 'react'
import Style from './payment-confirm-component.module.scss'
import classNames from 'classnames'
import { useLocation, useNavigate } from 'react-router-dom';
import checkMark from './../../assets/images/tick.png'
import astroData from '../../mock-data/data.json';

const PaymentConfirmComponent = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [user, setUser] = useState({});
    const [isPayed, setPayed] = useState(false)
    const location = useLocation();
    const [item, setItem] = useState({});

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handlePaymentClick = () => {
        navigate('/checkout', { state: location.state })
    }

    const navigate = useNavigate();

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")))
    }, [])

    useEffect(() => {
        const tmp = astroData.VIP_PACKAGE_DATA.find(i => i.id == location.state);
        setItem(tmp)
    }, [location.state, item])

    useEffect(() => {
        var isPayedParam = location.state.isPayed
        setPayed(isPayedParam);
    }, [location.state.isPayed, isPayed])

    return (
        item ? (
            <div className={Style.body}>

                <h1>Chi tiết yêu cầu</h1>
                <div className={classNames(Style.subContainer)}>
                    <h3>Thông Tin Khách Hàng</h3>
                    <div className='mt-5'>
                        <div><strong>Khách hàng:</strong> {user.name}</div>
                        {/* <div><strong>Ngày Sinh: </strong>{}</div> */}
                    </div>
                </div>
                <div className={classNames(Style.subContainer)}>
                    <h3>Gói Combo</h3>
                    <div className='mt-5 d-flex justify-content-between'>
                        <div><strong>Combo: </strong> {item?.type}</div>
                        <div>{item?.priceAfterDiscount}</div>
                    </div>
                </div>
                <div className={classNames(Style.subContainer)}>
                    <h3>Phương Thức Thanh Toán</h3>
                    <div className='mt-5'>
                        <label className='d-flex justify-content-between'>
                            Ví điện tử MOMO
                            <input type='radio'
                                checked={selectedOption === 'momo'}
                                value='momo'
                                onChange={handleOptionChange}
                            />
                        </label>
                        <br />
                        <label className='d-flex justify-content-between'>
                            Ví điện tử PAYPAL
                            <input type='radio'
                                checked={selectedOption === 'paypal'}
                                value='paypal'
                                onChange={handleOptionChange}
                            />
                        </label>
                    </div>
                </div>
                <div className='col-4 m-4 text-center'>

                    <button className={Style.button} onClick={handlePaymentClick}>MUA GÓI</button><br />
                    <button className={Style.button} onClick={() => navigate(-1)}>QUAY LẠI</button>
                </div>




            </div>
        ) : <>
            {isPayed && <div className={Style.body}>
                <h1>Đã thanh toán</h1>
                <div className={Style.paymented}>
                    <div className={Style.circleContainer}>
                        <div className={Style.checkmark}>
                            <img src={checkMark} alt='checkmark' />
                        </div>

                    </div>
                    <div className={classNames('col-7', Style.textBottom)}>
                        Chúng tôi sẽ gửi mã code vào email/số điện thoại bạn đã đăng kí/ đăng nhập. Vui lòng chờ trong giây lát!
                    </div>
                </div>
                <button className={Style.buttonComplete} onClick={() => navigate('/')}>HOME</button>
            </div>}
        </>
    )


}


export default PaymentConfirmComponent
