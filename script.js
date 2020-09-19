// GLOBAL VARIABLES
// This controls the collapsibles on the persona page
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active-col");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// ICONS AND BUTTON VARIABLES
var randomButton = $("#user-select-random");
var userParamsButton = $("#user-select-parameters");
var homeIcon = $("#home-icon");
var homeIconContainer = $("#home-icon-container");
var genNewIcon = $("#view-psa-icon");
var gnpContainer = $("#view-psa-icon-container");
var saveIcon = $("#save-icon");
var saveIconContainer = $("#save-icon-container");
var libraryIcon = $("#library-icon");
var libraryIconContainer = $("#library-icon-container");
var formSubmitBtn = $("#form-submit-btn");
var librarySwitch = false;
var saveSwitch = false;

// TEMPORARY FORM CONTAINER TARGET
var formContainer = $("#form-container");

// PAGE TARGETING VARIABLES
var mainContainer = $("#main-container");
var personaBox = $("#persona-box");
var personaBlock = $("#persona-block");
var libraryBlock = $("#library-table-block");
var landingBlock = $("#landing-block");
var formBlock = $("#form-block");
var clearWarning = $("#clear-warning-block");

// JOSEPH HARDCODE VARIABLES
var userQuoteSelection;
var randomStatus = false;
// *******************************************
// STORAGE VARIABLES AND FUNCTIONS
// *******************************************
var personaArray = [];

// THIS HAS BEEN UPDATED
displayPersonaKeys();

