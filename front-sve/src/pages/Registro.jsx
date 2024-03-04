import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { Link } from 'react-router-dom';

import validator from 'validator'
import { api_auth } from '../services/api';

function Signup() {
    const [name, setName] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [errorMessage, setErrorMessage] = useState();
    const [formSubmitted, setFormSubmitted] = useState(false);

    const validatePassword = (value) => {

        if (validator.isStrongPassword(value, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            return true
        } else {
            setErrorMessage('A senha inserida não é segura')
            return false
        }
    }


    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        validatePassword(newPassword);
        setPassword(newPassword);
    };


    const handleSignup = (e) => {
        e.preventDefault()
        setFormSubmitted(true)

        if (!validatePassword(password)) {
            return;
        }

        api_auth.post("/user-register", { name, username, password }, {headers: {
            'Content-Type': 'multipart/form-data',
          },})
            .then(result => {
                console.log(result.data)
                setErrorMessage()
            })
            .catch(err => {
                console.error("Erro ao registrar-se", err.response)
                if (err.response.status === 400) {
                    setErrorMessage("Usuário com esse e-mail já existe")
                } else if (err.response.status === 406) {
                    setErrorMessage("O e-mail deve pertencer ao domínio: @diamaju.com.br")
                } else {
                    setErrorMessage("Erro desconhecido")
                }

            })

    }

    return (
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Registre-se</h2>
                <form onSubmit={handleSignup}>
                    <div className='mb-3'>
                        <label htmlFor="name">
                            <strong>Nome Completo</strong>
                        </label>
                        <input
                            type="text"
                            placeholder='Digite seu nome completo'
                            autoComplete='off'
                            name='name'
                            className='form-control rounded-0'
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder='Digite seu email corporativo'
                            autoComplete='on'
                            name='email'
                            className='form-control rounded-0'
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password">
                            <strong>Senha</strong>
                        </label>
                        <input
                            type="password"
                            placeholder='Crie uma senha'
                            name='password'
                            className='form-control rounded-0'
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-1'>
                        Registrar
                    </button>
                    {formSubmitted && errorMessage && <p style={{ color: 'red' }} className="error-message">{errorMessage}</p>}
                </form>
                <p>Já tenho uma conta</p>
                <Link to={"/"} className='btn btn-bd-primary border w-100 bg-light rounded-1 text-decoration-none'>
                    Acessar minha conta
                </Link>
            </div>
        </div>
    )
}


export default Signup;
