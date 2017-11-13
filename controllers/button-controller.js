module.exports = ['$scope', 'bot', function ($scope, bot) {
  $scope.buttons = [
    'Hi',
    'Set a Timer'
  ]
  $scope.submit = function (btn) {
    bot.sendInput('local_user', btn)
  }
}]
