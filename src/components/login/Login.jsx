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
        const fingerprint = getFingerprint();
        var reqBody = {
            'username': user,
            'password': password,
            'os': fingerprint.OS,
            'fingerprint': fingerprint.Fingerprint,
            'user_agent': fingerprint.UserAgent
        }

        axios.post('https://api.proxysafe.ru/auth/login/', JSON.stringify(reqBody))
            .then(function(response) {
                const jsonData = response.data;
                if (jsonData.statusCode === 200) {
                    localStorage.setItem('accessToken', jsonData.access_token);
                    localStorage.setItem('refreshToken', jsonData.refresh_token);
                }
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