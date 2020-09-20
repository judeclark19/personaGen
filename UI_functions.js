$(document).ready(function () {
  // console.log("ui functions js sheet is")

  //Hide the landing page
  function hideLandingPage() {
    landingBlock.addClass("hide");
  }

  //Show the landing page
  function showLandingPage() {
    landingBlock.removeClass("hide");
  }

  //Hide the persona page
  function hidePersonaPage() {
    personaBlock.addClass("hide");
  }

  //Hide the persona page
  function showPersonaPage() {
    personaBlock.removeClass("hide");
  }

  //Hide library page
  function hideLibraryPage() {
    libraryBlock.addClass("hide");
  }

  // Change Home Icon status to "Able"
  function homeIconAble() {
    homeIconContainer.removeClass("active");
    homeIconContainer.addClass("able");
  }

  //Change home icon to "active"
  function homeIconActive(){
    homeIconContainer.addClass("active");
  }

  // Change Persona Icon to "able"
  function personaIconAble(){
    gnpContainer.removeClass("active");
    gnpContainer.addClass("able");
  }

  // Change Persona Icon to "active"
  function personIconActive() {
    gnpContainer.removeClass("disabled");
    gnpContainer.addClass("active");
    gnpContainer.prop("disabled", false);
  }

  //Change Save Icon to "Able"
  function saveIconAble() {
    saveIconContainer.prop("disabled", false);
    saveIconContainer.removeClass("disabled");
    saveIconContainer.addClass("able");
  }
});
