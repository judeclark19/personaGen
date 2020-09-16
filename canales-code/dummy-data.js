$(document).ready(function(){
    
    
  
        //   var gender =(data.results[0].gender);
        //   if (gender !== personaGender) {
        //   return
        // } else {

        //BEGIN DUMMY DATA
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
    
    
   
});
            