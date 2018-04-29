<template>
  <div class="container">
  </div>
</template>

<script>
import { celebRef, themeRef, warnRef, songRef, soundRef } from '../Firebase'

export default {
  name: 'commands',
  data () {
    return {
      themes: {},
      warnings: {},
      songs: {},
      celebrate: {},
      sounds: {}
    }
  },
  firebase: {
    themes: themeRef,
    warnings: warnRef,
    songs: songRef,
    celebrate: celebRef,
    sounds: soundRef
  }
}
</script>
