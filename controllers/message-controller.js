module.exports = ['$scope', 'addToMessages', function ($scope, addToMessages) {
  console.log(addToMessages.messages)
  $scope.messages = addToMessages.messages
  $scope.hideInput = addToMessages.hideInput
  $scope.hideButtons = addToMessages.hideButtons
}]
