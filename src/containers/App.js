import React, { useEffect } from 'react'
import { HashRouter, BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// aos
import AOS from 'aos'
import 'aos/dist/aos.css'

// components
import Nav from "../components/Nav/Nav";
import Contact from '../components/Contact/Contact'
import About from '../components/About/About'
import Offer from '../components/Offer/Offer'
import Realizations from '../components/Realizations/Realizations'
import PrivacyPolicy from '../components/PrivacyPolicy/PrivacyPolicy'
import AlertPrivacy from '../UI/AlertPrivacy/AlertPrivacy'
import Footer from "../components/Footer/Footer"


const App = () => {

  // aos init
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [])


  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path='/about' component={About} />
        <Route path='/offer' component={Offer} />
        <Route path='/realizations' component={Realizations} />
        <Route path='/contact' component={Contact} />
        <Route path='/privacy-policy' component={PrivacyPolicy} />
        <Redirect to='/about' />
      </Switch>
      <AlertPrivacy />
      <Footer />
    </BrowserRouter >
  );
}



export default App;
