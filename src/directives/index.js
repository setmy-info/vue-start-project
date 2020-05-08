import config from '../config'
import { DISPLAY_HIDDEN_WITHOUT_PLACEHOLDER } from '../constants'
/*
* v-feature="'featureName'"
* undefined is OFF
* false is OFF
* true is ON
* */
export const feature = {
  bind (el, binding) {
    if (!config.features[binding.value]) {
      el.style.display = DISPLAY_HIDDEN_WITHOUT_PLACEHOLDER
    }
  }
}
