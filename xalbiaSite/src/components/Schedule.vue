<template>
  <div class="container schedule">

    <div class="jumbotron">
      <h2> Stream Schedule </h2>
      <table class="table">
        <thead>
        <tr>
          <th>Day</th>
          <th>Start Time</th>
          <th>End Time</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(schedule, index) in schedules" :key="index">
          <td>{{ schedule.day }}</td>
          <td>{{ schedule.start }}</td>
          <td>{{ schedule.end }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { scheduleRef } from '../Firebase.js'

export default {
  name: 'schedule',
  data () {
    return {
      schedules: {}
    }
  },
  firebase: {
    schedules: scheduleRef
  }
}
</script>
