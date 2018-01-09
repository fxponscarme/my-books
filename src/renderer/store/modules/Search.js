import axios from 'axios'

const state = {
  isLoading: false,
  error: null,
  book: {
    id: null,
    title: null,
    isbn_10: null,
    isbn_13: null,
    cover: null,
    authors: null,
    description: null,
    publisher: null,
    date: null,
    numberOfPages: null,
    id_worldcat: null,
    id_google: null,
    ASIN: null
  }
}

const mutations = {
  START_LOADING (state) {
    state.isLoading = true
  },
  BOOK_G_FOUND (state, book) {
    state.isLoading = false
    state.result = book
    state.book.title = book.volumeInfo.title
    state.book.authors = book.volumeInfo.authors
    state.book.description = book.volumeInfo.description
    state.book.date = book.volumeInfo.publishedDate
    state.book.id_google = book.id
  },
  BOOK_OL_FOUND (state, coverUrl) {
    state.isLoading = false
    state.book.cover = coverUrl
  },
  BOOK_NOT_FOUND (state, error) {
    state.isLoading = false
    state.error = error
  }
}

const actions = {
  getBookWithGoogleAPI ({commit, state}, searchIsbn) {
    console.log('START_LOADING : ' + searchIsbn)
    commit('START_LOADING')
    axios.get('https://www.googleapis.com/books/v1/volumes?q=isbn:' + searchIsbn, {
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      let book = null
      if (response.data) {
        console.log('RESPONSE : ' + response)

        book = response.data.items[0]
      }
      commit('BOOK_G_FOUND', book)
    }).catch(error => {
      commit('BOOK_NOT_FOUND', {error})
    })
  },

  getCoverFromOpenLibrary ({commit, state}, searchIsbn) {
    console.log('START_LOADING COVER : ' + searchIsbn)
    commit('START_LOADING')
    axios.get('https://openlibrary.org/api/books?format=json&bibkeys=ISBN:' + searchIsbn, {
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      let imageUrl = {}
      if (response.data) {
        console.log('RESPONSE : ' + response.data)
        imageUrl = response.data['ISBN:' + searchIsbn].thumbnail_url
      }
      commit('BOOK_OL_FOUND', imageUrl)
    }).catch(error => {
      console.log(error)
    })
  }
}

export default {namespaced: true, state, mutations, actions}
