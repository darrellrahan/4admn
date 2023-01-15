import React from "react";
import Logo from "../components/Logo";

const Terms = () => {
  return (
    <main className="terms-container">
      <Logo />
      <div>
        <h1 className="heading">Syarat dan Ketentuan 4 Admn</h1>
        <div className="box">
          <p className="small-text">
            Syarat dan Ketentuan di bawah ini berlaku untuk 4 Admn. Kebijakan
            ini memainkan peran penting dalam menjaga pengalaman positif bagi
            semua orang yang menggunakan 4 Admn.
          </p>
          <p className="small-text">
            Jika anda menggunakan 4 Admn dengan akun konsumen (misalnya,
            @gmail.com), lihat juga persyaratan dan layanan Google untuk
            informasi selengkapnya. Jika anda menggunakan akun melalui kantor,
            sekolah, atau organisasi lain, persyaratan mungkin berlaku
            berdasarkan perjanjian organisasi anda dengan 4 Admn atau kebijakan
            lainnya. Administrator anda mungkin dapat memberikan informasi lebih
            lanjut.
          </p>
          <p className="small-text">
            Kami perlu mengekang penyalahgunaan yang mengancam kemampuan kami
            untuk menyediakan layanan ini, dan kami meminta semua orang mematuhi
            kebijakan untuk membantu kami mencapai tujuan ini. Setelah diberi
            tahu tentang potensi pelanggaran kebijakan, kami dapat meninjau
            konten dan tindakan tersebut, termasuk membatasi atau menghentikan
            akses pengguna ke 4 Admn.
          </p>
          <p className="small-text">
            Pastikan untuk memeriksa kembali dari waktu ke waktu, karena syarat
            dan ketentuan ini dapat berubah.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Terms;
