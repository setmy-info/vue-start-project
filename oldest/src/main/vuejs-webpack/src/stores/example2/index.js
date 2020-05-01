import jsdi from 'jsdi'

const $log = jsdi.get().$log
const ROLE_MUTATION_FUNCTION = 'ROLE_MUTATION_FUNCTION'

const state = {
  roles: []
}

const getters = {
  getRoles: state => {
    $log.debug('Getting getRoles', state.roles)
    return state.roles
  }
}

const actions = {
  setRoles ({commit}, rolesArray) {
    $log.debug('action rolesArray')
    commit(ROLE_MUTATION_FUNCTION, rolesArray)
  }
}

const mutations = {
  [ROLE_MUTATION_FUNCTION] (state, rolesArray) {
    $log.debug('muttation for ' + ROLE_MUTATION_FUNCTION)
    state.roles = rolesArray
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
