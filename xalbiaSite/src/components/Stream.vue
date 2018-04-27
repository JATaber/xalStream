<template>
  <div class="container">

    <twitch-player class="player" width="100%" height="100%"
                   :channel="channel"
    ></twitch-player>
    <iframe frameborder="0"
            scrolling="true"
            id="xalbia"
            src="http://www.twitch.tv/embed/xalbia/chat"
            width="100%"
            height="500"
    ></iframe>
  </div>
</template>

<script>
import VueTwitchPlayer from 'vue-twitch-player'
import TwitchPlayer from "../../node_modules/vue-twitch-player/TwitchPlayer.vue";

export default {
  components: {
    TwitchPlayer

  },
  data () {
    return {
      channel: 'xalbia'
    }
  }
}
</script>
