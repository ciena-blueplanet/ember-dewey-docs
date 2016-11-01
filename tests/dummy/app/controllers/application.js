import Ember from 'ember'
const {
  Controller,
  inject,
  isEmpty,
  typeOf
} = Ember

export default Controller.extend({
  notifications: inject.service('notification-messages'),

  size: 'medium',
  priority: 'primary',
  text: 'Hello',
  label: 'my checkbox',
  data: [
    {
      label: 'onClick',
      value: 'onClick'
    }
  ],

  actions: {
    updateProps (val) {
      if (typeOf(val) === 'object') {
        if (val.id === 'events') {
          if (!isEmpty(val.value)) {
            val.value.forEach((selectedEvent) => {
              this.set(`${selectedEvent}Handler`, () => {
                this.get('notifications').success(`${selectedEvent}Handler triggered.`, {
                  autoClear: true,
                  clearDuration: 2000
                })
              })
            })
          } else {
            this.set('onInputHandler', null)
            this.set('onBlurHandler', null)
          }
        } else {
          this.set(val.id.toLowerCase(), val.value)
        }
      }
    }
  }
})
