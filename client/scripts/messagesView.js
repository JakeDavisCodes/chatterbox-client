// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function() {
    // TODO: Render _all_ the messages.
  },

  renderMessage: function(message) {
    $('<div message>', {
      username: message.username,
      text: message.text,
      roomname: message.roomname
    }).appendTo(this.$chats);
    // TODO: Render a single message.
  },

  handleClick: function(event) {
    console.log(event);
  }

};