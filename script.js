var specificCategory = "meteorology";
var userQuoteSelection = "Inspirational";

// text generation
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

$(document).ready(function () {
  // GLOBAL VARS
  // =================================================================
  var personaDataTypesArr = ["Name", "Age", "Location", "Bio"];
  var storedPersonas = [
    // "John Lennon"
    // "Paul McCartney"
    // "George Harrison"
    // "Ringo Starr"
    {
      personaIdentifier: "JL", // perhaps the api spits back something like an ID number for the face idk
      personaData: [
        {
          name: "John Lennon",
          age: 80,
          location: "New York City",
          bio: "had a weird life and died young",
        },
      ],
    },
    {
      personaIdentifier: "PM", // perhaps the api spits back something like an ID number for the face idk
      personaData: [
        {
          name: "Paul McCartney",
          age: 78,
          location: "London, UK",
          bio: "his wife looks 30 years younger than she actually is",
        },
      ],
    },
    {
      personaIdentifier: "GH", // perhaps the api spits back something like an ID number for the face idk
      personaData: [
        {
          name: "George Harrison",
          age: 77,
          location: "Friar Park, England",
          bio: "has a son that is obviously a clone",
        },
      ],
    },
    {
      personaIdentifier: "GH", // perhaps the api spits back something like an ID number for the face idk
      personaData: [
        {
          name: "Ringo Starr",
          age: 80,
          location: "Los Angeles",
          bio: "peace and love, peace and love",
        },
      ],
    },
  ];

  // =====================================================================

  // EVENT LISTENERS
  // =====================================================================
  // $("#save-icon").on("click", saveFunc())
  $("#gen-new-psa-icon").on("click", function () {
    generateNewPersona();
  });

  $("#save-icon").on("click", function () {
    saveFunc();
  });

  $("#storage-icon").on("click", function () {
    viewStoredPersonas();
  });

  $("#trash-icon").on("click", function () {
    clearStorage();
  });
  // =====================================================================

  // UI Functions
  // =====================================================================
  function generateNewPersona() {
    console.log("I clicked the generate new button");
    $("#persona-card").empty();
    var personaImgSrc = "https://via.placeholder.com/200x200.png";
    var personaImage = $("<img id='persona-image'>").attr("src", personaImgSrc);

    var personaInfoDiv = $("<div id='persona-info'>");

    var psaNameEl = $("<p id='#psa-name'>").text("Persona Name");
    var psaAgeEl = $("<p id='#psa-age'>").text("Persona age");
    var psaLocationEl = $("<p id='#psa-location'>").text("Persona location");
    var psaBioEl = $("<p id='#psa-bio'>").text("Persona bio");
    personaInfoDiv.append(psaNameEl, psaAgeEl, psaLocationEl, psaBioEl);

    $("#persona-card").append(personaImage, personaInfoDiv);
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
    console.log("I clicked the clear storage button");
  }
  // =====================================================================

  // Traversing the DOM
  // =====================================================================

  // =====================================================================

  // random user api
  $.ajax({
    url: "https://randomuser.me/api/",
    dataType: "json",
    success: function (data) {
      // console.log(data);
      var randomGen = data.results[0];
      var personaImg = randomGen.picture.thumbnail;
      var personaName = randomGen.name.first + " " + randomGen.name.last;
      var personaLocation =
        randomGen.location.city + ", " + randomGen.location.country;
      var personaEmail = randomGen.email;
      var personaGender = randomGen.gender;

      console.log("image link: " + personaImg);
      console.log("name: " + personaName);
      console.log("location: " + personaLocation);
      console.log("email: " + personaEmail);
      console.log("gender: " + personaGender);

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
          // console.log(responseOne);
          var inspireQuote = responseOne.content;
          inspireQuote = inspireQuote.toLowerCase();
          console.log(
            autoBiography(
              personaName,
              personaLocation,
              specificCategory,
              inspireQuote
            )
          );
        });
      } else if (userQuoteSelection === "Corporate") {
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

          console.log(
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
});
