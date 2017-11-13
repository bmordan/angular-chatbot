module.exports = function (app) {
  app.service('bot', require('./bot'))
  app.service('addToMessages', require('./add-to-messages'))
  app.service('timer', require('./timer'))
}
