import Ember from 'ember'
const {Component} = Ember
import layout from '../templates/components/code-pane'

export default Component.extend({
  layout,
  classNames: ['code-pane']
})
