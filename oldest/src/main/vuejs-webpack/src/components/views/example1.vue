<template>
    <div class="example1">
        <h1>{{vuexText}}</h1>
        {{person.firstName}} {{person.lastName}} have roles: {{roles}}<br>
        jsdi.get().storeService.setPerson({firstName: 'Peeter', lastName: 'Meeter'});<br>
        jsdi.get().storeService.setRoles(['Imperator']);<br>
        <h1>{{modelText}}</h1>
        {{personModel.person.firstName}} {{personModel.person.lastName}} have roles: {{roleModel.roles}}<br>
        jsdi.get().personService.setPerson({firstName: 'Peeter', lastName: 'Meeter'});<br>
        jsdi.get().roleService.setRoles(['Imperator']);<br>
        
        {{'Hello ${world} ${world}' | placeHolders({world: 'World'})}}<br>
        {{123400 | inCurrency('EUR')}}<br>
        
    </div>
</template>

<script>

import {store} from '@stores'
import jsdi from 'jsdi'

export default {
  name: 'example1',
  dependencies: ['personService', 'roleService', '$log'],
  data () {
    return {
      vuexText: 'Vuex based example',
      modelText: 'Model based example',
      personModel: jsdi.get().personService.personModel,
      roleModel: jsdi.get().roleService.roleModel
    }
  },
  computed: {
    person () {
      return store.getters.getPerson
    },
    roles () {
      return store.getters.getRoles
    }
  },
  created: function () {
    this.$log.debug('examlpe1.vue initialized!!!')
    store.dispatch('setPerson', {firstName: 'Peeter', lastName: 'Esimene'})
  }
}
</script>

<style scoped>

</style>
