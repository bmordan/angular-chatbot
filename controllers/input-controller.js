module.exports = ['$scope', 'bot', function ($scope, bot) {
  $scope.input = ''
  $scope.submit = function () {
    if ($scope.input === '') return
    bot.sendInput('local_user', $scope.input)
    $scope.input = ''
  }
}]
