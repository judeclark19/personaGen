// GLOBAL VARIABLES
// ================

// BUTTON VARIABLE
var randomButton = $("#user-select-random")
var userParamsButton = $("#user-select-parameters")
var genNewIcon = $("#gen-new-psa-icon");
var saveIcon = $("#save-icon");
// ICON VARIABLES
var saveIconContainer = $("#save-icon-container");
var storageIconContainer = $("#storage-icon-container");
var storageIcon = $("#storage-icon");
var trashIcon = $("#trash-icon");
var trashIconContainer = $("#trash-icon-container");
var librarySwitch = false;

// TEMPORARY FORM CONTAINER TARGET
var formContainer = $("#form-container");

// PAGE TARGETING VARIABLES
var personaBox = $("#persona-box");
var personaBlock = $("#persona-block");
var tableBlock = $("#table-block");
var mainContainer = $("#main-container");
var formContainer = $("#form-container");
// JOSEPH HARDCODE VARIABLES
var specificCategory;
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

// function getAge(imageURL) {
//   var settings = {
//     async: true,
//     crossDomain: true,
//     url:
//       "https://faceplusplus-faceplusplus.p.rapidapi.com/facepp/v3/detect?image_url=" +
//       imageURL,
//     method: "POST",
//     headers: {
//       "x-rapidapi-host": "faceplusplus-faceplusplus.p.rapidapi.com",
//       "x-rapidapi-key": "59d0c27c79msh6e6814003e3803ep1e5484jsn5fecf295231f",
//       "content-type": "application/x-www-form-urlencoded",
//     },
//     data: { return_attributes: "gender,age" },
//   };

//   $.ajax(settings).done(function (imgResponse) {
//     return imgResponse.faces[0].attributes.age.value;
//   });
// }

