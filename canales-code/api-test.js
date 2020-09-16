$(document).ready(function(){
    console.log("hello cruel world")

    var target = $("#target-container")
    // $("#persona-gen").on("click", function() {
              
    
    $.ajax({
        url: 'https://api.randomuser.me/',
        dataType: 'json',
        success: function(data) {
          console.log(data);
          console.log(data.results);
          var gender =(data.results[0].gender);
          var age = (data.results[0].dob.age);
          var city = (data.results[0].location.city);
          var state = (data.results[0].location.state);
          var nationality = (data.results[0].nat);
          var fullName = (data.results[0].name.title) + " " + (data.results[0].name.first) + " " + (data.results[0].name.last);
          var userName = (data.results[0].login.username);
          var largeProfile = (data.results[0].picture.large)
          
          var personaImg = $("<img>");
          personaImg.attr("src", largeProfile);
          target.append(personaImg);

          

        }
      });
    // });



});
            