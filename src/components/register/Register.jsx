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

        var body = {
            'username': username,
            'password': password,
            'email': email
        }

        axios.get('http://127.0.0.1:8003/auth/register/', body)
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
        <div className="register">
            <div className="icon-container">
                <a class="logo" href="/">
                <img src={require('../../img/Frame 9.png')} alt=""></img>
                </a>
            </div>

            <div className="register-form">
                <h1>Регистрация</h1>
                <form>
                    <input type="text" placeholder="Никнейм" className="nickNameInput"></input>
                    <input type="text" placeholder="Email" className="emailInput"></input>
                    <input type="password" placeholder="Пароль" className="passwordInput"></input>
                    <input type="password" placeholder="Пароль еще раз" className="passwordInput"></input>
                    <button onClick={handleRegister}>Зарегистрироваться</button>
                </form>
                <a href="/login">Есть аккаунт? Войдите!</a>
            </div>
        </div>
    );
}

export default Register;