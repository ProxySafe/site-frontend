import { useAuth } from "../auth/Auth";
import "./FAQ.scss";

const FAQ = () => {
    const auth = useAuth();

    return (
        <div className="faq-home">
            <div className="faq-home-up">
                <div className="faq-home-image">
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
                        <a href="/faq" className="name-text">FAQ</a>
                    </div>

                </div>
            </div>

            <div className="faq-container">
                <div className="questions-answers">
                    <div className="faq-text-container">
                        <div className="text">
                            <p> <text className="fat-text">Q:</text> Что такое мобильные прокси? </p>
                            <p> <text className="fat-text">A:</text> Это специальные серверы, которые позволяют пользователям изменять свой IP-адрес и маскировать свою локацию при использовании мобильных устройств, таких как смартфоны или планшеты. Это позволяет обходить географические ограничения и блокировки контента, а также повышает уровень безопасности и анонимности при использовании интернета на мобильных устройствах. </p>

                            <p className="not-first-question"> <text className="fat-text">Q:</text> Какой период ротации наших мобильных прокси?</p>
                            <p> <text className="fat-text">A:</text> Это зависит от тарифа, в среднем период ротации занимает 3-10 минут. </p>

                            <p className="not-first-question"> <text className="fat-text">Q:</text> Есть ли возможность взять прокси по разным тарифам одновременно?</p>
                            <p> <text className="fat-text">A:</text> Да, такая возможность есть. Например, вы можете взять 10 прокси с тарифа "Junior" и 10 прокси с тарифа "Middle". </p>

                            <p className="not-first-question"> <text className="fat-text">Q:</text> Из каких стран есть IP у наших прокси?</p>
                            <p> <text className="fat-text">A:</text> Мы предоставляем прокси с ip из США, Великобритании, Германии и Нидерландов </p>

                            <p className="not-first-question"> <text className="fat-text">Q:</text> Есть ли возможность использовать прокси для телефона?</p>
                            <p> <text className="fat-text">A:</text> Такая возможность разрабатывается: мы работаем над мобильным приложением. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FAQ;