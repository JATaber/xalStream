<template>
  <div class="container">
    <h2> Stream Schedule </h2>

    <div class="jumbotron">
      <table class="table table-striped">
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
