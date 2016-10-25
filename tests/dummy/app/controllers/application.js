import Ember from 'ember'

export default Ember.Controller.extend({
  size: 'medium',
  priority: 'primary',
  text: 'Hello',

  actions: {
    updateProps (val) {
      console.log(val)
      if (Ember.typeOf(val) === 'object') {
        this.set(val.id.toLowerCase(), val.value)
      }
    }
  }
})
