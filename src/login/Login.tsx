import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import LogoAlta from '../images/Logo alta.png';
import LogoRight from '../images/Group 341.png';

const Login: React.FC = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [showPassword, setShowPassword] = useState(false);
const [errorMessage, setErrorMessage] = useState('');
const navigate = useNavigate();

const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
setUsername(event.target.value);
};

const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
setPassword(event.target.value);
};

const handleShowPassword = () => {
setShowPassword(!showPassword);
};

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
event.preventDefault();
if (username === 'admin' && password === 'password') {
alert('Đăng nhập thành công');
navigate('/dashboard');
} else {
setErrorMessage('Sai tên đăng nhập hoặc mật khẩu');
}
};

return (
<div className="login">
<div className="box-login">
<div className="box-login-left">
<div className="logo-left">
<img src={LogoAlta} alt="logo" />
</div>
<form onSubmit={handleSubmit}>
<div className="input">
<label>Tên đăng nhập</label>
<input type="text" value={username} onChange={handleUsernameChange} />
</div>
<div className="pass">
<label>Mật khẩu</label>
<input type={showPassword ? 'text' : 'password'} value={password} onChange={handlePasswordChange} />
<span className="password-toggle" onClick={handleShowPassword}>
{showPassword ? 'Ẩn' : 'Hiện'}
</span>
</div>
<div className="error-message">{errorMessage}</div>
        <Link className="forgot-password" to="/send-mail">
          Quên mật khẩu?
        </Link>
        <div className="btn-login">
          <button type="submit">Đăng nhập</button>
        </div>
      </form>
    </div>
    <div className="box-login-right">
      <div className="logo-right">
        <img src={LogoRight} alt="logo" />
      </div>
      <div className="text-right">
        <h1>Hệ thống</h1>
      </div>
      <div className="text-rights">
        <h1>QUẢN LÝ XẾP HÀNG</h1>
      </div>
    </div>
  </div>
</div>
);
};

export default Login;