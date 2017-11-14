module.exports = ['$scope', '$timeout', 'addToMessages', 'timer', function ($scope, $timeout, addToMessages, timer) {
  $scope.messages = addToMessages.messages
  $scope.hide = {
    input: true,
    buttons: true,
    timer: true
  }

  $scope.$on('start', function () {
    $timeout(function () {
      $scope.hide = {
        input: true,
        buttons: true,
        timer: false
      }
    })
  })

  $scope.$on('finish', function () {
    $timeout(function () {
      $scope.hide = {
        input: true,
        buttons: true,
        timer: false
      }
    })
  })
}]
