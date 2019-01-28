import React, { Component } from 'react';
import { BulmaStyledTheme } from 'bulma-styled-components'
import { HashRouter } from "react-router-dom";
import { Routes } from './routes'
import { Header } from './components/Header'
import { NotificationBay } from './components/NotificationBay'
import { Digimon } from './Data/Objects';

type State = {
  digimon: Digimon[]
}

const ThemeOverrides = {
  primary: '#0A5',
  'tabs-link-active-color': '#0A5',
  'tabs-boxed-link-active-background-color': '#dbdbdb',
  'tabs-link-color': '#f5f5f5'
}


class App extends Component<{}, State> {
  render() {
    return (
      <BulmaStyledTheme overrides={ThemeOverrides}>
        <HashRouter>
          <div className="has-background-grey-light" style={{ minHeight: '100vh' }}>
            <Header />
            <Routes/>
            <NotificationBay />
          </div>
        </HashRouter>
      </BulmaStyledTheme>
    );
  }
}

const body = document.querySelector('body')
body && body.classList.add('has-navbar-fixed-top')

export default App;
