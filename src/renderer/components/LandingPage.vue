<template>
<div class="window">
  <div class="window-content">
    <div class="pane-group">
      <div class="pane-sm sidebar">
        <nav class="nav-group">
          <h5 class="nav-group-title">Favorites</h5>
          <a class="nav-group-item active">
            <span class="icon icon-book"></span>
            Library
          </a>
          <span class="nav-group-item">
              <span class="icon icon-download"></span> Add a Book
          </span>
          <span class="nav-group-item">
              <span class="icon icon-archive"></span> Collections
          </span>
          <span class="nav-group-item">
              <span class="icon icon-tools"></span>
              Preferences
          </span>
        </nav>
      </div>
      <div class="pane">
        <section class="section">
          <div class="container-fluid">
            <div class="title">
              Welcome to your new project!
            </div>
            <div class="columns is-mobile is-centered">
              <div class="column is-one-quarter">
                <div class="field has-addons">
                  <div class="control">
                    <input class="input" type="text" v-model="searchIsbn" placeholder="Find a book">
                  </div>
                  <div class="control">
                    <a class="button is-light" @click="onSubmit">
                        Search
                      </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import SystemInformation from './LandingPage/SystemInformation'

export default {
  name: 'landing-page',
  components: {
    SystemInformation
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
