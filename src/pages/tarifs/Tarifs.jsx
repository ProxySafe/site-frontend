import "./Tarifs.scss";

const Tarifs = () => {
    return (
        <div className="tarifs-home">
            <div className="tarifs-home-image">
                <div className="header">
                    <div className="icon-container">
                        <a class="logo" href="/">
                            <img src={require('../../img/Frame 9.png')} alt=""></img>
                        </a>
                    </div>
                    <div className="nav-container">
                        <div className="top-nav-container">
                            <div className="personal-account">
                                <img src={require('../../img/personal_account.png')} className="personal-account-img" alt=""></img>
                                <a href="/login" className="personal-account-link">Личный кабинет</a>
                                <img src={require('../../img/add_account.png')} className="add-personal-account-img" alt=""></img>
                                <a href="/register" className="add-personal-account-link">Зарегистрироваться</a>
                            </div>
                        </div>

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
                                <a href="/about">
                                <span className="menu-icon">
                                    О нас
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
                            <li className="nav-item">
                                <a href="/contacts">
                                <span className="menu-icon">
                                    Контакты
                                </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <text className="header-name">
            Тарифы
            </text>

            <div className="tarifs-container">
                <div className="tarif-item">
                    <a className="tarif-headline" href="#junior-description">
                        Junior
                    </a>
                    <button className="buy-tarif">
                        Купить
                    </button>
                </div>

                <div className="tarif-item">
                    <a className="tarif-headline">
                        Middle
                    </a>
                    <button className="buy-tarif">
                        Купить
                    </button>
                </div>

                <div className="tarif-item">
                    <a className="tarif-headline">
                        Senior
                    </a>
                    <button className="buy-tarif">
                        Купить
                    </button>
                </div>
            </div>

            <div className="tarifs-descriptions">
                <div id="junior-decription">Blabla</div>
            </div>
        </div>
    );
}

export default Tarifs;