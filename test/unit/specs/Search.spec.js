import Vue from 'vue'
import Search from '@/components/LandingPage/ContentPane/Search'

describe('Search.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h(Search)
    }).$mount()

    expect(vm.$el.querySelector('.title').textContent).to.contain('Add your new Book !')
  })
})
