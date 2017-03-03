import Ember from 'ember'
const {Router} = Ember

import config from './config/environment'

const AppRouter = Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
})

Router.map(function () {
})

export default AppRouter
