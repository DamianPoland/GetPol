import React, { useEffect } from 'react'
import style from './About.module.css'
import { Link } from 'react-router-dom'


//photos
import getpol_logo_red from '../../assets/getpol_logo_red.png'
import about_img from '../../assets/about_img.jpg'
import offers_img from '../../assets/offers_img.jpg'
import bulb from '../../assets/bulb.jpg'

// icons
import { ReactComponent as Task } from '../../assets/task.svg'
import { ReactComponent as School } from '../../assets/school.svg'
import { ReactComponent as User } from '../../assets/user.svg'
import { ReactComponent as Note } from '../../assets/note.svg'

// photos to realisations
import agr1 from "../../assets/agregaty/agr1.jpg"
import agr2 from "../../assets/agregaty/agr2.jpg"
import agr3 from "../../assets/agregaty/agr3.jpg"
import ups3 from "../../assets/ups/ups3.jpg"





const About = () => {

    useEffect(() => { window.scrollTo(0, 0) }, [])

    // full screen in mobile first section (cut browser search bar on mobile) + css code
    useEffect(() => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`)
        // window.addEventListener('resize', () => { // change vh when browser search bar disapear
        //     document.querySelector(':root').style
        //         .setProperty('--vh', window.innerHeight / 100 + 'px')
        // })
    }, [])


    return (

        <main className={style.background}>

            <section className={style.start__background}>
                <div className={style.start}>

                    <figure className={style.start__imgBulb1}>
                        <img className={style.img} src={bulb} alt='bulb' />
                    </figure>

                    <div className={style.start__containerBottom}>
                        <figure className={style.start__imgBulb2}>
                            <img className={style.img} src={bulb} alt='bulb' />
                        </figure>
                        <figure className={style.start__imgBulb3}>
                            <img className={style.img} src={bulb} alt='bulb' />
                        </figure>
                    </div>

                    <figure className={style.start__imgLogo}>
                        <img className={style.img} src={getpol_logo_red} alt='getpol_logo_red' />
                    </figure>
                    <i className={style.start__arrow} />

                </div>
            </section>


            <section className={style.about}>

                <figure data-aos="fade-right" className={style.about__imgContainer}>
                    <img className={style.img} src={about_img} alt='about_img' />
                </figure>

                <div className={style.about__desc}>
                    <div className={style.descHead}>
                        <p className={style.desc}>O NAS</p>
                        <h1 data-aos="zoom-in" className={style.descTitle}>Eksperci od elektryki</h1>
                    </div>
                    <p className={style.descText}>Firma Getpol rozpoczęła działalność w 2014 roku. Początkowo działalność firmy opierała się głównie na sprzedaży agregatów prądotwórczych i zasilaczy bezprzerwowych UPS. Z czasem poszerzyliśmy ofertę o serwis, a wychodząc naprzeciw oczekiwaniom naszych Klientów z czasem do oferty dołączyliśmy także kompletne instalacje dostarczanych urządzeń. Poza tym wykonujemy instalacje niskoprądowe oraz elektryczne.</p>
                </div>
            </section>


            <section className={style.contact}>

                <div className={style.contact__desc}>
                    <div className={style.descHead}>
                        <p className={`${style.desc} ${style.desc__whiteText}`}>SKONTAKTUJ SIĘ</p>
                        <h2 data-aos="zoom-in" className={style.descTitle}>Profesjonalne doradztwo, bezpłatna i szybka wycena</h2>
                    </div>
                    <p className={style.contact__descText}>+48 730-793-222</p>
                    <div className={style.btnContainer}>
                        <Link to="/contact" className={style.btn}>Wszystkie formy kontaktu <i className={style.rightArrow}></i></Link>
                    </div>
                </div>

            </section>


            <section className={style.why}>
                <div className={style.why__desc}>
                    <div className={style.descHead}>
                        <p className={style.desc}>DLACZEGO MY</p>
                        <p data-aos="zoom-in" className={style.descTitle}>Co nas wyróżnia</p>
                    </div>
                    <div className={style.why__descItems}>

                        <div data-aos="flip-left" className={style.why__descItem}>
                            <div className={style.why__descIcon}>
                                <Task />
                            </div>
                            <h2 className={style.why__descTextBig}>Doświadczenie</h2>
                            <p className={style.why__descText}>Nasze kompetencje oparte są na wieloletnim doświadczeniu.</p>
                        </div>
                        <div data-aos="flip-left" className={style.why__descItem}>
                            <div className={style.why__descIcon}>
                                <User />
                            </div>
                            <h2 className={style.why__descTextBig}>Współpraca</h2>
                            <p className={style.why__descText}>Współpracujemy z wyselekcjonowanymi dostawcami sprawdzonych rozwiązań.</p>
                        </div>
                        <div data-aos="flip-left" className={style.why__descItem}>
                            <div className={style.why__descIcon}>
                                <Note />
                            </div>
                            <h2 className={style.why__descTextBig}>Certyfikaty</h2>
                            <p className={style.why__descText}>Posiadamy autoryzacje wielu czołowych producentów.</p>
                        </div>
                        <div data-aos="flip-left" className={style.why__descItem}>
                            <div className={style.why__descIcon}>
                                <School />
                            </div>
                            <h2 className={style.why__descTextBig}>Szkolenia</h2>
                            <p className={style.why__descText}>Naszą wiedzę poszerzamy ciągłymi szkoleniami.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={style.realizations}>
                <div className={style.realizations__desc}>
                    <div className={style.descHead}>
                        <p className={`${style.desc} ${style.desc__whiteText}`}>REALIZACJE</p>
                        <p data-aos="zoom-in" className={style.descTitle}>Niektóre nasze projekty</p>
                    </div>
                    <h2 className={`${style.descText} ${style.descText__whiteText}`}>Mamy za sobą z sukcesem zrealizowane dostawy oraz instalacje dla klientów indywidualnych jak i instytucjonalnych.</h2>
                    <div className={style.realizations__imgContainer}>
                        <figure data-aos="flip-up" className={style.realizations__img}>
                            <img className={style.img} src={agr1} alt='agr1' />
                        </figure>
                        <figure data-aos="flip-up" className={style.realizations__img}>
                            <img className={style.img} src={agr2} alt='agr2' />
                        </figure>
                        <figure data-aos="flip-up" className={style.realizations__img}>
                            <img className={style.img} src={agr3} alt='agr3' />
                        </figure>
                        <figure data-aos="flip-up" className={style.realizations__img}>
                            <img className={style.img} src={ups3} alt='ups3' />
                        </figure>
                    </div>
                    <div className={style.btnContainer}>
                        <Link to="/realizations" className={style.btn}>Nasze realizacje <i className={style.rightArrow}></i></Link>
                    </div>
                </div>
            </section>


            <section className={style.offer}>

                <div className={style.offer__desc}>
                    <div className={style.descHead}>
                        <p className={style.desc}>OFERTA</p>
                        <h2 data-aos="zoom-in" className={style.descTitle}>Szeroka oferta naszych produktów</h2>
                    </div>
                    <p className={style.descText}>Firma Getpol oferuje: agregaty prądotwórcze, zasilacze awaryjne UPS, zasilacze urządzeń przeciwpożarowych, układy automatyki SZR / ATS, moduły komunikacji oraz wiele innych.</p>
                    <div className={style.btnContainer}>
                        <Link to="/offer" className={`${style.btn} ${style.btn__accentText}`}>Pełna oferta <i className={style.rightArrow}></i></Link>
                    </div>
                </div>

                <figure data-aos="fade-right" className={style.offer__imgContainer}>
                    <img className={style.img} src={offers_img} alt='offers_img' />
                </figure>
            </section>
        </main>
    )
}

export default About
