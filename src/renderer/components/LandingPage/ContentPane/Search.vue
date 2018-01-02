<template>
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
</template>

<script>
  export default {
    name: 'search',
    data () {
      return {
        searchIsbn: null
      }
    },
    methods: {
      onSubmit () {
        console.log('look for ' + this.searchIsbn)
      }
    }
  }
</script>

<style scoped>
</style>
