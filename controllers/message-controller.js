module.exports = ['$scope', 'addToMessages', 'timer', function ($scope, addToMessages, timer) {
  $scope.messages = addToMessages.messages
  $scope.hideInput = addToMessages.hideInput
  $scope.hideButtons = addToMessages.hideButtons
}]
