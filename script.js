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
        url: "https://quotes15.p.rapidapi.com/quotes/random/?language_code=en",
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
        console.log(autoBiography(personaName, personaLocation, specificCategory, inspireQuote));
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

        console.log(autoBiography(personaName, personaLocation, specificCategory, corporateQuote));
      });
    }
  }
});