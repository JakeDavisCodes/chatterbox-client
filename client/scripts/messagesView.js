// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    this.render();
  },

  render: function() {
    let msgs = document.getElementsByClassName('message');
    console.log(msgs);

  },

  renderMessage: function(message) {
    let msg = $('<div message>', message);
    console.log(msg);
    // msg.addEventListener('click', function() {
    //   friends.toggleStatus();
    // });
    msg.appendTo(this.$chats);
    console.log(this.$chats[0]);
    // TODO: Render a single message.
  },

  handleClick: function(event) {
    console.log(event);
  }

};