const state = {
  currentPane: 'Search'
}

const mutations = {
  UPDATE_CURRENT_PANE (state, newPane) {
    state.currentPane = newPane
  }
}

const actions = {
  updatePane ({ commit }, newPane) {
    // do something async
    commit('UPDATE_CURRENT_PANE', newPane)
  }
}

export default {
  state,
  mutations,
  actions
}
