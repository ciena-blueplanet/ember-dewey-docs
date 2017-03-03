import Ember from 'ember'
const {Controller, Logger, computed, inject, isEmpty} = Ember
// import {addHandler} from 'ember-dewey-docs'

export default Controller.extend({
  notifications: inject.service('notification-messages'),

  placeholder: 'my placeholder',

  source: computed(function () {
    return `{{frost-text
      autofocus= // (false by default)
      disabled= // (false by default)
      hook= // (ember-hook property used in testing)
      placeholder= // an optional placeholder e.g. 'Foo'
    }}`
  }).readOnly(),

  actions: {
    updateProps (val) {
      if (val.id === 'events') {
        if (!isEmpty(val.value)) {
          // val.value.forEach((selectedEvent) => {
          //   this.set('onInputHandler', Object.values(selectedEvent)[0])
          //   // Object.keys(selectedEvent)[0]
          // })
          val.value.forEach((selectedEvent) => {
            this.set(`${selectedEvent}Handler`, () => {
              Logger.log('TESTING')
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
    },
    testHandler () {
      this.get('notifications').success('Handler triggered', {
        autoClear: true,
        clearDuration: 2000
      })
    }
  }
})
