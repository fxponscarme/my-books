<template>
<div class="pane">
  <component :is="currentPane">
  </component>
</div>
</template>

<script>
import Books from './ContentPane/Books'
import Search from './ContentPane/Search'
import SystemInformation from './ContentPane/SystemInformation'

import {
  mapState
} from 'vuex'

export default {
  name: 'content-pane',
  components: {
    Books,
    Search,
    SystemInformation
  },
  data () {
    return {
      panes: [Search, SystemInformation]
    }
  },
  computed: {
    ...mapState('Application', {
      currentPane: state => state.currentPane
    })
  }
}
</script>

<style scoped>
</style>
