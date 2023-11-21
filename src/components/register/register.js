import React, { useState } from 'react'
import Style from './register.module.scss'
import classNames from 'classnames'
import logo from './../../assets/images/logo.png'
import accountsData from '../../mock-data/data'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Register = () => {
    const [accountList, setAccountList] = useState(accountsData.ACCOUNT);
    const [name, setName] = useState("");
    const [pw, setPw] = useState("");
    const navigate = useNavigate();


    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handlePwChange = (e) => {
        setPw(e.target.value);
    }

    const handleRegister = async () => {
        const newAccount = {
            id: accountList.length + 1,
            userName: name,
            password: pw,
            vipId: 0
        };

        try {
            // Make an HTTP POST request to your server's /api/register endpoint
            const response = await axios.post('http://localhost:3001/api/register', newAccount);

            // Check if the registration was successful
            if (response.status === 200) {
                // Update the component's state to trigger a re-render
                setAccountList([...accountsData.ACCOUNT]);

                // Navigate to the login page
                navigate('/login');
            } else {
                // Handle registration error, e.g., show an error message
                console.error('Registration failed');
            }
        } catch (error) {
            // Handle any network or request error
            console.error('Error registering account', error);
        }
    };


    return (
        <div className={classNames('d-flex col-12', Style.body)}>
            <div className='col-7 justify-content-between d-flex'>
                <img src={logo} alt='logo' className={Style.img} />
                <div className={Style.container}>
                    <h2 className='text-center mt-4'>ĐĂNG KÝ</h2>
                    <div className='m-4'>
                        <label>EMAIL/SỐ ĐIỆN THOẠI</label><br />
                        <input type='text' className={classNames('mt-2', Style.input)} value={name}
                            onChange={handleNameChange} />
                    </div>
                    <div className='m-4'>
                        <label>Mật Khẩu</label><br />
                        <input type='password' className={classNames('mt-2', Style.input)} value={pw}
                            onChange={handlePwChange} />
                    </div>
                    <div className='text-center mt-5'>
                        <button className={classNames(Style.button)} onClick={handleRegister}>
                            ĐĂNG KÝ
                        </button>
                    </div>
                    <div className='mt-5 d-flex'>
                        <hr />
                        <span> HOẶC </span>
                        <hr />
                    </div>
                    <div className={classNames(Style.textSmall)}>Quay lại đăng nhập <a href='/login'>Đăng nhập</a></div>
                </div>
            </div>
        </div>
    )
}

export default Register
