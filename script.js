// random user api
$.ajax({
  url: "https://randomuser.me/api/",
  dataType: "json",
  success: function (data) {
    // console.log(data);
    var randomGen = data.results[0]
    var personaImg = randomGen.picture.thumbnail;
    var personaName = randomGen.name.first + " " + randomGen.name.last;
    var personaLocation = randomGen.location.city + ", " + randomGen.location.country;
    var personaEmail = randomGen.email;
    var personaGender = randomGen.gender;

    console.log("image link: " + personaImg);
    console.log("name: " + personaName);
    console.log("location: " + personaLocation);
    console.log("email: " + personaEmail);
    console.log("gender: " + personaGender);
  },
});

// text generation api
// var specificCategory = "education";

// console.log(specificCategory);

// var settings = {
//   async: true,
//   crossDomain: true,
//   url:
//     "https://contentai-net-text-generation.p.rapidapi.com/text-generation/api/?category=" +
//     specificCategory,
//   method: "GET",
//   headers: {
//     "x-rapidapi-host": "contentai-net-text-generation.p.rapidapi.com",
//     "x-rapidapi-key": "59d0c27c79msh6e6814003e3803ep1e5484jsn5fecf295231f",
//   },
// };

// $.ajax(settings).done(function (response) {
//   console.log(response.text);
// });

// random inspirational quotes
var settingsOne = {
	"async": true,
	"crossDomain": true,
	"url": "https://quotes15.p.rapidapi.com/quotes/random/?language_code=en",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "quotes15.p.rapidapi.com",
		"x-rapidapi-key": "59d0c27c79msh6e6814003e3803ep1e5484jsn5fecf295231f"
	}
}

$.ajax(settingsOne).done(function (responseOne) {
    // console.log(responseOne);
    var inspireQuote = responseOne.content;

    console.log("inspirational quote: " + inspireQuote);
});

// corporate buzzwords api
var settingsTwo = {
	"async": true,
	"crossDomain": true,
	"url": "https://sameer-kumar-corporate-bs-generator-v1.p.rapidapi.com/",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "sameer-kumar-corporate-bs-generator-v1.p.rapidapi.com",
		"x-rapidapi-key": "59d0c27c79msh6e6814003e3803ep1e5484jsn5fecf295231f"
	}
}

$.ajax(settingsTwo).done(function (responseTwo) {
    // console.log(responseTwo);
    var corporateQuote = responseTwo.phrase;

    console.log("corporate quote: " + corporateQuote);
});