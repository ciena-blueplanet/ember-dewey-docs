import {expect} from 'chai'
import {
  describeComponent,
  it
} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describeComponent(
  'ember-dewey-docs',
  'Integration: EmberDeweyDocsComponent',
  {
    integration: true
  },
  function () {
    it('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#ember-dewey-docs}}
      //     template content
      //   {{/ember-dewey-docs}}
      // `);

      this.render(hbs`{{ember-dewey-docs}}`)
      expect(this.$()).to.have.length(1)
    })
  }
)
