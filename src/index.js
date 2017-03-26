import './style/main'
import 'babel-polyfill'
import outdated from 'outdated-browser-pro'
import Promise from 'promise-polyfill'

if (!window.Promise) { window.Promise = Promise }
outdated({
  browserSupport: {
    'Chrome': 52, // Includes Chrome for mobile devices
    'Chromium': 52,
    'IE': 10,
    'Safari': 7,
    'Mobile Safari': 7,
    'Firefox': 50
  }
}, (status) => { if (status) { Promise.all([System.import('./app')]).then(() => { console.log('App loaded!') }) } })

