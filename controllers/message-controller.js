module.exports = ['$scope', 'addToMessages', function ($scope, addToMessages) {
  $scope.messages = addToMessages.messages
  $scope.hideInput = addToMessages.hideInput
  $scope.hideButtons = addToMessages.hideButtons
}]
