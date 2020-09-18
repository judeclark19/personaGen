// GLOBAL VARIABLES
var judeDummyStorage = [
  {
    personaName: "Jeremy Clarkson",
    personaAge: 60,
    personaLocation: "Chipping Norton",
  },
  {
    personaName: "James May",
    personaAge: 57,
    personaLocation: "Hammersmith",
  },
  {
    personaName: "Richard Hammond",
    personaAge: 50,
    personaLocation: "Herefordshire",
  },
];
// ================

// ICONS AND BUTTON VARIABLES
var randomButton = $("#user-select-random");
var userParamsButton = $("#user-select-parameters");
var genNewIcon = $("#gen-new-psa-icon");
var gnpContainer = $("#gnp-icon-container");
var saveIcon = $("#save-icon");
// ICON VARIABLES
var saveIconContainer = $("#save-icon-container");
var libraryIcon = $("#library-icon");
var libraryIconContainer = $("#library-icon-container");
var trashIcon = $("#trash-icon");
var trashIconContainer = $("#trash-icon-container");
var formSubmitBtn = $("#form-submit-btn");
var librarySwitch = false;

// TEMPORARY FORM CONTAINER TARGET
var formContainer = $("#form-container");

// PAGE TARGETING VARIABLES
var personaBox = $("#persona-box");
var personaBlock = $("#persona-block");
var libraryBlock = $("#library-table-block");
var landingPromptBlock = $("#landing-prompt-block");
var formBlock = $("#form-block");
var clearWarning = $("#clear-warning-block");

// JOSEPH HARDCODE VARIABLES
var userQuoteSelection;
var randomStatus = false;
// *******************************************
// STORAGE VARIABLES AND FUNCTIONS
// *******************************************
var personaArray = [];

// displayPersonaKeys();

function displayPersonaKeys() {
  mainContainer.empty();

  var personaStorageKeys = Object.keys(localStorage);
  if (personaStorageKeys == null) {
    alert("i'm empty");
  } else {
    for (var i = 0; i < personaStorageKeys; i++) {
      var personaKeyItem = localStorage.getItem(personaStorageKeys[i]);
      console.log(personaKeyItem);
    }
  }
}

saveIcon.on("click", function () {
  var personaName = $("#name-msg-body")[0].childNodes[0].data;
  var personaImage = $("#persona-image")[0].currentSrc;
  var personaAge = $("#age-msg-body")[0].childNodes[0].data;
  var personaGender = $("#gender-msg-body")[0].childNodes[0].data;
  var personaLocation = $("#location-msg-body")[0].childNodes[0].data;
  var personaBio = $("#bio-msg-body")[0].childNodes[0].data;

  console.log(personaImage);
  console.log(personaName);
  console.log(personaAge);
  console.log(personaGender);
  console.log(personaLocation);
  console.log(personaBio);

  var personaKeyItem = {
    name: personaName,
    image: personaImage,
    age: personaAge,
    gender: personaGender,
    location: personaLocation,
    bio: personaBio,
  };

  console.log(personaKeyItem);

  storedPersona = localStorage.setItem(personaName, personaKeyItem);
});
// ==============
// Text Generation
function autoBiography(name, location, interests, quote) {
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
    interests +
    sentenceStructure.quotes[randomWords] +
    quote +
    ".";
  console.log(finalText);
  return finalText;
}

