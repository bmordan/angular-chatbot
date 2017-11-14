module.exports = ['$scope', 'bot', function ($scope, bot) {
  $scope.submit = function (btn) {
    bot.sendInput('local_user', btn)
  }
}]
