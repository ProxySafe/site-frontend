import { useState, useRef } from "react";
import React from "react";
import { Logout, useAuth } from "../auth/Auth";
import {
    BsFillGearFill,
    BsBoxArrowRight,
    BsDeviceHdd,
} from "react-icons/bs";
import { useClickOutside } from "../click/useClickOutside";


export const DropdownMenu = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    useClickOutside(menuRef, () => {
        if (isMenuOpen) setTimeout(() => setMenuOpen(false), 1);
    });
    const auth = useAuth();

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
                <div className="menu">
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
                            <a onClick={Logout}>Выйти</a>
                            </div>
                        </li>
                    </ul>
                </div>
            )
    );
}

export default DropdownMenu;