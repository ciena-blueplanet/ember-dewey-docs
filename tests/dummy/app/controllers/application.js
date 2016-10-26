import Ember from 'ember'

export default Ember.Controller.extend({
  notifications: Ember.inject.service('notification-messages'),

  size: 'medium',
  priority: 'primary',
  text: 'Hello',
  data: [
    {
      label: 'onClick',
      value: 'onClick'
    }
  ],

  actions: {
    updateProps (val) {
      if (Ember.typeOf(val) === 'object') {
        if (val.id === 'events') {
          if (!Ember.isEmpty(val.value)) {
            val.value.forEach((selectedEvent) => {
                this.set(`${selectedEvent}Handler`, () => {
                  this.get('notifications').success(`${selectedEvent}Handler triggered.`, {
                    autoClear: true,
                    clearDuration: 2000
                  })
                })
              })
          } else {
            this.set('onClickHandler', null)
          }
        } else {
          this.set(val.id.toLowerCase(), val.value)
        }
      }
    }
  }
})
