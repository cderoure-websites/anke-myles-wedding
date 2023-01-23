import React, { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Welcome from './components/Welcome';
import Story from './components/Story';
import TheDay from './components/TheDay';
import Accommodation from './components/Accommodation';
import RSVP from './components/RSVP';
import Quiz from './components/Quiz';
import Contact from './components/Contact';

import PAGES from './constants/pages.js'

import './App.css';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [tab, setTab] = useState('Home');
  const [loading, setLoading] = useState(false);

  const handleSuccessfulLogin = () => {
    // display the loading screen
    setLoading(true);

    // log the user in
    setTimeout(() => {
      setLoggedIn(true);
    }, 1000);

    // remove the loading screen
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  const handleUnsuccessfulLogin = () => {
    setLoggedIn(false);
    setLoginError(true);
  };

  const handleTabChange = (id) => {
    window.scrollTo(0, 0);
    setTab(id);
  };

  return (
    <div className="app">
      <div className="app-content">
        {loginError && <div>Error loggin in</div>}

        {loading && (
          <div className="app-loading">
            <div class="lds-heart"><div></div></div>
          </div>
        )}

        {loggedIn ? (
          <>
          <Header selectedTab={tab} loggedIn={loggedIn} changeTab={handleTabChange} />
          <div className="app-page">
            {tab === PAGES.HOME && <Welcome onClickRSVP={() => setTab(PAGES.RSVP)}/>}
            {tab === PAGES.STORY && <Story />}
            {tab === PAGES.DAY && <TheDay />}
            {tab === PAGES.ACCOMMODATION && <Accommodation />}
            {tab === PAGES.RSVP && <RSVP />}
            {tab === PAGES.QUIZ && <Quiz />}
            {tab === PAGES.CONTACT && <Contact />}
          </div>
          </>
        ) : (
          <Login
            onLoginSuccess={handleSuccessfulLogin}
            onLoginFail={handleUnsuccessfulLogin}
          />
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;
