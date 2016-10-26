import Ember from 'ember'
import SlotsMixin from 'ember-block-slots'
import layout from '../templates/components/ember-dewey-docs'

export default Ember.Component.extend(SlotsMixin, {
  layout,
  classNames: ['ember-dewey-docs']
})
