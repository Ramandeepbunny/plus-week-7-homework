function SearchSubmit(event){
  event.preventdefult();
  let serchInput = document.querySelector("#search-Input");
  console.log(searchInput.value);
}


let serachFormElement =  document.querySelector("#search-form");
serachFormElement.addEventListener("submit", SearchSubmit);