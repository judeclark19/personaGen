// random user api
$.ajax({
  url: "https://randomuser.me/api/",
  dataType: "json",
  success: function (data) {
    console.log(data);
  },
});

// text generation api
var specificCategory = "education";

console.log(specificCategory);

var settings = {
  async: true,
  crossDomain: true,
  url:
    "https://contentai-net-text-generation.p.rapidapi.com/text-generation/api/?category=" +
    specificCategory,
  method: "GET",
  headers: {
    "x-rapidapi-host": "contentai-net-text-generation.p.rapidapi.com",
    "x-rapidapi-key": "59d0c27c79msh6e6814003e3803ep1e5484jsn5fecf295231f",
  },
};

$.ajax(settings).done(function (response) {
  console.log(response.text);
});
