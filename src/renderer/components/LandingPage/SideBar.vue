<template>
  <div class="pane-sm sidebar">
    <nav class="nav-group">
      <h5 class="nav-group-title">Favorites</h5>
      <a  class="nav-group-item"
          :class="{'active': currentPane === 'Books'}"
          @click="updatePane('Books')">
        <span class="icon icon-book"></span>
        Library
      </a>
      <span class="nav-group-item"
            :class="{'active': currentPane === 'Search'}"
            @click="updatePane('Search')">
          <span class="icon icon-download"></span> Add a Book
      </span>
      <span class="nav-group-item" @click="updatePane('Search')">
          <span class="icon icon-archive"></span> Collections
      </span>
      <a class="nav-group-item"
          :class="{'active': currentPane === 'SystemInformation'}"
          @click="updatePane('SystemInformation')" >
          <span class="icon icon-tools"></span>
          Preferences
      </a>
    </nav>
  </div>
</template>

<script>

import {
  mapState,
  mapActions
} from 'vuex'

export default {
  name: 'sidebar',
  methods: {
    onSubmit (newPane) {
      console.log('Go to ' + newPane)
      this.updatePane(newPane)
    },
    ...mapActions('Application', [
      'updatePane'
    ])
  },
  computed: {
    ...mapState('Application', {
      currentPane: state => state.currentPane
    })
  }
}
</script>

<style scoped>
  .icon {
    display: -webkit-inline-box
  }
</style>
