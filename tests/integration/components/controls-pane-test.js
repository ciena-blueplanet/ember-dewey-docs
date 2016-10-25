import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('controls-pane', 'Integration | Component | controls pane', {
  integration: true
})

test('it renders', function (assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{controls-pane}}`)

  assert.equal(this.$().text().trim(), '')

  // Template block usage:
  this.render(hbs`
    {{#controls-pane}}
      template block text
    {{/controls-pane}}
  `)

  assert.equal(this.$().text().trim(), 'template block text')
})
