import React from 'react';

import ellipse24 from "../../images/Ellipse 24hatta.png"
import ellipse24najwa from "../../images/Ellipse 24najwa.png"

const New = () => {
    return (
        <div className='pastroq'>
            <div class="people-card1">
                <h2>Kenapa Kita Harus Membaca Buku?</h2>
                <div class="people-card-wrapper">
                    <div class="people-card1-card1">
                        <h3>“Aku rela dipenjara asalkan bersama buku, karena dengan buku aku bebas”</h3>
                        <img src={ellipse24} alt="hatta" />
                        <h4>Mohammad Hatta</h4>
                        <p>Wakil Presiden Indonesia Pertama</p>
                    </div>

                    <div class="people-card1-card1 people-card1-card2">
                        <h3>“Cuma perlu satu buku untuk jatuh cinta pada membaca, Cari Buku itu! Mari jatuh cinta!</h3>
                        <img src={ellipse24najwa} alt="hatta" />
                        <h4>Najwa Shihab</h4>
                        <p>Duta Membaca</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default New;