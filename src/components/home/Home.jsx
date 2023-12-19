import { useState, useRef } from "react";
import "./Home.scss";
import React from "react";
import { useAuth } from "../auth/Auth";
import { useClickOutside } from "../click/useClickOutside";
import DropdownMenu from "../dropdown_menu/DropdownMenu";
import "../dropdown_menu/DropdownMenu.scss";

const Home = () => {
    const [toggle, setToggle] = useState(1);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    useClickOutside(menuRef, () => {
        if (isMenuOpen) setTimeout(() => setMenuOpen(false), 1);
    });

    function updateToggle(id) {
        setToggle(id);
    }

    const auth = useAuth();

    return (
        <div className="home">
            <div className="home-up">
                <div className="home-image">
                    <div className="header">
                        <div className="icon-container">
                            <a className="logo" href="/">
                                <img src={require('../../img/Frame 9.png')} class="logo" alt=""></img>
                            </a>
                        </div>
                        <div className="nav-container">
                            {
                                <DropdownMenu />
                            }

                            <ul className="main-nav-container">
                                <li className="nav-item">
                                    <a href="/">
                                    <span className="menu-icon">
                                        Главная
                                    </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/tarifs">
                                    <span className="menu-icon">
                                        Тарифы
                                    </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/contacts">
                                    <span className="menu-icon">
                                        Контакты
                                    </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/faq">
                                    <span className="menu-icon">
                                        FAQ
                                    </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="slogan">
                        <a href="/tarifs" className="slogan-text">Будь анонимным</a>
                    </div>
                </div>
            </div>

            <div className="options">
                <div className="carousel">
                    <div className="inner-carousel">
                        <img src={require("../../img/Frame 12.png")} alt=""></img>
                        <img src={require("../../img/Frame 13.png")} alt=""></img>
                        <img src={require("../../img/Frame 16.png")} alt=""></img>
                        <img src={require("../../img/Frame 17.png")} alt=""></img>
                        <img src={require("../../img/Frame 18.png")} alt=""></img>
                        <img src={require("../../img/Frame 19.png")} alt=""></img>
                        <img src={require("../../img/Frame 20.png")} alt=""></img>
                        <img src={require("../../img/Frame 21.png")} alt=""></img>
                    </div>
                    <div className="inner-carousel">
                        <img src={require("../../img/Frame 12.png")} alt=""></img>
                        <img src={require("../../img/Frame 13.png")} alt=""></img>
                        <img src={require("../../img/Frame 16.png")} alt=""></img>
                        <img src={require("../../img/Frame 17.png")} alt=""></img>
                        <img src={require("../../img/Frame 18.png")} alt=""></img>
                        <img src={require("../../img/Frame 19.png")} alt=""></img>
                        <img src={require("../../img/Frame 20.png")} alt=""></img>
                        <img src={require("../../img/Frame 21.png")} alt=""></img>
                    </div>
                    <div className="inner-carousel">
                        <img src={require("../../img/Frame 12.png")} alt=""></img>
                        <img src={require("../../img/Frame 13.png")} alt=""></img>
                        <img src={require("../../img/Frame 16.png")} alt=""></img>
                        <img src={require("../../img/Frame 17.png")} alt=""></img>
                        <img src={require("../../img/Frame 18.png")} alt=""></img>
                        <img src={require("../../img/Frame 19.png")} alt=""></img>
                        <img src={require("../../img/Frame 20.png")} alt=""></img>
                        <img src={require("../../img/Frame 21.png")} alt=""></img>
                    </div>
                </div>
            </div>


            <div className="tarifs-container">
                <div className="title">
                    <a href="/tarifs" className="title-text">Наши предложения</a>
                </div>


                <ul className="tarifs-tabs">
                    <li className={toggle === 1 ? "active-tarif-tab junior-tab" : "tarif-tab junior-tab"} onClick={()=>updateToggle(1)}>Junior</li>
                    <li className={toggle === 2 ? "active-tarif-tab middle-tab" : "tarif-tab jmiddle-tab"} onClick={()=>updateToggle(2)}>Middle</li>
                    <li className={toggle === 3 ? "active-tarif-tab senior-tab" : "tarif-tab senior-tab"} onClick={()=>updateToggle(3)}>Senior</li>
                </ul>


                <div className={toggle === 1 ? "tarifs-items-container" : "items-container"}>
                    <div className="tarif-item">
                        <a className="tarif-headline">
                            5 прокси
                        </a>

                        <div className="price-box">
                            <span className="price-amount">₽300</span>
                            <span className="period">в месяц</span>
                        </div>

                        <div className="features">
                            <ul className="features-list">
                                <li className="feature-item">Протоколы HTTP/SOCKS5</li>
                                <li className="feature-item feature-item-not-first">Скорость 100 mb/s</li>
                                <li className="feature-item feature-item-not-first">Страна: Россия</li>
                            </ul>
                        </div>

                        <submit className="buy-tarif">
                            <span className="button-text">Купить</span>
                        </submit>
                    </div>

                    <div className="tarif-item">
                        <a className="tarif-headline">
                            10 прокси
                        </a>

                        <div className="price-box">
                            <span className="price-amount">₽500</span>
                            <span className="period">в месяц</span>
                        </div>

                        <div className="features">
                            <ul className="features-list">
                                <li className="feature-item">Протоколы HTTP/SOCKS5</li>
                                <li className="feature-item feature-item-not-first">Скорость 100 mb/s</li>
                                <li className="feature-item feature-item-not-first">Страна: Россия</li>
                            </ul>
                        </div>

                        <submit className="buy-tarif">
                            <span className="button-text">Купить</span>
                        </submit>
                    </div>

                    <div className="tarif-item">
                        <a className="tarif-headline">
                            20 прокси
                        </a>

                        <div className="price-box">
                            <span className="price-amount">₽900</span>
                            <span className="period">в месяц</span>
                        </div>

                        <div className="features">
                            <ul className="features-list">
                                <li className="feature-item">Протоколы HTTP/SOCKS5</li>
                                <li className="feature-item feature-item-not-first">Скорость 100 mb/s</li>
                                <li className="feature-item feature-item-not-first">Страна: Россия</li>
                            </ul>
                        </div>

                        <submit className="buy-tarif">
                            <span className="button-text">Купить</span>
                        </submit>
                    </div>
                </div>

                <div className={toggle === 2 ? "tarifs-items-container" : "items-container"}>
                    <div className="tarif-item">
                        <a className="tarif-headline">
                            5 прокси
                        </a>

                        <div className="price-box">
                            <span className="price-amount">₽400</span>
                            <span className="period">в месяц</span>
                        </div>

                        <div className="features">
                            <ul className="features-list">
                                <li className="feature-item">Протоколы HTTP/SOCKS5</li>
                                <li className="feature-item feature-item-not-first">Скорость 100 mb/s</li>
                                <li className="feature-item feature-item-not-first">Страна: Россия</li>
                                <li className="feature-item feature-item-not-first">Смена TCP отпечатка</li>
                            </ul>
                        </div>

                        <submit className="buy-tarif">
                            <span className="button-text">Купить</span>
                        </submit>
                    </div>

                    <div className="tarif-item">
                        <a className="tarif-headline">
                            10 прокси
                        </a>

                        <div className="price-box">
                            <span className="price-amount">₽700</span>
                            <span className="period">в месяц</span>
                        </div>

                        <div className="features">
                            <ul className="features-list">
                                <li className="feature-item">Протоколы HTTP/SOCKS5</li>
                                <li className="feature-item feature-item-not-first">Скорость 100 mb/s</li>
                                <li className="feature-item feature-item-not-first">Страна: Россия</li>
                                <li className="feature-item feature-item-not-first">Смена TCP отпечатка</li>
                            </ul>
                        </div>

                        <submit className="buy-tarif">
                            <span className="button-text">Купить</span>
                        </submit>
                    </div>

                    <div className="tarif-item">
                        <a className="tarif-headline">
                            20 прокси
                        </a>

                        <div className="price-box">
                            <span className="price-amount">₽1300</span>
                            <span className="period">в месяц</span>
                        </div>

                        <div className="features">
                            <ul className="features-list">
                                <li className="feature-item">Протоколы HTTP/SOCKS5</li>
                                <li className="feature-item feature-item-not-first">Скорость 100 mb/s</li>
                                <li className="feature-item feature-item-not-first">Страна: Россия</li>
                                <li className="feature-item feature-item-not-first">Смена TCP отпечатка</li>
                            </ul>
                        </div>

                        <submit className="buy-tarif">
                            <span className="button-text">Купить</span>
                        </submit>
                    </div>
                </div>

                <div className={toggle === 3 ? "tarifs-items-container" : "items-container"}>
                    <div className="tarif-item">
                        <a className="tarif-headline">
                            5 прокси
                        </a>


                        <div className="price-box">
                            <span className="price-amount">₽900</span>
                            <span className="period">в месяц</span>
                        </div>

                        <div className="features">
                            <ul className="features-list">
                                <li className="feature-item">Протоколы HTTP/SOCKS5</li>
                                <li className="feature-item feature-item-not-first">Скорость 100 mb/s</li>
                                <li className="feature-item feature-item-not-first">Страна: Россия</li>
                                <li className="feature-item feature-item-not-first">Смена TCP отпечатка</li>
                                <li className="feature-item feature-item-not-first">Смена страны</li>
                            </ul>
                        </div>

                        <submit className="buy-tarif">
                            <span className="button-text">Купить</span>
                        </submit>
                    </div>

                    <div className="tarif-item">
                        <a className="tarif-headline">
                            10 прокси
                        </a>

                        <div className="price-box">
                            <span className="price-amount">₽1700</span>   
                            <span className="period">в месяц</span> 
                        </div>

                        <div className="features">
                            <ul className="features-list">
                                <li className="feature-item">Протоколы HTTP/SOCKS5</li>
                                <li className="feature-item feature-item-not-first">Скорость 100 mb/s</li>
                                <li className="feature-item feature-item-not-first">Страна: Россия</li>
                                <li className="feature-item feature-item-not-first">Смена TCP отпечатка</li>
                                <li className="feature-item feature-item-not-first">Смена страны</li>
                            </ul>
                        </div>

                        <submit className="buy-tarif">
                            <span className="button-text">Купить</span>
                        </submit>
                    </div>

                    <div className="tarif-item">
                        <a className="tarif-headline">
                            20 прокси
                        </a>

                        <div className="price-box">
                            <span className="price-amount">₽3300</span>
                            <span className="period">в месяц</span>
                        </div>

                        <div className="features">
                            <ul className="features-list">
                                <li className="feature-item">Протоколы HTTP/SOCKS5</li>
                                <li className="feature-item feature-item-not-first">Скорость 100 mb/s</li>
                                <li className="feature-item feature-item-not-first">Страна: Россия</li>
                                <li className="feature-item feature-item-not-first">Смена TCP отпечатка</li>
                                <li className="feature-item feature-item-not-first">Смена страны</li>
                            </ul>
                        </div>

                        <submit className="buy-tarif">
                            <span className="button-text">Купить</span>
                        </submit>
                    </div>
                </div>
                
            </div>
            
            <div className="description">
                <a className="description-title" href="/contacts">
                    Кто мы?
                </a>

                <div className="description-text-container">
                    <div className="text">
                        <p>Добро пожаловать на наш сайт по продаже мобильных проксей! Мы рады предложить вам широкий выбор мобильных прокси-серверов, которые помогут вам обеспечить безопасность, анонимность и надежность приходящих и исходящих соединений. </p>

                        <p> Одной из ключевых особенностей наших мобильных прокси является высокий уровень анонимности. Подключаясь к сети через наш сервис, ваш реальный IP-адрес будет скрыт. Это обеспечивает надежность и конфиденциальность ваших действий в Интернете, особенно важно, если вы занимаетесь бизнесом или заботитесь о защите своих личных данных. </p>

                        <p>Еще одно преимущество наших мобильных прокси состоит в их географической гибкости. Мы предлагаем прокси-сервера в различных странах, что позволяет вам выбрать определенное местоположение, которое соответствует вашим требованиям. Это особенно полезно для тех, кто занимается веб-скрапингом, анализом данных или тестированием. Вы сможете эмулировать различные местоположения, получать доступ к контенту, который доступен только в определенных странах, или проверять работоспособность веб-сайтов из разных уголков мира. </p>

                        <p>Наша команда стремится обеспечить высокую стабильность и скорость работы наших мобильных прокси. Мы регулярно обновляем и поддерживаем серверное оборудование, чтобы гарантировать, что вы получаете наилучший опыт использования. Кроме того, мы предлагаем различные планы тарифов, чтобы удовлетворить потребности как отдельных пользователей, так и предприятий. </p>

                        <p>Если вы ищете мобильные прокси, которые обеспечат безопасность, анонимность и надежность в Интернете, то вы попали по адресу. Покупайте мобильные прокси у нас и наслаждайтесь надежным и комфортным Интернет-соединением уже сегодня! </p>
                    </div>
                </div>
            </div>

            {/* <footer>
                <div className="link-container">
                    <a href="https://t.me/dvinyatinfedor" className="tgLink">
                        <img className="icon"></img>
                    </a>

                    <a href="mailto:rkuzin.2003@gmail.com" className="emailLink">
                        <img className="icon"></img>
                    </a>

                    <a href="https://vk.com/dvinyatinfedor" className="vkLink">
                        <img className="icon"></img>
                    </a>
                </div>
            </footer> */}
        </div>
    );
}

export default Home;