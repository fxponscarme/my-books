<template>
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
</template>

<script>
  export default {
    name: 'sidebar'
  }
</script>

<style scoped>
  .icon {
    display: -webkit-inline-box
  }
</style>
