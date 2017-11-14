module.exports = [function () {
  this.messages = []

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
      if (reply !== '') {
        this.messages.push({
          msg: reply,
          ts: new Date()
        })
      }
    })
  }
}]
