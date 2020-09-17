// GLOBAL VARIABLES
// ================

// ICON VARIABLES
var genNewIcon =  $("#gen-new-psa-icon");
var saveIcon = $("#save-icon")
var storageIcon = $("#storage-icon")
var trashIcon = $("#trash-icon")

// PAGE TARGETING VARIABLES
var personaCard = $("#persona-card")
var mainContainer = $("#main-container")

// ==============================
// FORM VARIABLES & EVENT LISTENER
// var targetForm = $("#target-form");
// var ageSelectLow = $("#age-low")
// var ageSelectHigh = $("#age-high")
// var sexSelect = $("#sex-type")
// var quoteSelect = $("#quote-type");
// var interestSelect = $("#persona-interests");
// var submitGenerate = $("#submit-generate"); //SUBMIT BUTTON
// // EVENT LISTENER FOR FORM 
// submitGenerate.on("click", function(event) {
//     var personaGender = (sexSelect.val())
//     var personaInterests = (interestSelect.val());
//     var personaQuote = (quoteSelect.val());
//     event.preventDefault();});
// LEAVE HERE PLEASE
// =======================

// JOSEPH HARDCODE VARIABLES
var specificCategory = "meteorology";
var userQuoteSelection = "Inspirational";

 
// ==============
// Text Generation
function autoBiography(name, location, category, quote) {
  sentenceStructure = {
    starter: ["Hi my name is ", "Hello my name is ", "Whats up it's "],
    where: [". I am from ", ". I am originally from ", ". I come from "],
    interests: [
      ". I am very interested in ",
      ". I work in ",
      ". My biggest passion is ",
    ],
    quotes: [
      ". As I always say, ",
      ". My favorite quote is ",
      ". I live by the phrase ",
    ],
  };
  var randomWords = Math.floor(
    Math.random() * sentenceStructure.starter.length
  );
  quote = quote[0].toLowerCase() + quote.slice(1);
  var finalText =
    sentenceStructure.starter[randomWords] +
    name +
    sentenceStructure.where[randomWords] +
    location +
    sentenceStructure.interests[randomWords] +
    category +
    sentenceStructure.quotes[randomWords] +
    quote +
    ".";
  return finalText;
}


