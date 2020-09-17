// GLOBAL VARIABLES
// ================

// ICON VARIABLES
var genNewIcon =  $("#gen-new-psa-icon");
var saveIcon = $("#save-icon")
var storageIcon = $("#storage-icon")
var trashIcon = $("#trash-icon")

// PAGE TARGETING VARIABLES
var personaCard = $("#persona-card")

// ==============================
// FORM VARIABLES & EVENT LISTENER
var targetForm = $("#target-form");
var ageSelectLow = $("#age-low")
var ageSelectHigh = $("#age-high")
var sexSelect = $("#sex-type")
var quoteSelect = $("#quote-type");
var interestSelect = $("#persona-interests");
var submitGenerate = $("#submit-generate"); //SUBMIT BUTTON
// EVENT LISTENER FOR FORM 
submitGenerate.on("click", function(event) {
    var personaGender = (sexSelect.val())
    var personaInterests = (interestSelect.val());
    var personaQuote = (quoteSelect.val());
    event.preventDefault();});
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
    personaImage.removeClass("hide");
    newUserCall();
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

 function newUserCall() {
     console.log("NEW USER CALL, CALLED")
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
    //   DYNAMICALLY GENERATING NEW PERSONA CONTENT USING ABOVE VARIABLES
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
          inspireQuote = inspireQuote.toLowerCase();
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
          corporateQuote = corporateQuote.toLowerCase();
          
          console.log( "IS THIS EVEN WORKING?   " +
            autoBiography(
              personaName,
              personaLocation,
              specificCategory,
              corporateQuote
                 )
             );
          
            });
         }
         },
     });
    } // END NEW USER CALL
});// END READY DOCUMENT
