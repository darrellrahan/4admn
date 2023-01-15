import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const Register = () => {
  return (
    <main className="lr-container">
      <Logo />
      <div className="box">
        <div className="title">
          <h3 className="heading">Buat Akun</h3>
          <p className="small-text">
            Masukkan detail pribadi anda untuk membuat akun
          </p>
        </div>
        <div className="form-area">
          <div className="single-form-item">
            <label htmlFor="name" className="regular-text">
              Nama
            </label>
            <input type="text" id="name" />
          </div>
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
              Saya setuju dan menerima{" "}
              <Link to="/terms" className="link">
                Syarat dan Ketentuan
              </Link>
            </label>
          </div>
          <div className="single-form-item">
            <button className="submit-btn">Buat Akun</button>
          </div>
          <div className="single-form-item">
            <p className="small-text bottom-text">
              Sudah punya akun?{" "}
              <Link to="/login" className="link">
                Masuk
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