// FUNCTION
$(document).ready(function () {
  // =====================================================================
  // EVENT LISTENERS
  // =====================================================================
  genNewIcon.on("click", function () {
    generateNewPersona();
  });

  saveIcon.on("click", function () {
    saveFunc();
  });

  storageIcon.on("click", function () {
    viewStoredPersonas();
  });

 trashIcon.on("click", function () {
    clearStorage();
  });

  // =====================================================================
  // UI Functions
  // =====================================================================
  function generateNewPersona() {
    console.log("I clicked the generate new button");
    personaCard.empty();
    personaCard.removeClass("hide");
    formCall();
    
  }

  function saveFunc() {
    console.log("I clicked the save button");
    alert("You clicked the save button");
  }

  function viewStoredPersonas() {
    console.log("I clicked the view storage icon");
  }

  function viewStoredPersonas() {
    console.log("I clicked the view storage icon");
  }

  function clearStorage() {
    storage.clear()
    console.log("THIS CURRENTLY DELETES LOCAL STORAGE");
  }

// =====================================================================
// Traversing the DOM
// =====================================================================
  
// ================================
// ================================
//                  NEW USER CALL 
// THIS IS THE PRIMARY FUNCTION USERS WILL RELY ON
// ===============================
// ================================

 function formCall() {
     console.log("NEW USER CALL, CALLED")
     var br = document.createElement("br");
     var br1 = document.createElement("br");
     var br2 = document.createElement("br");
     var br3 = document.createElement("br");
     var br4 = document.createElement("br");
     
      var personaForm = $("<form id='persona-form' action='#'>");
      var personaFormTitle = $("<h2 id='persona-form-tile'>").text("Persona Parameters")
      // AGE RANGE
      var personaLabelAgeLow = $("<label for='age-low-input'>").text("Age Low")
      var personaInputAgeLow = $("<input type='number' id='age-low-input' name='age-low-input' min='18' max='65'>");
      var personaLabelAgeHigh = $("<label for='age-high-input'>").text("Age High")
      var personaInputAgeHigh = $("<input type='number' id='age-high-input' name='age-high-input' min='18' max='65'>");
      // GENDER SELECT
      var personaGender = $("<label for='persona-gender-select'>").text("Persona Gender")
      var personaGenderSelect = $("<select id='persona-gender-select' name='persona-interests'>");
      var optionTestGender1 = $("<option>").val('gender-test-val-1').text('gender1').appendTo(personaGenderSelect);
      var optionTestGender2 = $("<option>").val('gender-test-val-2').text('gender2').appendTo(personaGenderSelect);
      var optionTestGender3 = $("<option>").val('gender-test-val-3').text('gender3').appendTo(personaGenderSelect);
      var optionTestGender4 = $("<option>").val('gender-test-val-4').text('gender4').appendTo(personaGenderSelect);
      // PROFESSION INPUT
      var personaProfessionLabel = $("<label for='persona-profession-input'>").text("Persona Profession")
      var personaProfessionInput = $("<input type='text' id='persona-profession-input' name='persona-profession-input' placeholder='if left blank will randomize'>");
      // INTEREST SELECT
      var personaInterests = $("<label for='persona-interest-select'>").text("Persona Interest")
      var personaInterestSelect = $("<select id='persona-interest-select' name='persona-interests'>");
      var optionTestInterest1 = $("<option>").val('interest-test-val-1').text('interest1').appendTo(personaInterestSelect);
      var optionTestInterest2 = $("<option>").val('interest-test-val-2').text('interest2').appendTo(personaInterestSelect);
      var optionTestInterest3 = $("<option>").val('interest-test-val-3').text('interest3').appendTo(personaInterestSelect);
      // QUOTE SELECT
      var personaQuote = $("<label for='persona-quote'>").text("Persona Quote")
      var personaQuoteSelect = $("<select id='persona-quote' name='persona-quote'>");
      var optionTestQuote1 = $("<option>").val('quote-test-val-1').text('quote1').appendTo(personaQuoteSelect);
      var optionTestQuote2 = $("<option>").val('quote-test-val-2').text('quote2').appendTo(personaQuoteSelect);
      var optionTestQuote3 = $("<option>").val('quote-test-val-3').text('quote3').appendTo(personaQuoteSelect);
      
      var inputSubmit = $("<button type='submit' id='submit-generate' class='button' value='Generate New Persona'>").text("SUBMIT ME");

      personaForm.append(personaFormTitle);
      personaForm.append(personaLabelAgeLow, personaInputAgeLow, personaLabelAgeHigh, personaInputAgeHigh, br1);
      personaForm.append(personaGender, personaGenderSelect, br3);
      personaForm.append(personaProfessionLabel, personaProfessionInput, br4);
      personaForm.append(personaInterests, personaInterestSelect, br2, personaQuote, personaQuoteSelect,);
      personaForm.append(br, inputSubmit);
      mainContainer.append(personaForm);
      
      //TARGETTING FORM VALUES
      var submitGenerate = $("#submit-generate"); //SUBMIT BUTTON
      var targetForm = $("#persona-form");
      

      // EVENT LISTENER FOR FORM 
      submitGenerate.on("click", function(event) {     
     
      var personaLowAgeVal = $("#age-low-input").val();
      var personaHighAgeVal = $("#age-high-input").val();
      var personaGenderVal = $("#persona-gender-select").val();
      var personaQuoteVal = $("#persona-quote-select").val();
      var personaInterestVal = $("#persona-interest-select").val();
      var personaJobVal = personaProfessionInput.val();
      // CONSOLE LOGGING VALUES OF INPUTS
      console.log("this click button is working");
      console.log(ageSelectHigh);
      console.log(ageSelectLow);
      console.log(genderSelect);
      console.log(quoteSelect);
      console.log(interestSelect);
      console.log(personaJobVal)

      event.preventDefault();

        });
function newUserCall() {
  $.ajax({
    url: "https://randomuser.me/api/",
    dataType: "json",
    success: function (data) {

      
      // ===========================================
      // ASSIGNING PERSONA VARIABLES WITHIN FUNCTION BASED ON RESPONSE FROM API
      // =========================================
      var randomGen = data.results[0];
      var personaImg = randomGen.picture.thumbnail;    // thumbnail IMAGE
      var personaImgLarge = randomGen.picture.large; //large IMAGE
      var personaName = randomGen.name.first + " " + randomGen.name.last;
      var personaAge = randomGen.dob.age;               // PERSONA AGE
      var personaLocation =
        randomGen.location.city + ", " + randomGen.location.country;
      var personaEmail = randomGen.email;
      var personaGender = randomGen.gender;
    
    // ===========================================
    //  DYNAMICALLY GENERATING NEW PERSONA CONTENT USING ABOVE VARIABLES
    // ===========================================
      var personaImage = $("<img id='persona-image'>").attr("src", personaImgLarge);
      var personaInfoDiv = $("<div id='persona-info'>");
      var psaNameEl = $("<p id='#psa-name'>").text(personaName);
      var psaAgeEl = $("<p id='#psa-age'>").text(personaAge);
      var psaGenderEl = $("<p id='#psa-gender'>").text(personaGender);
      var psaLocationEl = $("<p id='#psa-location'>").text(personaLocation);
      var psaBioEl = $("<p id='#psa-bio'>").text("Loading Bio");  // << we receive this information in  a later API CALL
      personaInfoDiv.append(psaNameEl, psaGenderEl, psaAgeEl, psaLocationEl, psaBioEl);
      personaCard.append(personaImage, personaInfoDiv);

    // ========================
    // VARIABLE BIO GENERATION
    // ========================
      if (userQuoteSelection === "Inspirational") {
        var settingsOne = {
          async: true,
          crossDomain: true,
          url:
            "https://quotes15.p.rapidapi.com/quotes/random/?language_code=en",
          method: "GET",
          headers: {
            "x-rapidapi-host": "quotes15.p.rapidapi.com",
            "x-rapidapi-key":
              "59d0c27c79msh6e6814003e3803ep1e5484jsn5fecf295231f",
          },
        };

        $.ajax(settingsOne).done(function (responseOne) {
        // INSPIRATIONAL BIO CREATION
          var inspireQuote = responseOne.content;
          psaBioEl.text(autoBiography(personaName, personaLocation, specificCategory, inspireQuote));
        });
      } 
        // CORPORATE BIO CREATION 
        else if (userQuoteSelection === "Corporate") {
        var settingsTwo = {
          async: true,
          crossDomain: true,
          url: "https://sameer-kumar-corporate-bs-generator-v1.p.rapidapi.com/",
          method: "GET",
          headers: {
            "x-rapidapi-host":
              "sameer-kumar-corporate-bs-generator-v1.p.rapidapi.com",
            "x-rapidapi-key":
              "59d0c27c79msh6e6814003e3803ep1e5484jsn5fecf295231f",
          },
        };

        $.ajax(settingsTwo).done(function (responseTwo) {
          // console.log(responseTwo);
          var corporateQuote = responseTwo.phrase;
          
            autoBiography(
              personaName,
              personaLocation,
              specificCategory,
              corporateQuote
                 )
            });
         }
         },
     });
    }
   } // END NEW USER CALL
});// END READY DOCUMENT
