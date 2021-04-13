import React, { useState, useEffect } from 'react'
import style from './Realizations.module.css'

// aos
import AOS from 'aos'

// components
import TouchSlider from "../../UI/TouchSlider/TouchSlider"

// photos
import background__top from "../../assets/background__top.png"

import agr1 from "../../assets/agregaty/agr1.jpg"
import agr2 from "../../assets/agregaty/agr2.jpg"
import agr3 from "../../assets/agregaty/agr3.jpg"
import agr4 from "../../assets/agregaty/agr4.jpg"
import agr5 from "../../assets/agregaty/agr5.jpg"
import agr6 from "../../assets/agregaty/agr6.jpg"
import agr7 from "../../assets/agregaty/agr7.jpg"

import inst1 from "../../assets/instalacje/inst1.jpg"
import inst2 from "../../assets/instalacje/inst2.jpg"
import inst3 from "../../assets/instalacje/inst3.jpg"
import inst4 from "../../assets/instalacje/inst4.jpg"
import inst5 from "../../assets/instalacje/inst5.jpg"
import inst6 from "../../assets/instalacje/inst6.jpg"
import inst7 from "../../assets/instalacje/inst7.jpg"
import inst8 from "../../assets/instalacje/inst8.jpg"

import ups1 from "../../assets/ups/ups1.jpg"
import ups2 from "../../assets/ups/ups2.jpg"
import ups3 from "../../assets/ups/ups3.jpg"
import ups4 from "../../assets/ups/ups4.jpg"
import ups5 from "../../assets/ups/ups5.jpg"
import ups6 from "../../assets/ups/ups6.jpg"


// array of agregat images
const agregatsArray = [
    <img className="img" src={agr1} alt={`${agr1}`} />,
    <img className="img" src={agr2} alt={`${agr2}`} />,
    <img className="img" src={agr3} alt={`${agr3}`} />,
    <img className="img" src={agr4} alt={`${agr4}`} />,
    <img className="img" src={agr5} alt={`${agr5}`} />,
    <img className="img" src={agr6} alt={`${agr6}`} />,
    <img className="img" src={agr7} alt={`${agr7}`} />,
]

// array of instaltion images
const instalationsArray = [
    <img className="img" src={inst1} alt={`${inst1}`} />,
    <img className="img" src={inst2} alt={`${inst2}`} />,
    <img className="img" src={inst3} alt={`${inst3}`} />,
    <img className="img" src={inst4} alt={`${inst4}`} />,
    <img className="img" src={inst5} alt={`${inst5}`} />,
    <img className="img" src={inst6} alt={`${inst6}`} />,
    <img className="img" src={inst7} alt={`${inst7}`} />,
    <img className="img" src={inst8} alt={`${inst8}`} />,
]

// array of ups images
const upsArray = [
    <img className="img" src={ups1} alt={`${ups1}`} />,
    <img className="img" src={ups2} alt={`${ups2}`} />,
    <img className="img" src={ups3} alt={`${ups3}`} />,
    <img className="img" src={ups4} alt={`${ups4}`} />,
    <img className="img" src={ups5} alt={`${ups5}`} />,
    <img className="img" src={ups6} alt={`${ups6}`} />,

]


const Realizations = () => {

    useEffect(() => { window.scrollTo(0, 0) }, [])

    // AOS reload after load first photo to not show animation elements before load screen
    const [loadPhoto, setLoadPhoto] = useState(false)
    useEffect(() => { AOS.refresh() }, [loadPhoto])

    return (

        <main className={style.background}>

            <header className={style.start__background}>
                <figure className={style.start}>
                    <img className={style.start__img} src={background__top} alt='getpol start' />
                    <div className={style.start__blackCover}></div>
                </figure>
            </header>

            <section className={style.section}>
                <div className={style.head}>
                    <div className="descHead">
                        <p className="desc">REALIZACJE</p>
                        <h2 data-aos="zoom-in" className="descTitle">Agregaty prądotwórcze</h2>
                        <p className={style.descText}>Wersje otwarte, zamknięte i mobilne na przyczepie. Jednofazowe i trójfazowe. Benzynowe, diesla i gazowe LPG / NG. Montaż, instalacja, uruchomienie i szkolenie.</p>
                    </div>
                </div>
                <div onLoad={() => setLoadPhoto(true)} className={style.slider}>
                    <TouchSlider itemsArray={agregatsArray} />
                </div>
            </section>

            <section className={style.section}>
                <div className={style.head}>
                    <div className="descHead">
                        <p className="desc">REALIZACJE</p>
                        <h2 data-aos="zoom-in" className="descTitle">Instalacje elekrtyczne</h2>
                        <p className={style.descText}>Instalacje elektryczne i teletechniczne obiektów.</p>
                    </div>
                </div>
                <div className={style.slider}>
                    <TouchSlider itemsArray={instalationsArray} />
                </div>
            </section>

            <section className={style.section}>
                <div className={style.head}>
                    <div className="descHead">
                        <p className="desc">REALIZACJE</p>
                        <h2 data-aos="zoom-in" className="descTitle">UPSy</h2>
                        <p className={style.descText}>Małe dla biur i domu. Do serwerowni. Dla przemysłu i infrastruktury. Montaż, instalacja, uruchomienie i szkolenie.</p>
                    </div>

                </div>
                <div className={style.slider}>
                    <TouchSlider itemsArray={upsArray} />
                </div>
            </section>

        </main>
    )
}

export default Realizations
