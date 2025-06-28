function SearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-Input");
  let cityElement = document.querySelector("#City");
  cityElement.innerHTML = searchInput.value;
}
let searchFormElement =  document.querySelector("#search-form");
searchFormElement.addEventListener("submit", SearchSubmit);