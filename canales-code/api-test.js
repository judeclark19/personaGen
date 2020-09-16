$(document).ready(function(){
    console.log("hello cruel world")

    // $("#persona-gen").on("click", function() {
              
    
    $.ajax({
        url: 'https://api.randomuser.me/',
        dataType: 'json',
        success: function(data) {
          console.log(data);
          console.log(data.results);
          console.log(data.results[0].gender);
          console.log(data.results[0].dob.age);
          console.log(data.results[0].location.city);
          console.log(data.results[0].location.state);
          console.log(data.results[0].nat);
          console.log(data.results[0].name.title);
          console.log(data.results[0].name.first);
          console.log(data.results[0].name.last);
          console.log(data.results[0].login.username);
          console.log(data.results[0].picture.large);
          console.log(data.results[0].picture.medium);
          
          var personaImg = $("<img>");
          personaImg.attr("src", data.results[0].picture.large);
          $("#persona-gen").append(personaImg);

        }
      });
    // });



});
            