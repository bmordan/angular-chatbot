module.exports = ['$scope', '$timeout', 'timer', 'addToMessages', function ($scope, $timeout, timer, addToMessages) {
  $scope.timer = timer
  $scope.display = {time: null}
  $scope.running = false
  $scope.onStart = function () {
    $scope.timer.instance.start()
    $scope.running = true
  }
  $scope.$on('tick', function (evt, time) {
    $timeout(function () {
      $scope.display = {time: time.formatted}
    })
  })
  $scope.$on('finish', function (evt) {
    const mins = getMinutes($scope.timer.instance.duration)
    const secs = getSeconds($scope.timer.instance.duration)
    const msg = `You meditated for ${mins} minute${mins === 1 ? '' : 's'} and ${secs} second${secs === 1 ? '' : 's'}`
    $timeout(function () {
      $scope.running = false
      addToMessages.botReplies(msg)
      $scope.timer.instance = null
    })
  })
}]

function getMinutes (milliseconds) {
  return Math.round((milliseconds / (1000 * 60)) % 60)
}

function getSeconds (milliseconds) {
  return Math.round((milliseconds / 1000) % 60)
}
