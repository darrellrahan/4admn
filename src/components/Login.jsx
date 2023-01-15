import React from "react";
import logo from "../assets/logo.svg";

const Login = () => {
  return (
    <main className="login-ct">
      <div className="logo-area">
        <img src={logo} alt="logo" />
        <span>4 Admn</span>
      </div>
      <div className="box">
        <div className="title">
          <h3>Masuk ke Akun Anda</h3>
          <p>Masukkan email dan kata sandi anda</p>
        </div>
        <div className="form-area">
          <div className="single-form-item">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="single-form-item">
            <label htmlFor="password">Kata Sandi</label>
            <input type="password" id="password" />
          </div>
          <div className="single-form-item checkbox">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Ingat saya</label>
          </div>
          <div className="single-form-item">
            <button className="submit-btn">Masuk</button>
          </div>
          <div className="single-form-item">
            <p className="bottom-text">
              Tidak punya akun? <a href="/">Buat akun</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
