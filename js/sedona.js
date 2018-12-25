var link = document.querySelector(".search-btn");
var searchform = document.querySelector(".search");

link.addEventListener("click", function (evt) {

  evt.preventDefault();

  searchform.classList.toggle('search-open');


});


