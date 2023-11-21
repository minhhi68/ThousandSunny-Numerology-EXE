import React, { useState } from "react";
import Style from './analyze-component.module.scss'
import classnames from 'classnames'
import { useNavigate } from "react-router-dom";

export const AnalyzeComponent = () => {
    const navigation = useNavigate();
    const [name, setName] = useState("");
    const [dob, setDob] = useState(null);

    const handleResearch = () => {
        if (name && dob) {
            navigation('/analyze-general', { state: { name: name, dob: dob } });
        } else {
            alert("please fill all the fields")
        }
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleDobChange = (e) => {
        setDob(e.target.value);
    }

    const handleBuyVip = () => {
        navigation("/buy-vip")
    }

    return (
        <div className={Style.body}>
            <form method="POST">
                <label className="text-uppercase">Họ và tên</label><br />
                <input type="text" className={classnames('rounded-5 mt-2 p-3', Style.input)} value={name}
                    onChange={handleNameChange}
                    required />
                <br />
                <label className="text-uppercase mt-5">TÊN THƯỜNG DÙNG (VD: NHÍM, PIN...)</label><br />
                <input type="text" className={classnames('rounded-5 mt-2 p-3', Style.input)} />
                <br />
                <div className="d-flex justify-content-between mt-5">
                    <div>
                        <label className="text-uppercase">Ngày Sinh</label><br />
                        <input type="date" className={classnames('rounded-5 mt-2 p-3 w-100', Style.input)}
                            value={dob}
                            onChange={handleDobChange}
                            required
                        />
                    </div>
                    <div>
                        <label className="text-uppercase">Giới tính</label><br />
                        <input type="text" className={classnames('rounded-5 mt-2 p-3 w-100', Style.input)} />
                    </div>
                </div>
                <input type="checkbox" className={classnames('mt-5', Style.checkbox)} /> <span className="ml-3">Xem tương hợp tình duyên, hôn nhân</span>
                <div className="mt-5 d-flex justify-content-center">
                    <div className="w-75 d-flex justify-content-between">
                        <button className="btn-light btn w-25" onClick={handleResearch}>TRA CỨU</button>
                        <button className="btn btn-warning w-25" onClick={handleBuyVip}>MUA VIP</button>
                    </div>
                </div>
            </form >
        </div >
    );
};
