import Firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyAwWKXbz0KXfWDCAcuFKDu3SwkAHru1Vig',
  authDomain: 'xalbia-7e612.firebaseapp.com',
  databaseURL: 'https://xalbia-7e612.firebaseio.com',
  projectId: 'xalbia-7e612',
  storageBucket: 'xalbia-7e612.appspot.com',
  messagingSenderId: '161776545195'
}

const app = Firebase.initializeApp(config)

const db = app.database()

export const scheduleRef = db.ref('schedule')
export const celebRef = db.ref('celebrateSounds')
export const themeRef = db.ref('themeSounds')
export const warnRef = db.ref('warningSounds')
export const songRef = db.ref('songSounds')
export const soundRef = db.ref('soundfxSounds')
