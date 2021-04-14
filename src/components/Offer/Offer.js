import React, { useState, useEffect } from 'react'
import style from './Offer.module.css'

// aos
import AOS from 'aos'

// icons
import { ReactComponent as Plug } from '../../assets/plug.svg'

// photos
import background__top from "../../assets/background__top.png"

import agregat from '../../assets/agregat.jpg'
import serwis from '../../assets/serwis.jpg'
import szr from '../../assets/szr.jpg'
import tele from '../../assets/tele.jpg'
import zasilaczUps from '../../assets/zasilaczUps.jpg'
import zasilacz from '../../assets/zasilacz.jpg'


const Offer = () => {

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

            <div className={style.section}>

                <section className={style.descSection}>
                    <div className={style.descContainer}>
                        <div className="descHead">
                            <p className="desc">AGREGATY</p>
                            <h2 data-aos="zoom-in" className="descTitle">Agregaty prądotwórcze w zakresie mocy 2kVA – 3750kVA</h2>
                        </div>
                        <div className={style.descItemContainer}>
                            <div className={style.descItemSvg}><Plug /></div>
                            <p className={style.descItemText}>Wersje otwarte, zamknięte i mobilne na przyczepie</p>
                        </div>
                        <div className={style.descItemContainer}>
                            <div className={style.descItemSvg}><Plug /></div>
                            <p className={style.descItemText}>Jednofazowe i trójfazowe</p>
                        </div>
                        <div className={style.descItemContainer}>
                            <div className={style.descItemSvg}><Plug /></div>
                            <p className={style.descItemText}>Benzynowe, diesla i gazowe LPG / NG</p>
                        </div>
                    </div>
                    <figure data-aos="fade-up-left" className={style.imgContainer}>
                        <img onLoad={() => setLoadPhoto(true)} className="img" src={agregat} alt='agregat' />
                    </figure>
                </section>

                <section className={style.descSection}>
                    <div className={style.descContainer}>
                        <div className="descHead">
                            <p className="desc">AGREGATY</p>
                            <h2 data-aos="zoom-in" className="descTitle">Serwis agregatów prądotwórczych</h2>
                        </div>
                        <div className={style.descItemContainer}>
                            <div className={style.descItemSvg}><Plug /></div>
                            <p className={style.descItemText}>FOGO</p>
                        </div>
                        <div className={style.descItemContainer}>
                            <div className={style.descItemSvg}><Plug /></div>
                            <p className={style.descItemText}>PRAMAC</p>
                        </div>
                        <div className={style.descItemContainer}>
                            <div className={style.descItemSvg}><Plug /></div>
                            <p className={style.descItemText}>ENDRESS</p>
                        </div>
                        <div className={style.descItemContainer}>
                            <div className={style.descItemSvg}><Plug /></div>
                            <p className={style.descItemText}>CUMMINS</p>
                        </div>
                        <div className={style.descItemContainer}>
                            <div className={style.descItemSvg}><Plug /></div>
                            <p className={style.descItemText}>Zasilaczy UPS EVER</p>
                        </div>
                    </div>
                    <figure data-aos="fade-up-left" className={style.imgContainer}>
                        <img className="img" src={serwis} alt='serwis' />
                    </figure>
                </section>

                <section className={style.descSection}>
                    <div className={style.descContainer}>
                        <div className="descHead">
                            <p className="desc">ZASILACZE</p>
                            <h2 data-aos="zoom-in" className="descTitle">Zasilacze awaryjne UPS w zakresie mocy 1kVA – 600kVA</h2>
                        </div>
                        <div className={style.descItemContainer}>
                            <div className={style.descItemSvg}><Plug /></div>
                            <p className={style.descItemText}>Małe dla biur i domu</p>
                        </div>
                        <div className={style.descItemContainer}>
                            <div className={style.descItemSvg}><Plug /></div>
                            <p className={style.descItemText}>Dla serwerowni</p>
                        </div>
                        <div className={style.descItemContainer}>
                            <div className={style.descItemSvg}><Plug /></div>
                            <p className={style.descItemText}>Dla przemysłu i infrastruktury</p>
                        </div>
                        <div className={style.btnContainer}>
                            <a href="https://ever.eu/" target="_blank" rel="noopener noreferrer" className={`${style.btn} ${style.btn__accentText}`}>Pełna oferta zasilaczy<i className={style.rightArrow}></i></a>
                        </div>
                    </div>
                    <figure data-aos="fade-up-left" className={style.imgContainer}>
                        <img className="img" src={zasilaczUps} alt='zasilaczUps' />
                    </figure>
                </section>

                <section className={style.descSection}>
                    <div className={style.descContainer}>
                        <div className="descHead">
                            <p className="desc">ZASILACZE</p>
                            <h2 data-aos="zoom-in" className="descTitle">Zasilacze urządzeń przeciwpożarowych</h2>
                        </div>
                        <div className={style.descItemContainer}>
                            <div className={style.descItemSvg}><Plug /></div>
                            <p className={style.descItemText}>Współpraca z napędami bram używanymi w systemach kontroli rozprzestrzeniania dymu i ciepła, zasilanymi z jednofazowej sieci energetycznej ~230 V, o zapotrzebowaniu na moc nie większym niż 1 kVA / 1 kW</p>
                        </div>
                        <div className={style.descItemContainer}>
                            <div className={style.descItemSvg}><Plug /></div>
                            <p className={style.descItemText}>Zapewnia ciągłość zasilania bram pożarowych</p>
                        </div>
                        <div className={style.descItemContainer}>
                            <div className={style.descItemSvg}><Plug /></div>
                            <p className={style.descItemText}>Urządzenie posiada Świadectwo dopuszczenia i Certyfikat</p>
                        </div>
                    </div>
                    <figure data-aos="fade-up-left" className={style.imgContainer}>
                        <img className="img" src={zasilacz} alt='zasilacz' />
                    </figure>
                </section>

                <section className={style.descSection}>
                    <div className={style.descContainer}>
                        <div className="descHead">
                            <p className="desc">AUTOMATYKA</p>
                            <h2 data-aos="zoom-in" className="descTitle">Układy automatyki SZR / ATS</h2>
                        </div>
                        <div className={style.descItemContainer}>
                            <div className={style.descItemSvg}><Plug /></div>
                            <p className={style.descItemText}>Stycznikowe</p>
                        </div>
                        <div className={style.descItemContainer}>
                            <div className={style.descItemSvg}><Plug /></div>
                            <p className={style.descItemText}>Przełącznikowe</p>
                        </div>
                    </div>
                    <figure data-aos="fade-up-left" className={style.imgContainer}>
                        <img className="img" src={szr} alt='szr' />
                    </figure>
                </section>

                <section className={style.descSection}>
                    <div className={style.descContainer}>
                        <div className="descHead">
                            <p className="desc">INSTALACJE</p>
                            <h2 data-aos="zoom-in" className="descTitle">Instalacje elektryczne i teletechniczne obiektów</h2>
                        </div>
                        <div className={style.descItemContainer}>
                            <div className={style.descItemSvg}><Plug /></div>
                            <p className={style.descItemText}>Instalacja</p>
                        </div>
                        <div className={style.descItemContainer}>
                            <div className={style.descItemSvg}><Plug /></div>
                            <p className={style.descItemText}>Pomiary</p>
                        </div>
                    </div>
                    <figure data-aos="fade-up-left" className={style.imgContainer}>
                        <img className="img" src={tele} alt='instalacje' />
                    </figure>
                </section>

            </div>
        </main>
    )
}

export default Offer
