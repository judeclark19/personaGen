$(document).ready(function(){
    console.log("hello cruel world")

    
    var generateNew = $("#generate-persona");
    var targetContainer = $("#target-container");
    var targetForm = $("#target-form");

    // FORM SELECTORS to target for VALUES
    var sexSelect = $("#sex-type")
    var quoteSelect = $("#quote-type");
    var interestSelect = $("#persona-interests");
    var submitGenerate = $("#submit-generate");

    submitGenerate.on("click", function(event) {
      var personaGender = (sexSelect.val())
      // var personaInterests = (interestSelect.val());
      // var quoteSelect = (quoteSelect.val());
      event.preventDefault();

      // HERE IS WHERE THE CALL HAPPENS
     $.ajax({
        url: 'https://api.randomuser.me/',
        dataType: 'json',
        success: function(data) {
          console.log(data);
          console.log(data.results);
          // display profile photo
          var largeProfile = (data.results[0].picture.large)
          // full name, could easily do without the "title"
          var fullName = (data.results[0].name.title) + " " + (data.results[0].name.first) + " " + (data.results[0].name.last);

          var gender =(data.results[0].gender);
        if (gender !== personaGender) {
          return
        } else {
          var age = (data.results[0].dob.age);
          var city = (data.results[0].location.city);
          var state = (data.results[0].location.state);
          var nationality = (data.results[0].nat);
          var userName = (data.results[0].login.username);
          
          targetForm.clear()
          
          var personaDiv = $("<div>");
          targetContainer.append(personaDiv);
          
          var personaImg = $("<img>");
          personaImg.attr("src", largeProfile);
          personaDiv.append(personaImg);

          var personaName = $("<h1>");
          personaName.addClass("testPersonaFont");
          personaName.text("NAME: " + fullName);
          personaDiv.append(personaName);

          var personaDemographic = $("<h1>");
          personaDemographic.addClass("testPersonaFont");
          personaDemographic.text("SEX: " + gender + "   " + "AGE: " + age);
          personaDiv.append(personaDemographic);

          var personaGeoGraphic = $("<h1>");
          personaGeoGraphic.addClass("testPersonaFont");
          personaGeoGraphic.text("City: " + city + "  " + "State: " + state);
          personaDiv.append(personaGeoGraphic)


          


        } // END OF ELSE
        }
      });
    })

    // <div id="target-form"></div>

    // $("#persona-gen").on("click", function() {
    
   



});
            