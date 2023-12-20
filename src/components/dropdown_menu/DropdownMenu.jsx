import { useState, useRef, useEffect } from "react";
import React from "react";
import { getFingerprint, useAuth } from "../auth/Auth";
import {
    BsFillGearFill,
    BsBoxArrowRight,
    BsDeviceHdd,
} from "react-icons/bs";
import axios from 'axios';

export const DropdownMenu = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    let menuRef = useRef('');
    const onRef = (node) => {
        if (node) {
            menuRef.current = node;
        }
    };
    useEffect(() => {
        let handler = (e)=>{
            if (!menuRef.current.contains(e.target)) {
                console.log('hahaha ' + menuRef.current + ' ' + e.target);
                setMenuOpen(false);
                console.log(menuRef.current);
            }
        };

        document.addEventListener('mousedown', handler);
    });
    const auth = useAuth();

    const Logout = (e) => {
        console.log('event ' + e);
        e.preventDefault();
        const fingerprint = getFingerprint();
        var reqBody = {
            'access_token': localStorage.getItem('accessToken'),
            'os': fingerprint.OS,
            'fingerprint': fingerprint.Fingerprint,
            'user_agent': fingerprint.UserAgent
        }
    
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('user');
        axios.post('https://api.proxysafe.ru/auth/logout/', JSON.stringify(reqBody))
            .then(function(response) {
                const jsonData = response.data;
                if (jsonData.statusCode === 200) {
                    console.log('success!');
                }
            })
            .then(function (error) {
                console.log(error);
            })
        auth.logout();
    }
    

    return (    
            !auth.user ? (
                <div className="top-nav-container">
                    <div className="personal-account">
                        <img src={require('../../img/personal_account.png')} className="personal-account-img" alt=""></img>
                        <a href="/login" className="personal-account-link">Личный кабинет</a>
                        <img src={require('../../img/add_account.png')} className="add-personal-account-img" alt=""></img>
                        <a href="/register" className="add-personal-account-link">Зарегистрироваться</a>
                    </div>
                </div>
            ) : (
                <div className="menu" ref={onRef}>
                    <div className="name-with-icon">
                        <img src={require('../../img/personal_account.png')} className="personal-account-img" alt=""></img>
                        <a className="personal-account-link" onClick={()=> setMenuOpen(!isMenuOpen)} >{auth.user}</a>
                    </div>
                    <ul className={isMenuOpen ? "menu__list__active": "menu__list"}>
                        <li className="menu__item">
                            <div>
                                <BsDeviceHdd className="icon"/>
                                <a href="/my_proxies">Мои прокси</a>
                            </div>
                        </li>
                        <li className="menu__item">
                            <div>
                            <BsFillGearFill className="icon"/>
                            <a href="/profile_settings">Настройки профиля</a>
                            </div>
                        </li>
                        <li className="menu__item">
                            <div>
                            <BsBoxArrowRight className="icon"/>
                            <a href="/" onClick={Logout}>Выйти</a>
                            </div>
                        </li>
                    </ul>
                </div>
            )
    );
}

export default DropdownMenu;