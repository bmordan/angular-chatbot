const angular = require('angular')
const app = angular.module('app', [])

require('./controllers')(app)
require('./directives')(app)
require('./services')(app)
