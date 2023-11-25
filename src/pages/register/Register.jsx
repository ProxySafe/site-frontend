import "./Register.scss";

const Register = () => {
    return (
        <div className="register">
            <div className="icon-container">
                <a class="logo" href="/">
                <img src={require('../../img/Frame 9.png')} alt=""></img>
                </a>
            </div>

            <div className="register-form">
                <h1>Регистрация</h1>
                <form>
                    <input type="text" placeholder="Никнейм"></input>
                    <input type="text" placeholder="Имя"></input>
                    <input type="text" placeholder="Фамилия"></input>
                    <input type="password" placeholder="Пароль"></input>
                    <input type="password" placeholder="Пароль еще раз"></input>
                    <button>Зарегистрироваться</button>
                </form>
                <a href="/login">Есть аккаунт? Войдите!</a>
            </div>
        </div>
    );
}

export default Register;