import { useState } from "react";
import axios from 'axios';
import "./Register.scss";
import { useAuth } from "../auth/Auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [user, setUser] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');
    const [passwordInCorrect, setPasswordInCorrect] = useState(0);
    const auth = useAuth();
    const navigate = useNavigate();

    const handleRegister = () => {
        if (password != passwordAgain) {
            setPasswordInCorrect(1);
        }

        const reqBody = {
            'username': username,
            'password': password,
            'email': email
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify(reqBody)
        };

        console.log('sending request...');
        axios.post('/auth/register/', JSON.stringify(reqBody))
        .then(response => {
            console.log(response.json());
        })
        .then(e => {
            console.log(e);
        });
        auth.login(user);
        navigate('/login');
    }

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
                    <input type="text" placeholder="Никнейм" className="nickNameInput" onChange={(e) => setUsername(e.target.value)}></input>
                    <input type="text" placeholder="Email" className="emailInput" onChange={(e) => setEmail(e.target.value)}></input>
                    <input type="password" placeholder="Пароль" className="passwordInput" onChange={(e) => setPassword(e.target.value)}></input>
                    <input type="password" placeholder="Пароль еще раз" className="passwordInput" onChange={(e) => setPasswordAgain(e.target.value)}></input>
                    <button onClick={handleRegister}>Зарегистрироваться</button>
                </form>
                <a href="/login">Есть аккаунт? Войдите!</a>
            </div>
        </div>
    );
}

export default Register;