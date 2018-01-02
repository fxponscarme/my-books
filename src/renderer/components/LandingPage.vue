<template>
<div class="window">
  <div class="window-content">
    <SideBar/>
    <ContentPane currentPane='Search'/>
  </div>
</div>
</template>

<script>
import SideBar from './LandingPage/SideBar'
import ContentPane from './LandingPage/ContentPane'

export default {
  name: 'landing-page',
  components: {
    SideBar,
    ContentPane
  },
  data () {
    return {
      searchIsbn: null
    }
  },
  methods: {
    open (link) {
      this.$electron.shell.openExternal(link)
    },
    onSubmit () {
      console.log('look for ' + this.searchIsbn)
    }
  }
}
</script>

<style>
.icon {
  display: -webkit-inline-box
}
</style>
