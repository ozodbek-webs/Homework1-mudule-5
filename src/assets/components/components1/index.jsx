import React from 'react';
import lupa from "../../images/Vectorlupa.svg";
import qol from "../../images/Groupqol.svg"
import vector14 from "../../images/Vector 14-hr.svg"
import image38 from "../../images/image 38yurag.png"
import image45 from "../../images/image 45baliqalar.png"
import image44 from "../../images/image 44qiz.png"
import image39 from "../../images/image 39totto-chan.png"
import right from "../../images/Group 123right.svg"
import left from "../../images/Group 124left.svg"
import image41 from "../../images/image 41hati-hati.png"
import image45atomi from "../../images/image 45atomi-rasa.png"
import image37atomi from "../../images/image 37berjalan.png"

const Navbar = () => {
    return (
        <>
             <div class="header-content-text">
            <h4>Pojok Baca <span> Probolinggo</span></h4>
            <h1>Pinjam Buku Secara <span> Gratis</span> untuk Masyarakat</h1>
            <div class="btns">
                <button class="lupa">Cari Judul Buku <img src={lupa} alt="lupa"/></button>
                <button class="qol">Donasi dengan Kami <img src={qol} alt="qol"/></button>
            </div>
        </div>
        <img src={vector14} alt="hr" class="hr1"/>

        <div class="yurag upper-card">
            <h6>Sedang Tuhan pun Cemburu</h6>
            <h5>Emha Ainun Nadjib</h5>
            <img src={image38} alt="yurag"/>
        </div>
        <div class="baliq center-card">
            <h6>Laut Bercerita</h6>
            <h5>Leila S. Chudori</h5>
            <img src={image45} alt="yurag"/>
        </div>

        <div class="qiz bottom-card">
            <h6>Perempuan di Titik Nol</h6>
            <h5>Nawal eEl Saadawi</h5>
            <img src={image44} alt="yurag"/>
        </div>

        <div class="middle-card">
            <h6>Toto-chan : The Little Girl At The Window</h6>
            <h5>Testuko Kuroyanagi</h5>
            <img src={image39} alt="yurag"/>
        </div>
        <img src={right} alt="right" class="middle-card-right"/>
        <img src={left} alt="right" class="middle-card-left"/>

        <div class="yurag hati">
            <h6>Hati-Hati dengan Sampah</h6>
            <h5>Ukjae Lee</h5>
            <img src={image41} alt="img"/>
        </div>

        <div class="baliq anatom">
            <h6>Anatomi Rasa</h6>
            <h5>Ayu Utami</h5>
            <img src={image45atomi} alt="img"/>
        </div>

        <div class="qiz berjalan">
            <h6>Berjalan di Atas Cahaya</h6>
            <h5>Hanum Salsabiela Rais</h5>
            <img src={image37atomi} alt="yurag"/>
        </div>
        </>
    );
};

export default Navbar;