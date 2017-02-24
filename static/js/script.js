(function() {

}).call(this);

$("#send_name").on('click', function() {

  $.ajax({
  url: "https://api-lookup.dartmouth.edu/v1/lookup",
  type: "get", //send it through get method
  data: {
    q: $("#sendName").val(),
    includeAlum: true,
  },
  success: function(response) {
    for (var i = 0; i < response.users.length; i++) {
      var person = response.users[i];
      console.log(person);
      $(".people").append(person.displayName + '\t' + person.mail + '<br>');
    }
    console.log(response)
  },
  error: function(xhr) {
    //Do Something to handle error
  }
});
    // console.log($("#sendName").val());
});
