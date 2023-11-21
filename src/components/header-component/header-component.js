import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import Style from './header-component.module.scss'

const HeaderComponent = () => {

    const [user, setUser] = useState({})

    const url = window.location.pathname

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")))
    }, [])

    const handleLogout = () => {
        localStorage.removeItem("user")
        window.location.href = "/login"
    }

    return (
        url === '/login' ? <></> :
            <div className={classNames('text-end p-2', Style.body)}>
                <div className=''>
                    {user === null ?
                        <a href='/login' style={{ textDecoration: 'none' }}>Login</a>
                        :
                        (
                            <span style={{ color: 'white' }}>Hello {user?.name}, <button className={Style.linkButton} onClick={handleLogout}>Logout</button></span>
                        )
                    }
                </div>
            </div>
    )
}

export default HeaderComponent