function displayPersonaKeys() {
  var personaStorageKeys = Object.keys(localStorage);
  if (personaStorageKeys == null) {
    console.log("i'm empty");
  } else {
    for (var i = 0; i < personaStorageKeys.length; i++) {
      var personaKeyItem =
        (personaStorageKeys[i],
        JSON.parse(localStorage.getItem(personaStorageKeys[i])));
      // console.log(personaKeyItem);
      personaArray.push(personaKeyItem);
      console.log(personaArray);
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

  storedPersona = localStorage.setItem(
    personaName,
    JSON.stringify(personaKeyItem)
  );
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
  location = location.split(",")[0];
  var randomWords = Math.floor(
    Math.random() * sentenceStructure.starter.length
  );
  quote = quote[0].toLowerCase() + quote.slice(1);
  if (quote[quote.length - 1] === ".") {
    quote = quote.slice(0, quote.length - 1);
  }
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
    landingBlock.addClass("hide");
    formBlock.removeClass("hide");
    personaBlock.addClass("hide");
    libraryBlock.addClass("hide");
    formCall();
  });

  homeIcon.on("click", function () {
    if (homeIconContainer.prop("disabled") === true) {
      console.log("home button is disabled");
    } else if (homeIconContainer.hasClass("active")) {
      console.log("home button is already active");
    } else {
      homeIconContainer.addClass("active");
      personaBlock.addClass("hide");
      landingBlock.removeClass("hide");
      gnpContainer.removeClass("active");
      gnpContainer.addClass("able");
      libraryBlock.addClass("hide");
      console.log("clicked home button");
      if (libraryIconContainer.hasClass("active")) {
        libraryIconContainer.removeClass("active");
        libraryIconContainer.addClass("able");
      }
    }
  });

  formSubmitBtn.on("click", function () {
    console.log("form submitted");
    formBlock.addClass("hide");
    generateNewPersona();
  });

  genNewIcon.on("click", function () {
    if (gnpContainer.prop("disabled") === true) {
      console.log("view psa is disabled");
    } else {
      console.log("clicked view psa button");
      landingBlock.addClass("hide");
      personaBlock.removeClass("hide");
      homeIconContainer.removeClass("active");
      homeIconContainer.addClass("able");
      gnpContainer.removeClass("able");
      gnpContainer.addClass("active");
      libraryBlock.addClass("hide");
      if (libraryIconContainer.hasClass("active")) {
        libraryIconContainer.removeClass("active");
        libraryIconContainer.addClass("able");
      }
    }
  });

  libraryIcon.on("click", function () {
    if (libraryIconContainer.prop("disabled") === false) {
      librarySwitchFunc();
      gnpContainer.removeClass("active");
      gnpContainer.addClass("able");
      homeIconContainer.removeClass("active");
      homeIconContainer.addClass("able");
      libraryIconContainer.removeClass("able");
      libraryIconContainer.addClass("active");
      personaBlock.addClass("hide");
      landingBlock.addClass("hide");
      libraryBlock.removeClass("hide");
    } else {
      console.log("library is disabled");
    }
  });

    //Library main delete button
    var libraryDelete1 = $("#library-delete");
    var libraryDelete2 = $("#library-confirm");
  
    libraryDelete1.on("click", function () {
      console.log("Hello world");
      libraryDelete1.addClass("hide");
      libraryDelete2.removeClass("hide");
    });
  
    libraryDelete2.on("click", function () {
      console.log("need to build library delete");
      resetState();
    });

  // =====================================================================
  // UI Functions
  // =====================================================================

  saveIconContainer.on("click", function () {
    saveSnackbar();
    saveSwitch = true;
    libraryIconContainer.removeClass("disabled");
    libraryIconContainer.prop("disabled", false);
    libraryIconContainer.addClass("able");
  });

  function saveSnackbar() {
    if (document.getElementById("save-icon-container").disabled) {
      console.log("Save button is disabled.");
    } else {
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

  // ======================================
  // GENERATING STORAGE INTO LIBRARY FOLDER
  // ======================================
  function generateLibrary() {
    $("#table-body").empty();
    for (var i = 0; i < personaArray.length; i++) {
      console.log(personaArray[i].name);
      console.log(personaArray[i].image);
      console.log(personaArray[i].age);
      console.log(personaArray[i].gender);
      console.log(personaArray[i].location);
      console.log(personaArray[i].bio);

      tableRow = $("<tr>");
      tableRow.attr("data-attribute", personaArray[i]);
      tableName = $("<td>").text(personaArray[i].name);
      tableAge = $("<td>").text(personaArray[i].age);
      tableLocation = $("<td>").text(personaArray[i].location);

      //the delete button on each row
      deleteBadge = $(
        "<span class='button tag is-warning' data-confirm-switch='delete'>"
      ).text("DELETE");
      tableDelete = $("<td>");
      tableDelete.append(deleteBadge);

      tableRow.append(tableName, tableAge, tableLocation, tableDelete);
      $("#table-body").append(tableRow);

      deleteBadge.on("click", function () {
        console.log($(this).attr("data-confirm-switch"));
        if ($(this).attr("data-confirm-switch") === "delete") {
          $(this).removeClass("is-warning");
          $(this).addClass("is-danger");
          $(this).text("CONFIRM");

          $(this).attr("data-confirm-switch", "confirm");
        } else {
          alert("need to build individual delete");
        }
      });
    }
  }

  function resetState() {
    libraryBlock.addClass("hide");
    landingBlock.removeClass("hide");
    //activate home button
    homeIconContainer.removeClass("able");
    homeIconContainer.addClass("active");
    //disable viewpsa
    viewPsaContainer.prop("disabled", true);
    viewPsaContainer.addClass("disabled");
    viewPsaContainer.removeClass("able");
    //disable save
    saveIconContainer.prop("disabled", true);
    saveIconContainer.addClass("disabled");
    saveIconContainer.removeClass("able");
    //disable library
    libraryIconContainer.prop("disabled", true);
    libraryIconContainer.addClass("disabled");
    libraryIconContainer.removeClass("active");
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
  // THIS CREATE THE FORM THAT IS DISPLAYED
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
    submitGenerate.on("click", function (event) {
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
      console.log(personaInterestVal);
      console.log(personaJobVal);

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
    // uses api parameters to specify sex
    var personaGenderSelect = $("#persona-gender-select").val();
    if (personaGenderSelect === "nonbinary") {
      var randomMeURL = "https://randomuser.me/api/";
    } else {
      var randomMeURL =
        "https://randomuser.me/api/?gender=" + personaGenderSelect;
    }
    $.ajax({
      url: randomMeURL,
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
        personaGender = randomGen.gender;
        // changes male/female returned gender to nonbinary if selected
        if (personaGenderSelect === "nonbinary") {
          personaGender = "nonbinary";
        }

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

          //Hide the landing page
          landingBlock.addClass("hide");

          //Make home icon able
          homeIconContainer.removeClass("active");
          homeIconContainer.addClass("able");

          //Activate the GenNewPsa button
          gnpContainer.removeClass("disabled");
          gnpContainer.addClass("active");
          gnpContainer.prop("disabled", false);

          //Enable save button
          saveIconContainer.prop("disabled", false);
          saveIconContainer.removeClass("disabled");
          saveIconContainer.addClass("able");

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
              // can't believe I had to write this. A lot of crazy stuff on the internet :/
              if (
                inspireQuote.toLowerCase().includes("hitler") ||
                inspireQuote.toLowerCase().includes("asshole") ||
                inspireQuote.toLowerCase().includes("fuck")
              ) {
                inspireQuote = "live, laugh, love";
              }

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
          // DID THIS TRACK A CHANGE
          // HOW ABOUT ANOTHER APOLOGY
          // I'M SORRY, TEAM
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
