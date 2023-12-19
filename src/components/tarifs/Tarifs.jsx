import "./Tarifs.scss";
import { useState, useRef } from "react";
import { useClickOutside } from "../click/useClickOutside";
import {useAuth} from "../auth/Auth";
import DropdownMenu from "../dropdown_menu/DropdownMenu";
import "../dropdown_menu/DropdownMenu.scss";

const Tarifs = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    useClickOutside(menuRef, () => {
        if (isMenuOpen) setTimeout(() => setMenuOpen(false), 1);
    });


    const auth = useAuth();
    console.log('auth.user ' + auth.user);

    return (
        <div className="tarifs-home">
            <div className="tarifs-home-up">
                <div className="tarifs-home-image">
                    <div className="header">
                        <div className="icon-container">
                            <a class="logo" href="/">
                                <img src={require('../../img/Frame 9.png')} className="logo" alt=""></img>
                            </a>
                        </div>
                        <div className="nav-container">
                        
                        <DropdownMenu />
                        
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

                    <div className="section-name">
                        <a href="/tarifs" className="name-text">Тарифы</a>
                    </div>
                </div>
            </div>

            <div className="tarifs-container">
                <div className="tarif-item">
                    <a className="tarif-headline" href="/#tarifs-container">
                        Junior
                    </a>

                    
                    <div className="text">
                        <p> Тариф "Junior" предназначен для пользователей, которым требуется простое и недорогое решение для обхода блокировок и анонимного просмотра интернет-содержимого. Если вам нужен только один прокси-сервер для выполнения повседневных задач или просмотра контента из определенных стран, то этот тариф идеально подойдет для вас. </p>

                        <p> Скорость на тарифе "Junior" ограничена до 100 Мбит/с, что позволяет комфортно использовать прокси для просмотра видео, прослушивания музыки и других повседневных задач. Трафик неограничен, так что вы можете свободно пользоваться интернетом без опаски превышения лимитов. </p>

                        <p> Прокси-серверы на тарифе "Junior" доступны в нескольких странах. Это позволяет выбрать прокси, которое наиболее подходит для вашего использования. </p>

                        <p> Тариф "Junior" – простое и недорогое решение для тех, кто ищет доступ к интернету через мобильные прокси. Получите возможность обходить блокировки и сохранять анонимность в сети с нашим простым тарифом! </p>
                    </div>
                </div>

                <div className="tarif-item">
                    <a className="tarif-headline" href="/#tarifs-container">
                        Middle
                    </a>

                    <div className="text">
                    <p> Тариф "Middle" является оптимальным выбором для пользователей, которым требуется более широкий функционал и возможности в использовании мобильных прокси-серверов. Если вам нужно больше прокси-серверов для распределенного использования или для приложений требующих высоких скоростей, "Middle" идеально подойдет. </p>

                    <p>За доступную цену вы получаете пять прокси-серверов, что позволяет использовать их для различных задач и проектов. Например, вы можете использовать один для анонимного просмотра контента, другой для парсинга данных и еще несколько для автоматизации и тестирования ваших приложений. Больше прокси, больше возможностей! </p>

                    <p>Трафик на тарифе "Middle" неограничен, поэтому вы можете свободно наслаждаться использованием мобильных прокси-серверов без ограничений. Больше данных, больше возможностей для ваших проектов и задач! </p>

                    <p> Выберите тариф "Middle" и получите больше прокси-серверов, повышенную скорость и свободу использования мобильных прокси в различных странах! Это идеальное решение для тех, кто нуждается в больших возможностях и функционале без значительного увеличения стоимости. </p>
                    </div>
                </div>

                <div className="tarif-item">
                    <a className="tarif-headline" href="/#tarifs-container">
                        Senior
                    </a>

                    <div className="text">
                        <p>Тариф "Senior" является отличным выбором для тех, кто нуждается в большом количестве прокси-серверов для использования в распределенных задачах или приложениях с высокими требованиями к скорости и пропускной способности. </p>

                        <p>Скорость на тарифе "Senior" достигает до 100 Мбит/с, что обеспечивает быструю загрузку и потоковую передачу данных даже на самые требовательные приложения. С такой скоростью вы можете спокойно смотреть видео в высоком разрешении, проводить парсинг данных или использовать прокси для автоматизации и тестирования. </p>

                        <p>Трафик на тарифе "Senior" неограничен, поэтому вы можете свободно использовать мобильные прокси-серверы без ограничений и дополнительных забот об использовании трафика. Больше данных — больше возможностей для ваших проектов и приложений. </p>

                        <p>Выбирая тариф "Senior", вы получаете максимальный функционал и возможности, включая большое количество прокси-серверов, высокую скорость, неограниченный трафик и доступ к прокси в множестве стран. Этот тариф идеально подойдет для самых требовательных пользователей, которым необходимо максимальное преимущество от использования мобильных прокси. </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tarifs;