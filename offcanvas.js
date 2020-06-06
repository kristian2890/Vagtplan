$(function () {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })
})



var tabel = document.querySelectorAll('#myTable td')
.forEach(e => e.addEventListener("click", function() {
    // Here, `this` refers to the element the event was hooked on
    console.log(e.textContent)
}));




//     MODAL     // 
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("btn btn-primary sm-fri");

// When the user clicks on the button, open the modal
var datoKlik; 
var statusfraKlik;
for(var i = 0; i < btn.length; i++) {
  (function(index) {
    btn[index].addEventListener("click", function() {
        modal.style.display = "block";
        datoKlik = btn[index].id;
        statusfraKlik = btn[index].className.slice(-3);
     })
  })(i);
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.getElementById('dropdownMenuButton').value = "Fri";
    document.getElementById('dropdownMenuButton').innerHTML = "Vælg Person";
  }
}

$('.dropdown-toggle').dropdown()
$().dropdown('update')


// change text in dropdown with click
var innerHtmlValue; 
$('.dropdown-toggle').dropdown()
$().dropdown('update')

$(".dropdown-item").click(function () {
  //var value = $(this).data('value');
  //console.log("click", $(this).html());
  innerHtmlValue = $(this).html();
  document.getElementById('dropdownMenuButton').value = innerHtmlValue; 
  document.getElementById('dropdownMenuButton').innerHTML = innerHtmlValue;
});


var data = [];
var new_vagt = [];
var vagtTager;
$("#TagVagt").click(function(){ 
  if(innerHtmlValue == null) {

  } else {
    vagtTager = $(this).html();
    statusTilKlik = vagtTager.slice(0,3)
    var today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    console.log(innerHtmlValue, datoKlik, statusfraKlik, statusTilKlik, dateTime);
    new_vagt = [innerHtmlValue, datoKlik, statusfraKlik, statusTilKlik, dateTime];
    data.push(new_vagt);
    console.log(data);
}
    
/*
var data = {
  s1: [innerHtmlValue, datoKlik, statusfraKlik, statusTilKlik, dateTime],
  s2: [innerHtmlValue, datoKlik, statusfraKlik, statusTilKlik, dateTime]
};


var valueToPush = new Object( datoKlik, innerHtmlValue, statusfraKlik, statusTilKlik, dateTime);
valueToPush["date"] = dato;
valueToPush["name"] = navn;
valueToPush["statusFrom"] = statusFra;
valueToPush["statusTo"] = statusTil;
valueToPush["changeTime"] = dateTime;
data.push(valueToPush);

*/



/*
var vagtTager;
document.getElementById("TagVagt").addEventListener('click', function(){
  vagtTager = document.getElementById("TagVagt").html();
  var today = new Date();
  var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+' '+time;
  console.log(vagtTager);
  //innerHtmlValue, datoKlik,   ,dateTime
  */

})