// FUNCTION
$(document).ready(function () {
  // =====================================================================
  //  GLOBAL EVENT LISTENERS
  // =====================================================================

  // NEW PERSONA PROMPT BUTTONS
  randomButton.on("click", function () {
    randomStatus = true;
    generateNewPersona();
  });

  userParamsButton.on("click", function () {
    landingPromptBlock.addClass("hide");
    formBlock.removeClass("hide");
    personaBlock.addClass("hide");
    libraryBlock.addClass("hide");
    generateNewPersona();
    formCall();
  });

  $("#close-prompt-btn").on("click", function () {
    landingPromptBlock.addClass("hide");
    gnpContainer.removeClass("disabled");
    gnpContainer.addClass("gnp-able");
  });

  $("#close-form-btn").on("click", function () {
    formBlock.addClass("hide");
    gnpContainer.removeClass("disabled");
    gnpContainer.addClass("gnp-able");
  });

  formSubmitBtn.on("click", function () {
    console.log("form submitted");
    formBlock.addClass("hide");
    generateNewPersona();
  });

  genNewIcon.on("click", function () {
    // generateNewPersona();
    // personaBlock.addClass("hide");
    landingPromptBlock.removeClass("hide");
    formBlock.addClass("hide");
    gnpContainer.addClass("disabled");
    gnpContainer.removeClass("gnp-able");
  });

  saveIcon.on("click", function () {
    saveFunc();
  });

  libraryIcon.on("click", function () {
    if (libraryIconContainer.prop("disabled") === false) {
      librarySwitchFunc();
    } else {
      console.log("library is disabled");
    }
  });

  $("#close-library-btn").on("click", function () {
    // console.log("library  close button")
    librarySwitch = false;
    libraryBlock.addClass("hide");
    personaBlock.removeClass("hide");
  });

  trashIcon.on("click", function () {
    if (trashIconContainer.prop("disabled") === false) {
      //show the modal for delete confirm
      clearWarning.removeClass("hide");
    } else {
      console.log("Trash icon is disabled");
    }
  });

  $("#close-warning-btn").on("click", function () {
    clearWarning.addClass("hide");
  });

  $("#clear-yes-btn").on("click", function () {
    console.log("clear yes");
    //TODO: disable buttons

    //Disable action buttons
    gnpContainer.prop("disabled", true);
    gnpContainer.addClass("disabled");
    gnpContainer.removeClass("gnp-able");

    saveIconContainer.prop("disabled", true);
    saveIconContainer.addClass("disabled");
    saveIconContainer.removeClass("save-able");

    libraryIconContainer.prop("disabled", true);
    libraryIconContainer.addClass("disabled");
    libraryIconContainer.removeClass("library-able");

    trashIconContainer.prop("disabled", true);
    trashIconContainer.addClass("disabled");
    trashIconContainer.removeClass("trash-able");

    //hide n show
    clearWarning.addClass("hide");
    personaBlock.addClass("hide");
    landingPromptBlock.removeClass("hide");
    if (librarySwitch) {
      librarySwitch = false;
      libraryBlock.addClass("hide");
    }
  });

  $("#clear-no-btn").on("click", function () {
    clearWarning.addClass("hide");
  });

  // =====================================================================
  // UI Functions
  // =====================================================================

  function saveFunc() {
    if (document.getElementById("save-icon-container").disabled) {
      console.log("Save button is disabled.");
    } else {
      // saveCurrentPersona(); TODO: build this function
      var saveSnack = $("#save-snack");
      saveSnack.addClass("show");

      // After 2 seconds, remove the show class from DIV
      setTimeout(function () {
        saveSnack.removeClass("show");
      }, 2000);
    }
  }

  function librarySwitchFunc() {
    if (librarySwitch === false) {
      personaBlock.addClass("hide");
      libraryBlock.removeClass("hide");
      librarySwitch = true;
      generateLibrary();
    } else {
      personaBlock.removeClass("hide");
      libraryBlock.addClass("hide");
      librarySwitch = false;
    }
  }

  function generateLibrary() {
    $("#table-body").empty();
    for (let i = 0; i < judeDummyStorage.length; i++) {
      console.log("Library generated from storage");
      tableRow = $("<tr>");
      tableName = $("<td>").text(judeDummyStorage[i].personaName);
      tableAge = $("<td>").text(judeDummyStorage[i].personaAge);
      tableLocation = $("<td>").text(judeDummyStorage[i].personaLocation);

      tableRow.append(tableName, tableAge, tableLocation);
      $("#table-body").append(tableRow);
    }
  }

  function clearStorage() {
    // localStorage.clear();
    console.log("storage cleared");
  }

  // =====================================================================

  // =====================================================================
  // Traversing the DOM
  // =====================================================================

  // ===============================
  // DO NOT TOUCH - FORM CALL
  // THIS CREATE THE FORM THAT IS DISPLAYED
  // DO NOT TOUCH - FORM CALL
  // ================================
  function formCall() {
    console.log("FORM GENERATION, CALLED");

    // AGE RANGE
    var personaInputAgeLow = $("#age-low-input");
    console.log(personaInputAgeLow.val());
    var personaInputAgeHigh = $("#age-high-input");
    console.log(personaInputAgeHigh.val());
    // GENDER SELECT
    var personaGenderSelect = $("#persona-gender-select");
console.log(personaGenderSelect.val());
    // PROFESSION INPUT
    var personaProfessionInput = $("#persona-profession-input");
console.log(personaProfessionInput.val());
    // INTEREST SELECT
    var personaInterestSelect = $("#persona-interest-select");
console.log(personaInterestSelect.val());
    // QUOTE SELECT
    var personaQuoteSelect = $("#persona-quote-select");
console.log(personaQuoteSelect.val());
    //TARGETING FORM VALUES
    var submitGenerate = $("#submit-generate"); //SUBMIT BUTTON
    var personaForm = $("#persona-form");

    // EVENT LISTENER FOR FORM
    // formSubmitBtn.on("click", function (event) {
    $("#persona-form").on("submit", function (event) {
      var personaLowAgeVal = $("#age-low-input").val();
      var personaHighAgeVal = $("#age-high-input").val();
      var personaGenderVal = $("#persona-gender-select").val();
      var personaQuoteVal = $("#persona-quote-select").val();
      //  var personaInterestVal = $("#persona-interest-select").val();
      //  personaJobVal = $("#persona-profession-input").val();
      // CONSOLE LOGGING VALUES OF INPUTS
      console.log("this click button is working");
      console.log(personaLowAgeVal);
      console.log(personaHighAgeVal);
      console.log(personaGenderVal);
      console.log(personaQuoteVal);
      // console.log(personaInterestVal);
      // console.log(personaJobVal);

      generateNewPersona();
      formContainer.empty();

      event.preventDefault();
      //  originalUserCall();
    });
  }

  // ================================
  // ================================
  //                  NEW USER CALL
  // THIS IS THE PRIMARY FUNCTION USERS WILL RELY ON
  // ===============================
  // ================================

  function generateNewPersona() {
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
          landingPromptBlock.addClass("hide");

          //Enable the GenNewPsa button
          gnpContainer.removeClass("disabled");
          gnpContainer.addClass("gnp-able");

          //Enable save button
          saveIconContainer.prop("disabled", false);
          saveIconContainer.removeClass("disabled");
          saveIconContainer.addClass("save-able");

          //Enable library button
          libraryIconContainer.prop("disabled", false);
          libraryIconContainer.removeClass("disabled");
          libraryIconContainer.addClass("library-able");

          //Enable trash button
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
          libraryBlock.addClass("hide");
          personaBlock.removeClass("hide");

          // creates interest/career based on age. No more meteorology!
          // if no input on form the interest is randomly generated
          personaJobVal = $("#persona-profession-input").val();
          if (!personaJobVal) {
            personaJobVal = generateProfession(personaAge);
          }
          // var personaInterestVal = $("#persona-interest-select").val();
          personaQuoteVal = $("#persona-quote-select").val();

          // ========================
          // VARIABLE BIO GENERATION
          // ========================
          if (randomStatus === true) {
            // randomizes bio quote
            var quoteNumber = Math.ceil(Math.random() * 3);
            personaQuoteVal = "quote-test-val-" + quoteNumber;
            randomStatus = false;
          }
          if (personaQuoteVal === "quote-test-val-1") {
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
                  personaJobVal,
                  inspireQuote
                )
              );
            });
          }
          // CORPORATE BIO CREATION
          else if (personaQuoteVal === "quote-test-val-2") {
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

              bioEl.text(
                autoBiography(
                  personaName,
                  personaLocation,
                  personaJobVal,
                  corporateQuote
                )
              );
            });
          } else if (personaQuoteVal === "quote-test-val-3") {
            movie = movies[Math.floor(Math.random() * movies.length)];

            var settings = {
              async: true,
              crossDomain: true,
              url:
                "https://imdb8.p.rapidapi.com/title/get-taglines?tconst=" +
                movie,
              method: "GET",
              headers: {
                "x-rapidapi-host": "imdb8.p.rapidapi.com",
                "x-rapidapi-key":
                  "59d0c27c79msh6e6814003e3803ep1e5484jsn5fecf295231f",
              },
            };

            $.ajax(settings).done(function (response) {
              var randomMovie = Math.floor(
                Math.random() * response.taglines.length
              );
              var movieQuote = response.taglines[randomMovie];
              bioEl.text(
                autoBiography(
                  personaName,
                  personaLocation,
                  personaJobVal,
                  movieQuote
                )
              );
            });
          }
        });
      },
      error: function (xhr) {
        var errorText =
          xhr.status +
          " " +
          xhr.statusText +
          ". Please retry generate user button.";
        alert(errorText);
      },
    });
  } // END NEW USER CALL
}); // END READY DOCUMENT