// FUNCTION
$(document).ready(function () {
  // =====================================================================
  //  GLOBAL EVENT LISTENERS
  // =====================================================================
  
  // NEW PERSONA PROMPT BUTTONS
  randomButton.on("click", function () {
    generateNewPersona();
  });

  userParamsButton.on("click", function () {
    $("#notification-block").addClass("hide");
    formCall();           // deploys form for parameter call
  });
  // STATIC ICONS
  genNewIcon.on("click", function () {
    generateNewPersona();
  });

  saveIcon.on("click", function () {
    saveFunc();
  });

  storageIcon.on("click", function () {
    if(storageIconContainer.prop('disabled')===false){
    viewStoredPersonas();}
    else {
      console.log("library is disabled")
    }
  });

  trashIcon.on("click", function () {
    localStorage.clear();
  });

  // =====================================================================
  // UI Functions
  // =====================================================================
  function generateNewPersona() {
    console.log("I clicked the generate new button");
    var genConfirm = confirm(
      "Generate new user? \n (This is where we can prompt to gen random or put in user params)"
    );
    if (genConfirm) {
      newUserCall();
    }
  }

  function saveFunc() {
    if (document.getElementById("save-icon-style").disabled) {
      console.log("This button is disabled.");
    } else {
      console.log("I clicked the save button");
      //TODO: add some sort of validation so that user can't save before they have generated a persona. perhaps start with the save button disabled
      alert("Persona added to your library. \n (not really yet)");
    }
  }

  function viewStoredPersonas() {
    console.log("I clicked the view storage icon");

    if (librarySwitch === false) {
      personaBlock.addClass("hide");
      tableBlock.removeClass("hide");
      // storageIconContainer.addClass("is-active")
      librarySwitch = true;
    } else {
      personaBlock.removeClass("hide");
      tableBlock.addClass("hide");
      librarySwitch = false;
    }
  }

  function clearStorage() {
    var clearConfirm = confirm(
      "Are you sure you want to delete everything in your library?"
    );
    if (clearConfirm) {
      localStorage.clear();
      console.log("THIS CURRENTLY DELETES LOCAL STORAGE");
    }
  }

  // =====================================================================
  // Traversing the DOM
  // =====================================================================
  
  // ===============================
  // DO NOT TOUCH - FORM CALL
  // THIS CREATE THE FORM THAT IS DISPLAYED 
  // DO NOT TOUCH - FORM CALL
  // ================================
      function formCall() {
        console.log("FORM GENERATION, CALLED")
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
         formContainer.append(personaForm);
         
         //TARGETTING FORM VALUES
         var submitGenerate = $("#submit-generate"); //SUBMIT BUTTON
         var personaForm = $("#persona-form");
         
   
         // EVENT LISTENER FOR FORM 
         submitGenerate.on("click", function(event) {     
        
         var personaLowAgeVal = $("#age-low-input").val();
         var personaHighAgeVal = $("#age-high-input").val();
         var personaGenderVal = $("#persona-gender-select").val();
         var personaQuoteVal = $("#persona-quote-select").val();
         var personaInterestVal = $("#persona-interest-select").val();
         var personaJobVal = $("#persona-profession-input").val();
         // CONSOLE LOGGING VALUES OF INPUTS
         console.log("this click button is working");
         console.log(personaLowAgeVal);
         console.log(personaHighAgeVal);
         console.log(personaGenderVal);
         console.log(personaQuoteVal);
         console.log(personaInterestVal);
         console.log(personaJobVal);
   
         
        newUserCall();
        formContainer.empty();
        
        event.preventDefault();
        //  originalUserCall();
           });
   
    
    // ACTUAL DYNAMIC GENERATION OF DATA
    // DO NOT TOUCH 
     function originalUserCall() {
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
           mainContainer.append(personaImage, personaInfoDiv);
   
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
       };
      };


  
  // ================================
  // ================================
  //                  NEW USER CALL
  // THIS IS THE PRIMARY FUNCTION USERS WILL RELY ON
  // ===============================
  // ================================

  function newUserCall() {
    console.log("NEW USER CALL, CALLED");
    $.ajax({
      url: "https://randomuser.me/api/",
      dataType: "json",
      success: function (data) {
        // ===========================================
        // ASSIGNING PERSONA VARIABLES WITHIN FUNCTION BASED ON RESPONSE FROM API
        // =========================================
        var randomGen = data.results[0];
        var personaImg = randomGen.picture.thumbnail; // thumbnail IMAGE
        var personaImgLarge = randomGen.picture.large; //large IMAGE
        var personaName = randomGen.name.first + " " + randomGen.name.last;
        // var personaAge = randomGen.dob.age; // PERSONA AGE
        var personaLocation =
          randomGen.location.city + ", " + randomGen.location.country;
        var personaEmail = randomGen.email;
        var personaGender = randomGen.gender;

        // ============================================
        // Sends image to facial recognition api to get accurate age
        // ============================================
        var settings = {
          async: true,
          crossDomain: true,
          url:
            "https://faceplusplus-faceplusplus.p.rapidapi.com/facepp/v3/detect?image_url=" +
            personaImgLarge,
          method: "POST",
          headers: {
            "x-rapidapi-host": "faceplusplus-faceplusplus.p.rapidapi.com",
            "x-rapidapi-key":
              "59d0c27c79msh6e6814003e3803ep1e5484jsn5fecf295231f",
            "content-type": "application/x-www-form-urlencoded",
          },
          data: { return_attributes: "gender,age" },
        };

        $.ajax(settings).done(function (imgResponse) {
          var personaAge = imgResponse.faces[0].attributes.age.value;

          // ===========================================
          //   DYNAMICALLY GENERATING NEW PERSONA CONTENT USING ABOVE VARIABLES
          // ===========================================

          //Hide the prompt
          $("#notification-block").addClass("hide");

          //Enable save button
          saveIconContainer.prop("disabled", false);
          saveIconContainer.removeClass("disabled");
          saveIconContainer.addClass("save-able");

          //Enable storage button
          storageIconContainer.prop("disabled", false);
          storageIconContainer.removeClass("disabled");
          storageIconContainer.addClass("storage-able");

          //Enable storage button
          trashIconContainer.prop("disabled", false);
          trashIconContainer.removeClass("disabled");
          trashIconContainer.addClass("trash-able");

          var imageContainer = $("#image-container");
          var dataContainer = $("#data-container");
          var personaImageEl = $("<img id='persona-image'>").attr(
            "src",
            personaImgLarge
          );
          // PERSONA BLOCK IS GLOBAL VARIABLE;

          var nameEl = $("#name-msg-body");
          nameEl.text(personaName);

          var ageEl = $("#age-msg-body");
          ageEl.text(personaAge);

          var genderEl = $("#gender-msg-body");
          genderEl.text(personaGender);

          var genderEl = $("#location-msg-body");
          genderEl.text(personaLocation);

          var bioEl = $("#bio-msg-body");
          bioEl.text("Loading Bio..."); //  << we receive this information in  a later API CALL

          imageContainer.empty();
          imageContainer.append(personaImageEl);
          tableBlock.addClass("hide");
          personaBlock.removeClass("hide");

          // creates interest/career based on age. No more meteorology!
          specificCategory = generateProfession(personaAge);

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
              // psabioEl.removeClass("bio-loading")
              bioEl.text(
                autoBiography(
                  personaName,
                  personaLocation,
                  specificCategory,
                  inspireQuote
                )
              );
            });
          }
          // CORPORATE BIO CREATION
          else if (userQuoteSelection === "Corporate") {
            var settingsTwo = {
              async: true,
              crossDomain: true,
              url:
                "https://sameer-kumar-corporate-bs-generator-v1.p.rapidapi.com/",
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
              );
            });
          }
        });
      },
      error: function(xhr) {
        var errorText = xhr.status + " " + xhr.statusText + ". Please retry generate user button.";
        alert(errorText);
      }
    });
  } // END NEW USER CALL
}); // END READY DOCUMENT
