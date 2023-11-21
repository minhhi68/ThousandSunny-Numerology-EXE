import React, { useState } from 'react'
import Style from './login.module.scss'
import classNames from 'classnames'
import logo from './../../assets/images/logo.png'
import astroData from '../../mock-data/data.json'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [name, setName] = useState("");
    const [pw, setPw] = useState("");

    const navigate = useNavigate();

    const handleLogin = () => {

        const user = astroData.ACCOUNT.find((account) => account.userName === name && account.password === pw);

        if (user) {
            localStorage.setItem("user", JSON.stringify({ id: user.id, name: user.userName }))
            navigate("/")
        } else {
            // Login failed
            alert("Please check username and password again!")
        }
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handlePwChange = (e) => {
        setPw(e.target.value);
    }


    return (
        <div className={classNames('d-flex col-12', Style.body)}>
            <div className='col-7 justify-content-between d-flex'>
                <img src={logo} alt='logo' className={Style.img} />
                <div className={Style.container}>
                    <h2 className='text-center mt-4'>ĐĂNG NHẬP</h2>
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
                        <button className={classNames(Style.button)} onClick={handleLogin}>
                            ĐĂNG NHẬP
                        </button>
                    </div>
                    <div className='mt-5 d-flex'>
                        <hr />
                        <span> HOẶC </span>
                        <hr />
                    </div>
                    <div className={classNames(Style.textSmall)}>Bạn không có tài khoản?  <a href='/register'>Đăng Ký</a></div>
                </div>
            </div>
        </div>
    )
}

export default Login
