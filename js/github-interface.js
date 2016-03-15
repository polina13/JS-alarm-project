var apiKeyGit = require('./../.env').apiKeyGit;

$(document).ready(function() {
  $('#userNameInput').click(function() {
    var username = $('#userName').val();
    $.get('https://api.github.com/users/' + username).then(function(response) {
      $('.showName').append("The Username: " + username)
      $('.showURL').append("Github URL: " + response.html_url);
      console.log(response);
    }).fail(function(error) {
      $('.showRepo').text(error.message);
    });
  });
});
