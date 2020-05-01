import jsdi from 'jsdi'

const $log = jsdi.get().$log
const PERSON_MUTATION_FUNCTION = 'PERSON_MUTATION_FUNCTION'

const state = {
  person: {
    firstName: '',
    lastName: ''
  }
}

const getters = {
  getPerson: state => {
    $log.debug('Getting getPerson', state.person)
    return state.person
  }
}

const actions = {
  setPerson ({commit}, personObject) {
    $log.debug('action setPerson')
    commit(PERSON_MUTATION_FUNCTION, personObject)
  }
}

const mutations = {
  [PERSON_MUTATION_FUNCTION] (state, personObject) {
    $log.debug('muttation for ' + PERSON_MUTATION_FUNCTION)
    state.person = personObject
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
