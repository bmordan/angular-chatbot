module.exports = ['$scope', function ($scope) {
  $scope.input = ''
  $scope.hide = true
  $scope.submit = function () {
    const input = $scope.input
    console.log({input})
    $scope.input = ''
  }
}]
