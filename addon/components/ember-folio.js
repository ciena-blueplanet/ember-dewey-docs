import Ember from 'ember'
import SlotsMixin from 'ember-block-slots'
import layout from '../templates/components/ember-folio'

export default Ember.Component.extend(SlotsMixin, {
  layout,
  classNames: ['ember-folio']
})
