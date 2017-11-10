module.exports = ['$scope', function ($scope) {
  $scope.buttons = [
    'A Button',
    'B Button'
  ]
  $scope.hide = false
  $scope.submit = function (btn) {
    console.log({btn})
  }
}]
