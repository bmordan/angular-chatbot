const RiveScript = require('rivescript')

module.exports = ['$timeout', 'addToMessages', function ($timeout, addToMessages) {
  const self = this
  this._bot = new RiveScript()

  this._bot.loadFile([
    'scripts/main.rive'
  ], () => {
    this._bot.sortReplies()
    $timeout(function () {
      addToMessages.botReplies([
        'Hello',
        'I am a bot that can help you meditate',
        'I\'m going to show you my timer',
        'type "set a timer"'
      ])
    }, 500)
  })
  this.sendInput = function (user, str) {
    addToMessages.userInput(user, str)
    const replies = self._bot.reply(user, str, this).split('->')
    if (!replies.length) return
    addToMessages.botReplies(replies)
  }
}]
