module.exports = [function () {
  this.messages = []

  this.buttons = []

  this.updateFunc = null

  this.registerUpdateFunc = function (fn) {
    this.updateFunc = fn
  }

  this.userInput = function (user, input) {
    this.messages.push({
      msg: input,
      ts: new Date(),
      user: user
    })
  }

  this.botReplies = function (replies) {
    if (!Array.isArray(replies)) replies = [replies]

    replies.forEach(reply => {
      if (hasButtons(reply)) {
        this.buttons = JSON.parse(reply)
      } else  if (reply !== '') {
        this.messages.push({
          msg: reply,
          ts: new Date()
        })
        this.buttons = []
      }

      this.updateFunc()
    })
  }
}]

function hasButtons (reply) {
  try {
    JSON.parse(reply)
  } catch (err) {
    if (err) return false
  }
  return true
}
