module.exports = ['$scope', '$timeout', 'addToMessages', 'timer', function ($scope, $timeout, addToMessages, timer) {
  $scope.messages = addToMessages.messages
  $scope.buttons = addToMessages.buttons

  $scope.hide = {
    input: true,
    buttons: true,
    timer: true
  }

  function updateInput () {
    $scope.buttons = addToMessages.buttons
    $scope.hide = {
      input: addToMessages.buttons.length > 0,
      buttons: addToMessages.buttons.length < 1,
      timer: true
    }
  }

  addToMessages.registerUpdateFunc(updateInput)

  // timer
  $scope.$on('timerset', function () {
    $timeout(function () {
      $scope.hide = {
        input: true,
        buttons: true,
        timer: false
      }
    })
  })

  // timer
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
