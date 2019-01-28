import '../assets/styles/main.scss';

import React from 'react';
import { render } from "react-dom";
import { Provider } from "react-redux";

import { IntlProvider, addLocaleData } from 'react-intl';
import en from "react-intl/locale-data/en";
import de from "react-intl/locale-data/de";
import locales from "./locales/locales";

import store from "./redux/store";
import App from './components/Layout/App';

addLocaleData([...en, ...de]);
const currentLocale = "de"

render(
  <Provider store={store}>
    <IntlProvider locale={currentLocale} messages={locales[currentLocale]}>
      <App/>
    </IntlProvider>
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();