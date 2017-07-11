import {expect} from 'chai'
import NotificationsService from 'ember-cli-notifications/services/notification-messages-service'
import hbs from 'htmlbars-inline-precompile'
import {beforeEach, describe, it} from 'mocha'

import {integration} from 'dummy/tests/helpers/ember-test-utils/setup-component-test'

const test = integration('property-control')
describe(test.label, function () {
  test.setup()

  beforeEach(function () {
    this.register('service:notification-messages', NotificationsService)
    this.inject.service('notification-messages', {as: 'notifications'})

    this.render(hbs`{{property-control}}`)
  })

  it('renders', function () {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#property-control}}
    //     template content
    //   {{/property-control}}
    // `);

    expect(this.$()).to.have.length(1)
  })
})
