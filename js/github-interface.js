// var apiKeyGit = require('./../.env').apiKeyGit;
//
// $(document).ready(function() {
//   $('#userNameInput').click(function() {
//     var username = $('#userName').val();
//     $.get('https://api.github.com/users/' + username + "/repos").then(function(response) {
//       $('.showRepos').append("Username: " + username + "</br>");
//       // for (var i = 0; i < response.length; i++) {
//       //   $('.showRepos').append("Repo Name: " + response[i].name + "</br>");
//       //   $('.showRepos').append("Repo URL: " + response[i].html_url);
//       // }
//       console.log(response);
//     }).fail(function(error) {
//       $('.showRepo').text(error.message);
//     });
//   });
// });

var Repo = function(searchData) {
  this.repoName = searchData.name;
  this.html_url = searchData.html_url;
};

var User = function(searchData) {
  this.avatar_image = '<img src="' + searchData.avatar_url + '" alt="Profile for ' + this.username + '" />';
  this.username = searchData.name;
  this.bio = searchData.bio;
  this.repos = searchData.repos_url;
};

$(document).ready(function(){
  $('#submitUserName').click(function(){
    var userName = $('#userName').val();
    $('#avatarImage').empty();
    $('#userNameDisplay').empty();
    $('#userBio').empty();
    $('#repoInfo').empty();
    $('#userName').val("");
    $.get('https://api.github.com/users/' + userName, function(data) {
      console.log(data);
      var newUser = new User(data);
      $('#avatarImage').append(newUser.avatar_image);
      $('#userNameDisplay').append('<h2>' + newUser.username + '</h2>');
      if (newUser.bio) {
        $('#userBio').append('<h4>Bio:</h4><p> ' + newUser.bio + '</p>');
      }
      if (newUser.repos) {
        $.get(newUser.repos, function(repoData) {
          console.log(repoData);
          $('#userRepos').show();
          for (var index in repoData) {
            $('#repoInfo').append('<tr><td><a href="' + repoData[index].html_url + '">' + repoData[index].name + '</a></td><tr>');
          }
        });
      }
    });
  });
});
