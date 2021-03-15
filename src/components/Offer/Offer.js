import React, { useState, useEffect } from 'react'
import style from './Offer.module.css'

// aos
import AOS from 'aos'

// icons
import { ReactComponent as Plug } from '../../assets/plug.svg'

// photos
import bulb from '../../assets/bulb.jpg'
import agregat from '../../assets/agregat.jpg'
import serwis from '../../assets/serwis.jpg'
import szr from '../../assets/szr.jpg'
import tele from '../../assets/tele.jpg'
import zasilaczUps from '../../assets/zasilaczUps.jpg'
import zasilacz from '../../assets/zasilacz.jpg'
import instalacje from '../../assets/instalacje.jpg'


const Offer = () => {

    useEffect(() => { window.scrollTo(0, 0) }, [])

    // AOS reload after load first photo to not show animation elements before load screen
    const [loadPhoto, setLoadPhoto] = useState(false)
    useEffect(() => { AOS.refresh() }, [loadPhoto])



    return (

        <main className={style.background}>


            <header className={style.start__background}>
                <div className={style.start}>
                    <img className={`${style.start__img}`} src={bulb} alt='bulb' />
                    <img className={`${style.start__img} ${style.start__imgMirror}`} src={bulb} alt='bulb' />
                </div>
            </header>
            <div className={style.start__descContainer}>
                <h1 className={style.start__desc}>OFERTA</h1>
            </div>


            <div className={style.section}>

                <section className={style.descSection}>
                    <div className={style.descContainer}>
                        <div className="descHead">
                            <p className="desc">AGREGATY</p>
                            <h2 data-aos="zoom-in" className="descTitle">Agregaty prądotwórcze w zakresie mocy 2kVA – 3750kVA</h2>
                        </div>
                        <div className={style.descItemContainer}>
                            <div className={style.descItemSvg}><Plug /></div>
                            <p className={style.descItemText}>Wersje otwarte, zamknięte i mobilne na przyczepie.</p>
                        </div>
                        <div className={style.descItemContainer}>
                            <div className={style.descItemSvg}><Plug /></div>
                            <p className={style.descItemText}>Jednofazowe i trójfazowe.</p>
                        </div>
                        <div className={style.descItemContainer}>
                            <div className={style.descItemSvg}><Plug /></div>
                            <p className={style.descItemText}>Benzynowe, diesla i gazowe LPG / NG.</p>
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
                            <h2 data-aos="zoom-in" className="descTitle">Serwis agregatów prądotwórczych.</h2>
                        </div>
                        <div className={style.descItemContainer}>
                            <div className={style.descItemSvg}><Plug /></div>
                            <p className={style.descItemText}>FOGO.</p>
                        </div>
                        <div className={style.descItemContainer}>
                            <div className={style.descItemSvg}><Plug /></div>
                            <p className={style.descItemText}>PRAMAC.</p>
                        </div>
                        <div className={style.descItemContainer}>
                            <div className={style.descItemSvg}><Plug /></div>
                            <p className={style.descItemText}>ENDRESS.</p>
                        </div>
                        <div className={style.descItemContainer}>
                            <div className={style.descItemSvg}><Plug /></div>
                            <p className={style.descItemText}>CUMMINS.</p>
                        </div>
                        <div className={style.descItemContainer}>
                            <div className={style.descItemSvg}><Plug /></div>
                            <p className={style.descItemText}>zasilaczy UPS EVER.</p>
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
                            <h2 data-aos="zoom-in" className="descTitle">Zasilacze awaryjne UPS w zakresie mocy 1kVA – 600kVA.</h2>
                        </div>
                        <div className={style.descItemContainer}>
                            <div className={style.descItemSvg}><Plug /></div>
                            <p className={style.descItemText}>Małe dla biur i domu.</p>
                        </div>
                        <div className={style.descItemContainer}>
                            <div className={style.descItemSvg}><Plug /></div>
                            <p className={style.descItemText}>Dla serwerowni.</p>
                        </div>
                        <div className={style.descItemContainer}>
                            <div className={style.descItemSvg}><Plug /></div>
                            <p className={style.descItemText}>Dla przemysłu i infrastruktury.</p>
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
                            <h2 data-aos="zoom-in" className="descTitle">Zasilacze urządzeń przeciwpożarowych.</h2>
                        </div>
                        <div className={style.descItemContainer}>
                            <div className={style.descItemSvg}><Plug /></div>
                            <p className={style.descItemText}>Współpraca z napędami bram używanymi w systemach kontroli rozprzestrzeniania dymu i ciepła, zasilanymi z jednofazowej sieci energetycznej ~230 V, o zapotrzebowaniu na moc nie większym niż 1 kVA / 1 kW.</p>
                        </div>
                        <div className={style.descItemContainer}>
                            <div className={style.descItemSvg}><Plug /></div>
                            <p className={style.descItemText}>Zapewnia ciągłość zasilania bram pożarowych.</p>
                        </div>
                        <div className={style.descItemContainer}>
                            <div className={style.descItemSvg}><Plug /></div>
                            <p className={style.descItemText}>Urządzenie posiada Świadectwo dopuszczenia i Certyfikat.</p>
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
                            <h2 data-aos="zoom-in" className="descTitle">Układy automatyki SZR / ATS.</h2>
                        </div>
                        <div className={style.descItemContainer}>
                            <div className={style.descItemSvg}><Plug /></div>
                            <p className={style.descItemText}>Stycznikowe.</p>
                        </div>
                        <div className={style.descItemContainer}>
                            <div className={style.descItemSvg}><Plug /></div>
                            <p className={style.descItemText}>Przełącznikowe.</p>
                        </div>
                    </div>
                    <figure data-aos="fade-up-left" className={style.imgContainer}>
                        <img className="img" src={szr} alt='szr' />
                    </figure>
                </section>

                <section className={style.descSection}>
                    <div className={style.descContainer}>
                        <div className="descHead">
                            <p className="desc">MODUŁY</p>
                            <h2 data-aos="zoom-in" className="descTitle">Moduły komunikacji i obsługi zdalnej urządzeń.</h2>
                        </div>
                        <div className={style.descItemContainer}>
                            <div className={style.descItemSvg}><Plug /></div>
                            <p className={style.descItemText}>RS232-485.</p>
                        </div>
                        <div className={style.descItemContainer}>
                            <div className={style.descItemSvg}><Plug /></div>
                            <p className={style.descItemText}>Ethernet/Internet RJ45.</p>
                        </div>
                        <div className={style.descItemContainer}>
                            <div className={style.descItemSvg}><Plug /></div>
                            <p className={style.descItemText}>GSM.</p>
                        </div>
                    </div>
                    <figure data-aos="fade-up-left" className={style.imgContainer}>
                        <img className="img" src={tele} alt='tele' />
                    </figure>
                </section>

                <section className={style.descSection}>
                    <div className={style.descContainer}>
                        <div className="descHead">
                            <p className="desc">INSTALACJE</p>
                            <h2 data-aos="zoom-in" className="descTitle">Instalacje elektryczne i teletechniczne obiektów.</h2>
                        </div>
                        <div className={style.descItemContainer}>
                            <div className={style.descItemSvg}><Plug /></div>
                            <p className={style.descItemText}>Montaż, instalacja, uruchomienie.</p>
                        </div>
                        <div className={style.descItemContainer}>
                            <div className={style.descItemSvg}><Plug /></div>
                            <p className={style.descItemText}>Szkolenia.</p>
                        </div>
                    </div>
                    <figure data-aos="fade-up-left" className={style.imgContainer}>
                        <img className="img" src={instalacje} alt='instalacje' />
                    </figure>
                </section>

            </div>
        </main>
    )
}

export default Offer
