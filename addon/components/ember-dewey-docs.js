import Ember from 'ember'
const {Component} = Ember
import SlotsMixin from 'ember-block-slots'
import layout from '../templates/components/ember-dewey-docs'

export default Component.extend(SlotsMixin, {
  layout,
  classNames: ['ember-dewey-docs']
})
