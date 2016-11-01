import { expect } from 'chai'
import {
  describeComponent,
  it
} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describeComponent(
  'property-control',
  'Integration: PropertyControlComponent',
  {
    integration: true
  },
  function () {
    it('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#property-control}}
      //     template content
      //   {{/property-control}}
      // `);

      this.render(hbs`{{property-control}}`)
      expect(this.$()).to.have.length(1)
    })
  }
)
