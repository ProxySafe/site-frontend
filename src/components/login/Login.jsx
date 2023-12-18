import { getFingerprint, useAuth } from "../auth/Auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import axios from 'axios';

export const Login = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        console.log('nickname: ' + user + ' password: ' + password);
        const fingerprint = getFingerprint();
        var body = {
            'username': user,
            'password': password,
            'os': fingerprint.OS,
            'fingerprint': fingerprint.Fingerprint,
            'user_agent': fingerprint.UserAgent
        }

        axios.get('http://127.0.0.1:8003/auth/login/', body)
            .then(function(response) {
                console.log(response);
            })
            .then(function (error) {
                console.log(error);
            })
        auth.login(user);
        navigate('/');
    }

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
                    <input type="text" placeholder="Никнейм" className="nickNameInput" onChange={(e) => setUser(e.target.value)}></input>
                    <input type="password" placeholder="Пароль" className="passwordInput" onChange={(e) => setPassword(e.target.value)}></input>
                    <button onClick={handleLogin}>Войти</button>
                </form>
                <a href="/register">Нет аккаунта? Зарегистрируйтесь!</a>
            </div>
        </div>
    );
}

export default Login;