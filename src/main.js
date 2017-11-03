/* global angular */
const RiveScript = require('rivescript')
const Timer = require('simple-countdown')
const chat = angular.module('chat', [])
const bot = new RiveScript()

bot.loadFile('brain/welcome.rive', function (batch) {
  bot.sortReplies()

  chat.controller('channel', ['$scope', '$timeout', function ($scope, $timeout) {
    $scope.welcome = 'Channel'
    $scope.input = ''
    $scope.btns = null
    $scope.timer = null
    $scope.messages = [
      {
        msg: 'Hi I\'m a bot you can talk to me'
      }
    ]
    $scope.onSubmit = function () {
      addToMessages({
        msg: $scope.input,
        user: 'local_user'
      })

      const reply = bot.reply('local_user', $scope.input, $scope)
      const replies = reply.split('->')

      replies.forEach((msg, i) => {
        isButtons(msg) ? displayButtons(msg) : addToMessages({msg}, i + 1)
      })

      $scope.input = ''
    }
    $scope.onBtnSubmit = function (btn) {
      if (btn !== 'cancel') return $scope.timer.start()
      $scope.btns = null
    }
    $scope.setTimer = function (time) {
      displayButtons('["start timer", "cancel"]')

      $scope.timer = new Timer(time)
      $scope.timer.on('start', onStartTimer)
      $scope.timer.on('tick', onTick)
      $scope.timer.on('finish', onFinish)
    }

    function onStartTimer (time) {
      $scope.messages.push({
        msg: time.formatted
      })
    }

    function onTick (time) {
      console.log(time.formatted)
    }

    function onFinish (time) {
      addToMessages({ msg: 'timer completed', user: 'local_user' })
      $scope.timer = null
      $scope.btns = null
    }

    function displayButtons (reply) {
      $scope.btns = JSON.parse(reply)
    }

    function addToMessages (msg, delay) {
      if (!msg.msg) return
      delay = delay || 0

      $timeout(function () {
        $scope.messages.push(msg)
      }, 900 + (900 * delay))
    }

    function isButtons (reply) {
      try {
        JSON.parse(reply)
      } catch (err) {
        if (err) return false
      }
      return true
    }

    addToMessages({
      msg: 'Try typing something like "hi"'
    })
  }])
}, function (err) {
  console.error(err)
})
