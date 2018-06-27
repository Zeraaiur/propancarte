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
}


function selectCat(){

  removeItems();
  const category = document.getElementById("category-change").value
  document.getElementById(category).classList.remove("display-none");
}


