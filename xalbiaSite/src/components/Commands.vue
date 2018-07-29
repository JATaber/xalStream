<template>
  <div class="container commands">
    <h2 class="header">Chat Commands</h2>
    <div class="jumbotron themeTable">
      <h3>Theme Songs</h3>
      <table class="table">
        <thead>
        <tr>
          <th>Command</th>
          <th>Hint</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(schedule, index) in themes" :key="index">
          <td>{{ schedule.command }}</td>
          <td>{{ schedule.hint }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="jumbotron warnTable">
      <h3>Warning Sounds</h3>
      <table class="table">
        <thead>
        <tr>
          <th>Command</th>
          <th>Hint</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(schedule, index) in warnings" :key="index">
          <td>{{ schedule.command }}</td>
          <td>{{ schedule.hint }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="jumbotron songTable">
      <h3>Songs</h3>
      <table class="table">
        <thead>
        <tr>
          <th>Command</th>
          <th>Hint</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(schedule, index) in songs" :key="index">
          <td>{{ schedule.command }}</td>
          <td>{{ schedule.hint }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="jumbotron celeTable">
      <h3>Celebration Sounds</h3>
      <table class="table">
        <thead>
        <tr>
          <th>Command</th>
          <th>Hint</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(schedule, index) in celebrate" :key="index">
          <td>{{ schedule.command }}</td>
          <td>{{ schedule.hint }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="jumbotron sfxTable">
      <h3>Sound Effects</h3>
      <table class="table">
        <thead>
        <tr>
          <th>Command</th>
          <th>Hint</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(schedule, index) in sounds" :key="index">
          <td>{{ schedule.command }}</td>
          <td>{{ schedule.hint }}</td>
        </tr>
        </tbody>
      </table>
    </div>
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
