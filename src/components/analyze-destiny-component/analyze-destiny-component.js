import React from 'react'
import Style from './analyze-destiny-component.module.scss'
import classNames from 'classnames';

const AnalyzeDestinyComponent = () => {
    return (
        <div className={Style.body}>
            <form method="POST">
                <div className='d-flex col-12'>
                    <div className='m-3'>
                        <label className="text-uppercase">Họ và tên</label><br />
                        <input type="text" className={classNames('rounded-5 mt-2 p-3', Style.input)} />
                        <br />
                        <label className="text-uppercase mt-5">TÊN THƯỜNG DÙNG</label><br />
                        <input type="text" className={classNames('rounded-5 mt-2 p-3', Style.input)} />
                        <br />
                        <div className="d-flex justify-content-between mt-5">
                            <div>
                                <label className="text-uppercase">Ngày Sinh</label><br />
                                <input type="date" className={classNames('rounded-5 mt-2 p-3 w-100', Style.input)} />
                            </div>
                            <div className={classNames(Style.gender)}>
                                <label className="text-uppercase">Giới tính</label><br />
                                <input type="text" className={classNames('rounded-5 mt-2 p-3 w-100', Style.input)} />
                            </div>
                        </div>

                    </div>
                    <div className='m-3'>
                        <label className="text-uppercase">Họ và tên người ấy</label><br />
                        <input type="text" className={classNames('rounded-5 mt-2 p-3', Style.input)} />
                        <br />
                        <label className="text-uppercase mt-5">Ngày tháng năm sinh</label><br />
                        <input type="date" className={classNames('rounded-5 mt-2 p-3', Style.input)} />
                        <br />
                    </div>
                </div>
                <div className='text-center'>
                    <input type="checkbox" className={classNames('mt-5', Style.checkbox)} /> <span className="ml-3">Xem tương hợp tình duyên, hôn nhân</span>
                </div>
                <div className="mt-5 d-flex justify-content-center">
                    <div className="w-75 d-flex justify-content-between">
                        <button className="btn-light btn w-25">TRA CỨU</button>
                        <button className="btn btn-warning w-25">MUA VIP</button>
                    </div>
                </div>
            </form >
        </div >
    );
}

export default AnalyzeDestinyComponent
