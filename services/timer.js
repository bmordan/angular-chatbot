const Timer = require('simple-countdown')

module.exports = ['$rootScope', function ($rootScope) {
  this.instance = null
  this.setTimer = (time) => {
    this.instance = new Timer(time)
    this.instance.on('tick', function (time) {
      $rootScope.$broadcast('tick', time)
    })
    this.instance.on('finish', function (time) {
      $rootScope.$broadcast('finish', time)
    })
  }
}]
