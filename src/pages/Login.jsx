import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const Login = () => {
  return (
    <main className="lr-container">
      <Logo />
      <div className="box">
        <div className="title">
          <h3 className="heading">Masuk ke Akun Anda</h3>
          <p className="small-text">Masukkan email dan kata sandi anda</p>
        </div>
        <div className="form-area">
          <div className="single-form-item">
            <label htmlFor="email" className="regular-text">
              Email
            </label>
            <input type="email" id="email" />
          </div>
          <div className="single-form-item">
            <label htmlFor="password" className="regular-text">
              Kata Sandi
            </label>
            <input type="password" id="password" />
          </div>
          <div className="single-form-item checkbox">
            <input type="checkbox" id="cb" />
            <label htmlFor="cb" className="small-text">
              Ingat saya
            </label>
          </div>
          <div className="single-form-item">
            <button className="submit-btn">Masuk</button>
          </div>
          <div className="single-form-item">
            <p className="small-text bottom-text">
              Tidak punya akun?{" "}
              <Link to="/register" className="link">
                Buat akun
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
