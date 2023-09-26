import "./Login.module.css"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profile, setProfile] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Verifica as credenciais do usuário
    if (email === 'user@email.com' && password === '12345678') {
        navigate('/usuario'); // Redireciona para o painel do usuário
        

      setProfile('Usuário');
      setError('');
     
    } else if (email === 'admin@email.com' && password === '12345678') {
        navigate('/admin');
      setProfile('Admin');
      setError('');
    } else {
      setError('Credenciais inválidas');
      setProfile('');
    }
  };

    return (
      <div>
        <h1>Autenticacao de usuarios</h1>
        <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>

      {profile && <p>Seu perfil: {profile}</p>}
      {error && <p>{error}</p>}

      </div>
    )
  }
  
  export default Login