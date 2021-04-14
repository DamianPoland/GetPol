import React, { useState, useEffect } from 'react'
import style from './Contact.module.css'
import emailjs from 'emailjs-com';

// components
import Alert from '../../UI/Alert/Alert'
import Spinner from '../../UI/Spinner/Spinner'

//photos images svg
import background__top from "../../assets/background__top.png"

import { ReactComponent as Phone } from '../../assets/phone.svg'
import { ReactComponent as OldPhone } from '../../assets/oldPhone.svg'
import { ReactComponent as Email } from '../../assets/email.svg'
import { ReactComponent as Envelope } from '../../assets/envelope.svg'



const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [inputName, setInputName] = useState('') // input value
    const [inputNameIsInvalid, setInputNameIsInvalid] = useState(false) // only for set isValid/inInvalid before send

    const [inputEmail, setInputEmail] = useState('') // input value
    const [inputEmailIsInvalid, setInputEmailIsInvalid] = useState(false) // only for set isValid/inInvalid before send

    const [inputMessage, setInputMessage] = useState('') // input value
    const [inputMessageIsInvalid, setInputMessageIsInvalid] = useState(false) // only for set isValid/inInvalid before send

    // Alert
    const [isAlertShow, setIsAlertShow] = useState(false)

    // Spinner
    const [isSpinnerShow, setIsSpinnerShow] = useState(false)

    // form animation
    const [isFormAnimation, setIsFormAnimation] = useState(false)

    // click Send
    const sendMessage = event => {

        event.preventDefault()

        // validation 
        let isInvalid = false

        // name validation if is min 3 chars
        if (inputName.trim().length < 3) {
            setInputNameIsInvalid("Niepoprawne imię.")
            isInvalid = true
        } else {
            setInputNameIsInvalid(false)
        }

        //email validation
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(inputEmail).toLowerCase())) {
            setInputEmailIsInvalid("Niepoprawny adres e-mail.")
            isInvalid = true
        } else {
            setInputEmailIsInvalid(false)
        }

        // message validation if is min 10 chars
        if (inputMessage.trim().length <= 10) {
            setInputMessageIsInvalid("Wiadomość powinna zawierać minimum 10 znaków")
            isInvalid = true
        } else {
            setInputMessageIsInvalid(false)
        }

        //check if all inputs are valid
        if (isInvalid) {
            return
        }

        //show spinner
        setIsSpinnerShow(true)

        //sent email
        emailjs.sendForm(process.env.REACT_APP_TO_SERVICE_ID, process.env.REACT_APP_TO_TEMPLATE_ID, event.target, process.env.REACT_APP_TO_USER_ID)
            .then(() => {

                // turn off spinner
                setIsSpinnerShow(false)

                // turn on animation sent
                setIsFormAnimation(true)
                const okId = document.querySelector('#okId')
                okId.classList.add(style.svgOkIdAnim)

                // clear inputs after 1s when during animation
                setTimeout(() => {
                    setInputName('') // clear input
                    setInputEmail('') // clear input
                    setInputMessage('') // clear input
                }, 1000)

                // clear animation classes after 4s when animations stop
                setTimeout(() => {
                    setIsFormAnimation(false)
                    okId.classList.remove(style.svgOkIdAnim)
                }, 4000)

            }, (error) => {
                console.log(error.text)
                setIsSpinnerShow(false) // turn off spinner
                setIsAlertShow(true) // show error alert
            })
    }


    return (
        <main className={style.background}>

            <header className={style.start__background}>
                <figure className={style.start}>
                    <img className={style.start__img} src={background__top} alt='getpol start' />
                    <div className={style.start__blackCover}></div>
                </figure>
            </header>

            <div className={style.section}>
                <div className={style.contact}>

                    {/* contact links  */}
                    <section className={style.content}>

                        <p className={style.contentDataTitle}>Dane rejestrowe:</p>
                        <div className={style.contentData}>
                            <p className={style.contentDataText}>NIP: 9570575239</p>
                            <p className={style.contentDataText}>ul. Wawelska 33/6, Gdańsk </p>
                        </div>

                        <p className={style.contentDataTitle}>Dane kontaktowe:</p>
                        <a className={style.contentItem} href='tel:+48730793222'>
                            <div className={style.contentIcon}><Phone /></div>
                            <p className={style.contentDesc}>+48 730-793-222</p>
                        </a>
                        <a className={style.contentItem} href='tel:+48583414110'>
                            <div className={style.contentIcon}><OldPhone /></div>
                            <p className={style.contentDesc}>+48 58-341-41-10</p>
                        </a>
                        <a className={style.contentItem} href='mailto:biuro@getpol.com.pl?subject=Zapytanie'>
                            <div className={style.contentIcon}><Email /></div>
                            <p className={style.contentDesc}>biuro@getpol.com.pl</p>
                        </a>
                    </section>

                    {/* form */}
                    <section className={style.formContainerMain}>
                        <div className={style.formContainer}>
                            <form className={`${style.form} ${isFormAnimation && style.formAnim}`} onSubmit={sendMessage} noValidate>
                                {isAlertShow && <Alert click={() => setIsAlertShow(false)} alertName='Przepraszamy' alertDetails='Wiadomości nie udało się wysłać. Proszę skorzystać z innej formy kontaktu' />}
                                {isSpinnerShow && <Spinner />}
                                <div className={style.inputContainer}>
                                    <input onChange={event => setInputName(event.target.value)} value={inputName} onFocus={() => setInputNameIsInvalid(false)} className={`${style.input} ${inputNameIsInvalid && style.inputIsInvalid}`} type='text' required name="name" />
                                    <label className={style.label}>Twoje imię</label>
                                    {inputNameIsInvalid && <p className={style.isValid}>{inputNameIsInvalid}</p>}
                                </div>
                                <div className={style.inputContainer}>
                                    <input onChange={event => setInputEmail(event.target.value)} value={inputEmail} onFocus={() => setInputEmailIsInvalid(false)} className={`${style.input} ${inputEmailIsInvalid && style.inputIsInvalid}`} type='text' required name="email" />
                                    <label className={style.label}>Twój e-mail</label>
                                    {inputEmailIsInvalid && <p className={style.isValid}>{inputEmailIsInvalid}</p>}
                                </div>
                                <div className={style.inputContainer}>
                                    <textarea onChange={event => setInputMessage(event.target.value)} value={inputMessage} onFocus={() => setInputMessageIsInvalid(false)} className={`${style.input} ${inputMessageIsInvalid && style.inputIsInvalid}`} type='textarea' rows='5' required name="message" />
                                    <label className={style.label}>Wiadomość</label>
                                    {inputMessageIsInvalid && <p className={style.isValid}>{inputMessageIsInvalid}</p>}
                                </div>
                                <input className={style.btn} type="submit" value="Wyślij" />
                            </form>
                            <div className={`${style.envelope} ${isFormAnimation && style.envelopeAnim}`}>
                                <Envelope />
                            </div>
                        </div>
                    </section>

                </div>
            </div>

        </main>
    )
}


export default Contact

