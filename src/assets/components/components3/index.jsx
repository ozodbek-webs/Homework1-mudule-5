import React from 'react';
import group112 from "../../images/Group 112cicle.svg"
import ellipse24 from "../../images/Ellipse 24guy.png";
import group114 from "../../images/Group 124left.svg"
import ellipse24brklyn from "../../images/Ellipse 24-brooklyn.png";
import group123 from "../../images/Group 123right.svg"
import frame128 from "../../images/Frame 128first.png";


import frame129 from "../../images/Frame 129second.png"
import frame130 from "../../images/Frame 130third.png";
import groupoq from "../../images/Groupqol-oq.svg"
import logos from "../../images/logos_whatsapp.png";

const Role = () => {
    return (
        <div>
            <div class="statistics">
                <div class="fact">
                    <img src={group112} alt="cicle"/>
                        <h1>500+</h1>
                        <p>Judul Buku</p>
                </div>

                <div class="fact fact2">
                    <img src={group112} alt="cicle"/>
                        <h1>$0</h1>
                        <p>Gratis Peminjaman</p>
                </div>

                <div class="fact fact3">
                    <img src={group112} alt="cicle"/>
                        <h1>5</h1>
                        <p>Kegiatan Rutin</p>
                </div>

            </div>

            <div class="people-card2">
                <h2>Apa Kata Mereka?</h2>
                <p id="makera">Mereka yang telah menjadi pengunjung tetap kami</p>
                <h3 id="selen">Selengkapnya</h3>

                <div class="people1">
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
                        enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        {/* ougoyg */}
                    <img src={ellipse24} alt="bo"/>
                        <h3>Guy Hawkins</h3>
                        <h4>32 Tahun, Karyawan</h4>
                </div>
                <img src={group114} alt="left" class="chapga"/>


                    <div class="people2">
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
                            enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        <img src={ellipse24brklyn} alt="bo"/>
                            <h3>Guy Hawkins</h3>
                            <h4>32 Tahun, Karyawan</h4>
                    </div>
                    <img src={group123} alt="right" class="onga"/>
                        <div class="dots">
                            <div class="active-dot dot"></div>
                            <div class="dot"></div>
                            <div class="dot"></div>
                        </div>
                    </div>
                    <div class="article">
                        <h2>Kegiatan Pojok Baca Probolinggo</h2>
                        <p>Intip kegiatan yang telah kami selenggarakan </p>
                        <h3>Selengkapnya</h3>
                        <img src={frame128} alt="img" class="children"/>



                        {/* ouyfdutfufukfkiutdydydydyrdrtdjrtdx
                        \\\\\ */}





                            <img src={frame129} alt="img" class="library"/>
                                <img src={frame130} alt="Frame" class="bag"/>
                                </div>
                                <div class="down-btns">
                                    <h1>Ingin <span>Membantu</span> Meningkatkan Literasi Anak-Anak Sekitar Kita?</h1>
                                    <h3>Percayakan melalui kegiatan kita</h3>
                                    <button class="donasi">Donasi dengan Kami <img src={groupoq}  alt="Groupqol-oq"/></button>
                                    <p>Atau</p>
                                    <button class="hubungi">Hubungi Kami <img src={logos} alt="m"/></button>
                                </div>
                            </div>
                            );
};

                            export default Role;