import Vue from 'vue'
import root from '@views/root'

describe('root.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(root);
    expect(Constructor).toBeDefined();
    const vm = new Constructor().$mount();
    expect(vm).toBeDefined();
    const h1 = vm.$el.querySelector('.root h1');
    expect(h1).toBeDefined();
    expect(h1.textContent).toBeDefined();
    expect(h1.textContent).toBe('Welcome to Your Vue.js App');
    expect(true).toBe(true);
  })
})
