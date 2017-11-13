module.exports = function (app) {
  app.controller('messageController', require('./message-controller'))
  app.controller('inputController', require('./input-controller'))
  app.controller('buttonController', require('./button-controller'))
  app.controller('timerController', require('./timer-controller'))
}
