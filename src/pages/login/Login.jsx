import "./Login.scss";

const Login = () => {
    return (
        <div className="login">
            <div className="icon-container">
                <a class="logo" href="/">
                <img src={require('../../img/Frame 9.png')} alt=""></img>
                </a>
            </div>

            <div className="login-form">
                <h1>Авторизация</h1>
                <form>
                    <input type="text" placeholder="Никнейм"></input>
                    <input type="password" placeholder="Пароль"></input>
                    <button>Войти</button>
                </form>
                <a href="/register">Нет аккаунта? Зарегистрируйтесь!</a>
            </div>
        </div>
    );
}

export default Login;