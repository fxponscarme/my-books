<template>
<div>
  <table class="table table-bordered table-striped is-hoverable is-narrow is-fullwidth">
      <thead>
        <tr>
          <th>N°</th>
          <th>Cover</th>
          <th>Titre</th>
          <th>Auteurs</th>
          <th>Éditeur</th>
          <th>Isbn</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(book, index) in bookList.Book">
          <th>{{ index }}</th>
          <td>
            <figure class="image is-centered">
              <img :src="book.Link | getSmallCover" alt="">
            </figure>
          </td>
          <td>{{ book.Title }}</td>
          <td>{{ book.Author }}</td>
          <td>{{ book.Editor }}</td>
          <td>{{ book.ISBN }}</td>
        </tr>
      </tbody>
    </table>
</div>
</template>

<script>
import books from './books.json'

export default {
  name: 'books',
  data () {
    return {
      bookList: books.List
    }
  },
  filters: {
    getSmallCover: function (value) {
      if (Array.isArray(value)) {
        const smallCover = value.filter(
          link => (link.LinkName === 'SmallImage')
        )
        return (smallCover.length > 0) ? smallCover[0].LinkURL : undefined
      }
    }
  }
}
</script>

<style scoped>
/* .image {
  width: 50%
} */
</style>
