<template>
<div class="pane">
  <component :is="currentPane">
  </component>
</div>
</template>

<script>
import Search from './ContentPane/Search'
import SystemInformation from './ContentPane/SystemInformation'

export default {
  name: 'content-pane',
  props: [
    'currentPane'
  ],
  components: {
    Search,
    SystemInformation
  },
  data () {
    return {
      // currentPane: Search,
      panes: [Search, SystemInformation]
    }
  }
}
</script>

<style scoped>
</style>
