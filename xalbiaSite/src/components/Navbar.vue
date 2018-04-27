<template>
  <b-navbar class="nav" toggleable="md">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand href="/">
      <img class="logo" src="../assets/images/Profile.png" alt="logo">
    </b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav pills>
        <b-nav-item id="item" :class="{ 'active': $route.path == '/about' }" href="/about">About</b-nav-item>
        <b-nav-item id="item" :class="{ 'active': $route.path == '/schedule' }" href="/schedule">Schedule</b-nav-item>
        <b-nav-item id="item" :class="{ 'active': $route.path == '/commands' }" href="/commands">Commands</b-nav-item>
        <b-nav-item id="item" :class="{ 'active': $route.path == '/contact' }" href="/contact">Contact</b-nav-item>
        <b-nav-item id="item" :class="{}" href="/stream">Stream</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
module.export = {
  name: 'navbar',
  methods: {
    activate () {
      this.active = !this.active
    }
  },
  data () {
    return {
      active: false
    }
  }
}
</script>
