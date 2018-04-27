<template>
  <div class="container">

  </div>
</template>

<script>
// const firebase = require("firebase/app")
// require("firebase/database")

// let config = {
// apiKey: 'AIzaSyAwWKXbz0KXfWDCAcuFKDu3SwkAHru1Vig',
// authDomain: 'xalbia-7e612.firebaseapp.com',
// databaseURL: 'https://xalbia-7e612.firebaseio.com',
// projectId: 'xalbia-7e612',
// storageBucket: 'xalbia-7e612.appspot.com',
// messagingSenderId: '161776545195'
// }

// let app = firebase.initializeApp(config)

// let db = app.database()

// let scheduleRef = db.ref('schedule')

export default {
  name: 'schedule',
  data () {
    return {
      schedules: {}
    }
  },
  firebase: {
    // schedules: scheduleRef
  }
}
</script>
