import Ember from 'ember'
const {Component, inject} = Ember
import ControlsPane from 'ember-dewey-docs/components/controls-pane'
import layout from '../templates/components/property-control'

export default Component.extend({
  notifications: inject.service('notification-messages'),
  layout,
  classNames: ['property-control'],

  init () {
    this._super(...arguments)
    this.set('_controlsPane', this.nearestOfType(ControlsPane))
  },

  actions: {
    onButtonClick (event) {
      this.get('_controlsPane').onChange({'id': this.get('label'), 'value': event.target.hash.split('-')[1]})
    },
    onEventSelect (data) {
      // let context = this
      // let results = A()
      // data.forEach((selectedEvent) => {
      //   const handlerName = `${selectedEvent}Handler`
      //   // Ember.set(this, `${handlerName}`, function () {
      //   //   // context.get('notifications').success(`${handlerName} triggered.`, {
      //   //   //   autoClear: true,
      //   //   //   clearDuration: 2000
      //   //   // })
      //   // })
      //   let obj = {}
      //   obj[handlerName] = function () {
      //     console.log('HIHIHIHI') // use generic js arguments param in notifications
      //   }
      //   results.push(obj)
      // })
      this.get('_controlsPane').onChange({'id': 'events', 'value': data})
    },

    onTextChange (event) {
      this.get('_controlsPane').onChange({'id': this.get('label'), 'value': event.target.value})
    }
  }
})
