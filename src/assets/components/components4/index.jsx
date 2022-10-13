import React from 'react';

import group114 from "../../images/image 4footer-logo.png"
import ellipse24brklyn from "../../images/line-md_instagraminstagram.svg";
import group123 from "../../images/Vectorfacebook.svg"
import frame128 from "../../images/Vectoryou-tube.svg";

const Footer = () => {
    return (
        <div>
             <div class="footer">
        <div class="footer-logo">
            <img src={group114} alt="logo"/>
            <h2>Pojok Baca Probolinggo</h2>
        </div>
        <ul class="contact">
            <li><a href="#" id="bold">Kontak</a></li>
            <li><a href="#">Email</a></li>
            <li><a href="#">Alamat</a></li>
            <li><a href="#">No. Rekening</a></li>
        </ul>
        <ul class="tentang">
            <li><a href="#" id="bold">Tentang Kami</a></li>
            <li><a href="#">Umum</a></li>
        </ul>
        <ul class="galery">
            <li><a href="#" id="bold">Galery</a></li>
            <li><a href="#">Kegiatan 2018</a></li>
            <li><a href="#">Kegiatan 2019</a></li>
            <li><a href="#">Kegiatan 2020</a></li>
            <li><a href="#">Kegiatan 2021</a></li>
        </ul>
        <div class="icons">
            <img src={ellipse24brklyn} alt="img"/>
            <img src={group123} alt="img"/>
            <img src={frame128} alt="img"/>
        </div>
        <footer>
            <h2>&copy; Pojok Baca Probolinggo 2022</h2>
        </footer>


    </div>
        </div>
    );
};

export default Footer;