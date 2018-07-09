  // This is a manifest file that'll be compiled into application.js, which will include all the files
  // listed below.
  //
  // Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
  // vendor/assets/javascripts directory can be referenced here using a relative path.
  //
  // It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
  // compiled file. JavaScript code in this file should be added after the last require_* statement.
  //
  // Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
  // about supported directives.
  //
  //= require rails-ujs
  //= require activestorage
  //= require turbolinks
  //= require_tree .
  //= require jquery3
//= require popper
//= require bootstrap-sprockets


//TABS and CATEGORIES

window.onload = function(){
  document.getElementById("tab0").classList.add("active-tab");
  document.getElementById("category0").classList.remove("display-none");
}

function removeItems(){
  const displayItems  = document.querySelectorAll(".display-cards-category")
  displayItems.forEach(item => item.classList.add("display-none"))
}

function switchTab(event, tab, category){
  document.querySelector(".active-tab").classList.remove("active-tab");
  document.getElementById(tab.id).classList.add("active-tab");

  removeItems();

  document.getElementById(category.id).classList.remove("display-none");

  // For changing to small-screen auto-adjust

  const select = document.getElementById("category-change");
  let option = parseInt(tab.id.slice(-1));

  select.options[option].selected = true;
}

function selectCat(){
  removeItems();
  const select = document.getElementById("category-change");
  document.getElementById(select.value).classList.remove("display-none");


  let option = select.options[select.selectedIndex].value.slice(-1);
  let tab = "tab"+option

  document.querySelector(".active-tab").classList.remove("active-tab");
  document.getElementById(tab).classList.add("active-tab");
}

//MODALS


function zoomModal(image){

  var modal = document.getElementById('myModal');

  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = image.src;
  captionText.innerHTML = image.alt;

  document.addEventListener('keydown', (event) => {

    if (event.keyCode === 27){

      closeModal();


    }
  });

};

function closeModal(){
  var modal = document.getElementById('myModal');
  modal.style.display = "none";
};

