import { useAuth } from "../auth/Auth";
import "./Contacts.scss";

const Contacts = () => {
    const auth = useAuth();

    return (
        <div className="contacts-home">
            <div className="contacts-home-up">
                <div className="contacts-home-image">
                    <div className="header">
                        <div className="icon-container">
                            <a class="logo" href="/">
                                <img src={require('../../img/Frame 9.png')} className="logo" alt=""></img>
                            </a>
                        </div>
                        <div className="nav-container">
                            {
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
                                <div className="account-name">
                                    <div className="account-info">
                                        <img src={require('../../img/personal_account.png')} className="personal-account-img" alt=""></img>
                                        <a href="/login" className="personal-account-link">{auth.user}</a>
                                    </div>
                                </div>
                            )}


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
                        <a href="/contacts" className="name-text">Контакты</a>
                    </div>

                </div>
            </div>

            <div className="contacts-container">
                <div className="title">
                    <a href="/contacts" className="title-text">По всем предложениям пишите нам</a>
                </div>

                <div className="social-networks-container">
                    <div className="social-network-item">
                        {/* <div className="social-network-name">Telegram</div> */}
                        <a className="social-network-icon" href="https://t.me/dvinyatinfedor">
                            <img className="icon-tg"></img>
                        </a>
                    </div>
                    <div className="social-network-item not-first-item">
                        {/* <div className="social-network-name">VK</div> */}
                        <a className="social-network-icon" href="https://vk.com/dvinyatinfedor">
                            <img className="icon-vk"></img>
                        </a>
                    </div>
                    <div className="social-network-item not-first-item">
                        {/* <div className="social-network-name">VK</div> */}
                        <a className="social-network-icon" href="mailto:rkuzin.2003@gmail.com">
                            <img className="icon-gmail"></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;