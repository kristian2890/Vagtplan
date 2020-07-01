// Open website on localhost : python -m http.server 8001



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


// Ledige Vagter SKJUL 4-10
function hideLists() {
    document.getElementById("TagVagt-list_entry_4").style.display = 'none';
    document.getElementById("TagVagt-list_entry_5").style.display = 'none';
    document.getElementById("TagVagt-list_entry_6").style.display = 'none';
    document.getElementById("TagVagt-list_entry_7").style.display = 'none';
    document.getElementById("TagVagt-list_entry_8").style.display = 'none';
    document.getElementById("TagVagt-list_entry_9").style.display = 'none';
    document.getElementById("TagVagt-list_entry_10").style.display = 'none';
    document.getElementById("AfgVagt-list_entry_4").style.display = 'none';
    document.getElementById("AfgVagt-list_entry_5").style.display = 'none';
    document.getElementById("AfgVagt-list_entry_6").style.display = 'none';
    document.getElementById("AfgVagt-list_entry_7").style.display = 'none';
    document.getElementById("AfgVagt-list_entry_8").style.display = 'none';
    document.getElementById("AfgVagt-list_entry_9").style.display = 'none';
    document.getElementById("AfgVagt-list_entry_10").style.display = 'none';

}


// Ledige Vagter Expand 
document.getElementsByClassName('btn btn-dark btn-sm ledig')[0].addEventListener('click', expandhideLedigeVagter);

function expandhideLedigeVagter()  {
  if(document.getElementById("TagVagt-list_entry_10").style.display == 'none') {

  document.getElementById("TagVagt-list_entry_4").style.display = 'block';
  document.getElementById("TagVagt-list_entry_4").style.display = 'block';
  document.getElementById("TagVagt-list_entry_5").style.display = 'block';
  document.getElementById("TagVagt-list_entry_6").style.display = 'block';
  document.getElementById("TagVagt-list_entry_7").style.display = 'block';
  document.getElementById("TagVagt-list_entry_8").style.display = 'block';
  document.getElementById("TagVagt-list_entry_9").style.display = 'block';
  document.getElementById("TagVagt-list_entry_10").style.display = 'block';
  document.getElementsByClassName('btn btn-dark btn-sm ledig')[0].innerHTML = 'Vis færre'
  // document.getElementsByClassName('btn btn-dark btn-sm taget')[0].setAttribute('class', 'btn btn-dark btn-sm taget_exp')
} else if (document.getElementById("TagVagt-list_entry_10").style.display == 'block') {
  document.getElementById("TagVagt-list_entry_4").style.display = 'none';
  document.getElementById("TagVagt-list_entry_5").style.display = 'none';
  document.getElementById("TagVagt-list_entry_6").style.display = 'none';
  document.getElementById("TagVagt-list_entry_7").style.display = 'none';
  document.getElementById("TagVagt-list_entry_8").style.display = 'none';
  document.getElementById("TagVagt-list_entry_9").style.display = 'none';
  document.getElementById("TagVagt-list_entry_10").style.display = 'none';
  document.getElementsByClassName('btn btn-dark btn-sm ledig')[0].innerHTML = 'Vis flere'
} else {} }

expandhideLedigeVagter()
expandhideLedigeVagter



// Kommende Vagter Expand 
document.getElementsByClassName('btn btn-dark btn-sm taget')[0].addEventListener('click', expandhideKommendeVagter);

function expandhideKommendeVagter()  {
  if(document.getElementById("AfgVagt-list_entry_10").style.display == 'none') {

  document.getElementById("AfgVagt-list_entry_4").style.display = 'block';
  document.getElementById("AfgVagt-list_entry_5").style.display = 'block';
  document.getElementById("AfgVagt-list_entry_6").style.display = 'block';
  document.getElementById("AfgVagt-list_entry_7").style.display = 'block';
  document.getElementById("AfgVagt-list_entry_8").style.display = 'block';
  document.getElementById("AfgVagt-list_entry_9").style.display = 'block';
  document.getElementById("AfgVagt-list_entry_10").style.display = 'block';
  document.getElementsByClassName('btn btn-dark btn-sm taget')[0].innerHTML = 'Vis færre'
  // document.getElementsByClassName('btn btn-dark btn-sm taget')[0].setAttribute('class', 'btn btn-dark btn-sm taget_exp')
} else if (document.getElementById("AfgVagt-list_entry_10").style.display == 'block') {
  document.getElementById("AfgVagt-list_entry_4").style.display = 'none';
  document.getElementById("AfgVagt-list_entry_5").style.display = 'none';
  document.getElementById("AfgVagt-list_entry_6").style.display = 'none';
  document.getElementById("AfgVagt-list_entry_7").style.display = 'none';
  document.getElementById("AfgVagt-list_entry_8").style.display = 'none';
  document.getElementById("AfgVagt-list_entry_9").style.display = 'none';
  document.getElementById("AfgVagt-list_entry_10").style.display = 'none';
  document.getElementsByClassName('btn btn-dark btn-sm taget')[0].innerHTML = 'Vis flere'
} else {} }

expandhideKommendeVagter()
expandhideKommendeVagter

// Tag Vagt fra LedigeVagter Liste
/// ved klik på Tag-knap: 

document.getElementById('TagVagt-list1').addEventListener('click', TagVagtListeKlik)

function TagVagtListeKlik() {
  modal_afg.style.display = "block";
  document.getElementById("Text_afg").innerHTML = "Vælg person og tag vagten."
  document.getElementById("Dato_afg").innerHTML = document.getElementById("TagVagt-list1").getAttribute('dato')
  datoKlik = document.getElementById("TagVagt-list1").getAttribute('dato')
  statusTilKlik = "btn btn-primary sm-tag"
    var today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    dateTime = date+' '+time;
  document.getElementById("Vagtager_afg").innerHTML = "Person: "+document.getElementById("TagVagt-list1").getAttribute('person');
  innerHtmlValue = 'test'
}












// initModal 

var initModal = document.getElementById("initModal");
var initModalContent = document.getElementById("initModalContent");
var connectDatabase = document.getElementById("connectDatabase");

//Connect Click
function initModalShow() {
  initModalContent.style.display = "block";
  initModal.style.display = "block"; 
}

window.onload = initModalShow

//Connect Click
function initModalNoShow() {
    initModal.style.display = "none";
    initModalContent.style.display = "none"; 
  }


initModalNoShow

//     MODAL     // 
// Get the modal
var modal = document.getElementById("modal_fri");
var modal_tag = document.getElementById("modal_tag");
var modal_afg = document.getElementById("modal_afg");


// Get the button that opens the modal
var btns = document.getElementsByClassName("btn btn-primary");

var btn_tag = document.getElementsByClassName("sm-tag");
var btn_afg = document.getElementsByClassName("sm-afg");

// When the user clicks on the button, open the modal
var datoKlik; 
var statusfraKlik;


for(var i = 0; i < btns.length; i++) {
  (function(index) {
    btns[index].addEventListener("click", function() {
        modalfunction();
        modalfunction;
     })
  })(i);
}


function modalfunction() { 
  btns = document.getElementsByClassName("btn btn-primary");
  for(var i = 0; i < btns.length; i++) {
    (function(index) {
      btns[index].addEventListener("click", function() {
        btns = document.getElementsByClassName("btn btn-primary");
        datoKlik = btns[index].id;
        statusfraKlik = btns[index].className;
        vagtstring = 'Vagttager: '
        if(btns[index].getAttribute('person')=='ingen') {
            modal.style.display = "block";
          } else if (btns[index].getAttribute('class').slice(-6)=='sm-afg') {
            modal_afg.style.display = "block";
            document.getElementById("Dato_afg").innerHTML = datoKlik;
            document.getElementById("Vagtager_afg").innerHTML = vagtstring.concat(btns[index].getAttribute('person'));  
          } else {
            modal_tag.style.display = "block";
            document.getElementById("Dato_tag").innerHTML = datoKlik;
            document.getElementById("Vagtager_tag").innerHTML = vagtstring.concat(btns[index].getAttribute('person'));
          }
          
        })
        })(i);
  }
}
modalfunction();
modalfunction;

/*
for(var i = 0; i < btn_tag.length; i++) {
  (function(index) {
    btn_tag[index].addEventListener("click", function() {
        modal_tag.style.display = "block";
        datoKlik = btn_tag[index].id;
        statusfraKlik = btn_tag[index].className;
     })
  })(i);
}
*/


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal || event.target == modal_tag || event.target == modal_afg) {
    modal.style.display = "none";
    modal_tag.style.display = "none"; 
    modal_afg.style.display = "none";  
    document.getElementById('dropdownMenuButton').value = "Fri";
    document.getElementById('dropdownMenuButton').innerHTML = "Vælg Person";
  }
}



// change text in dropdown with click
var innerHtmlValue; 
$('.dropdown-toggle afg').dropdown()
$().dropdown('update')


var innerHtmlValue; 
$('.dropdown-toggle tag').dropdown()
$().dropdown('update')

$("#Sarah-tag").click(VaelgPerson_Sarah_tag) 
$("#Joachim-tag").click(VaelgPerson_Joachim_tag)  
$("#Ellen-tag").click(VaelgPerson_Ellen_tag)   
  
$("#Sarah-afg").click(VaelgPerson_Sarah_afg) 
$("#Joachim-afg").click(VaelgPerson_Joachim_afg)  
$("#Ellen-afg").click(VaelgPerson_Ellen_afg)   


function VaelgPerson_Sarah_tag() {
  innerHtmlValue = "Sarah";
  document.getElementById('dropdownMenuButton').value = innerHtmlValue; 
  document.getElementById('dropdownMenuButton').innerHTML = innerHtmlValue;
  statusfraKlik = "btn btn-primary sm-fri"
};

function VaelgPerson_Sarah_afg() {
  innerHtmlValue = "Sarah";
  document.getElementById('dropdownMenuButton-afg').value = innerHtmlValue; 
  document.getElementById('dropdownMenuButton-afg').innerHTML = innerHtmlValue;
  statusfraKlik = "btn btn-primary sm-afg";
  datoKlik = getElementById('Sarah-afg').getAttribute('dato')
}

function VaelgPerson_Joachim_tag() {
  innerHtmlValue = "Joachim";
  document.getElementById('dropdownMenuButton').value = innerHtmlValue; 
  document.getElementById('dropdownMenuButton').innerHTML = innerHtmlValue;
  statusfraKlik = "btn btn-primary sm-fri";
};

function VaelgPerson_Joachim_afg() {
  innerHtmlValue = "Joachim";
  document.getElementById('dropdownMenuButton-afg').value = innerHtmlValue; 
  document.getElementById('dropdownMenuButton-afg').innerHTML = innerHtmlValue;
  statusfraKlik = "btn btn-primary sm-afg";
  datoKlik = getElementById('Joachim-afg').getAttribute('dato')
};

function VaelgPerson_Ellen_tag() {
  innerHtmlValue = "Ellen";
  document.getElementById('dropdownMenuButton').value = innerHtmlValue; 
  document.getElementById('dropdownMenuButton').innerHTML = innerHtmlValue;
  statusfraKlik = "btn btn-primary sm-fri";
};

function VaelgPerson_Ellen_afg() {
  innerHtmlValue = "Ellen";
  document.getElementById('dropdownMenuButton-afg').value = innerHtmlValue; 
  document.getElementById('dropdownMenuButton-afg').innerHTML = innerHtmlValue;
  statusfraKlik = "btn btn-primary sm-afg";
  datoKlik = getElementById('Ellen-afg').getAttribute('dato')
};

/*
$(".dropdown-item").click(VaelgPerson) 

function VaelgPerson() {
  if()
  innerHtmlValue = "";
  innerHtmlValue = $(this).html();
  document.getElementById('dropdownMenuButton').value = innerHtmlValue; 
  document.getElementById('dropdownMenuButton').innerHTML = innerHtmlValue;
}; */


// change text in dropdown with click AFGIV VAGT



var data = function(index, person, dato, statusfra, statustil, tidspunkt) {
  this.id = index;
  this.person = person;
  this.dato = dato;
  this.statusfra = statusfra;
  this.statustil = statustil;
  this.tidspunkt = tidspunkt;
};



// TAG VAGT UPDATE
var vagtTager;
$("#TagVagt").click(function(){ 
  if(innerHtmlValue == null) {

  } else {
    vagtTager = $(this).html();
    statusTilKlik = "btn btn-primary sm-tag"
    var today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    console.log(innerHtmlValue, datoKlik, statusfraKlik, statusTilKlik, dateTime);
    //authenticate().then(loadClient()).then()
      execute(
      [
        [
          datoKlik
        ],
        [
          innerHtmlValue
        ],
        [
          statusfraKlik
        ],
        [
          statusTilKlik
        ],
        [
          dateTime
        ]
      ]
    ); //) før ;
    // skift farve på vagt 
    document.getElementById(datoKlik).className = "btn btn-primary sm-tag";
    // fjern modal
    getData(YearMonthRange[selectedMonth]).then(waiting(1000))
    modal.style.display = "none";
    innerHtmlValue = '';
}})


// TAG VAGT UPDATE
$("#AfgivVagt").click(function(){ 
    vagtTager = $(this).html();
    statusTilKlik = "btn btn-primary sm-afg"
    var today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    console.log(innerHtmlValue, datoKlik, statusfraKlik, statusTilKlik, dateTime);
    //authenticate().then(loadClient()).then()
      execute(
      [
        [
          datoKlik
        ],
        [
          innerHtmlValue
        ],
        [
          statusfraKlik
        ],
        [
          statusTilKlik
        ],
        [
          dateTime
        ]
      ]
    ); //) før ;
    // skift farve på vagt 
    document.getElementById(datoKlik).className = "btn btn-primary sm-afg";
    // fjern modal
    getData(YearMonthRange[selectedMonth]).then(waiting(1000))
    modal_tag.style.display = "none";
    innerHtmlValue = '';
})


// Tag afgivet vagt #TagVagt-afg
$("#TagVagt-afg").click(function(){ 
  if(innerHtmlValue == null) {

  } else {
    vagtTager = $(this).html();
    statusTilKlik = "btn btn-primary sm-tag"
    var today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    console.log(innerHtmlValue, datoKlik, statusfraKlik, statusTilKlik, dateTime);
    //authenticate().then(loadClient()).then()
      execute(
      [
        [
          datoKlik
        ],
        [
          innerHtmlValue
        ],
        [
          statusfraKlik
        ],
        [
          statusTilKlik
        ],
        [
          dateTime
        ]
      ]
    ); //) før ;
    // skift farve på vagt 
    document.getElementById(datoKlik).className = "btn btn-primary sm-tag";
    // fjern modal
    getData(YearMonthRange[selectedMonth]).then(waiting(1000))
    modal_afg.style.display = "none";
    innerHtmlValue = '';
}})



var dataPlaceholder; 
function getData(rangeInput) {
  return gapi.client.sheets.spreadsheets.values.get({
    "spreadsheetId": "1GZJ0pLFz1AReNUUySt4g83JKz6_rahPH8_J3rK9onBE",
    "range": rangeInput,
    "majorDimension": "COLUMNS",
    "valueRenderOption": "FORMATTED_VALUE"
  })
      .then(function(response) {
              // Handle the results here (response.result has the parsed body).
              console.log("Response", response);
              dataPlaceholder = response;
              
            },
            function(err) { console.error("Execute error", err); });
}


// Get Top10 Kommende Vagter
var dataPlaceholderTop10Ledige; 
function getTop10LedigeData() {
  return gapi.client.sheets.spreadsheets.values.get({
    "spreadsheetId": "1GZJ0pLFz1AReNUUySt4g83JKz6_rahPH8_J3rK9onBE",
    "range": 'Top10!A2:I12',
    "majorDimension": "COLUMNS",
    "valueRenderOption": "FORMATTED_VALUE"
  })
      .then(function(response) {
              // Handle the results here (response.result has the parsed body).
              console.log("Response", response);
              dataPlaceholderTop10Ledige = response;
              
            },
            function(err) { console.error("Execute error", err); });
}

var dataPlaceholderTop10Kommende; 
function getTop10KommendeData() {
  return gapi.client.sheets.spreadsheets.values.get({
    "spreadsheetId": "1GZJ0pLFz1AReNUUySt4g83JKz6_rahPH8_J3rK9onBE",
    "range": 'Top10!A18:I27',
    "majorDimension": "COLUMNS",
    "valueRenderOption": "FORMATTED_VALUE"
  })
      .then(function(response) {
              // Handle the results here (response.result has the parsed body).
              console.log("Response", response);
              dataPlaceholderTop10Kommende = response;
              
            },
            function(err) { console.error("Execute error", err); });
}


// Next Month + Prev Month Click

document.getElementById('nextMonth').addEventListener('click', nextMonthClick) 

document.getElementById('prevMonth').addEventListener('click', prevMonthClick) 


function nextMonthClick() {
  selectedMonth = YearMonthNext[selectedMonth]
  getData(YearMonthRange[selectedMonth]).then(waiting(1000))


}
nextMonthClick

function prevMonthClick() {
  selectedMonth = YearMonthPrev[selectedMonth]
  getData(YearMonthRange[selectedMonth]).then(waiting(1000))

}
prevMonthClick



// Current YearMonth
var d = new Date();
var day = d.getDay();
var m = d.getMonth()+1;
currentYearMonth = function () {
  d = new Date()  
  m = d.getMonth()+1;
  if(m<10) {
      currentYearMonth = d.getFullYear()+"-0"+m
      } 
      else {
      currentYearMonth = d.getFullYear()+"-"+m
      } 


}
currentYearMonth
currentYearMonth()


var YearMonthRange = {
  '2020-05':'Data!C2:H36',
  '2020-06':'Data!C37:H71',
  '2020-07':'Data!C65:H99',
  '2020-08':'Data!C93:H127',
  '2020-09':'Data!C128:H162',
  '2020-10':'Data!C156:H190',
  '2020-11':'Data!C184:H218',
  '2020-12':'Data!C219:H253',
  '2021-01':'Data!C247:H281',
  '2021-02':'Data!C282:H316',
  '2021-03':'Data!C310:H344',
  '2021-04':'Data!C338:H372',
  '2021-05':'Data!C366:H400'
}

var YearMonthStartIndex = {
  '2020-05':'5',
  '2020-06':'1',
  '2020-07':'3',
  '2020-08':'6',
  '2020-09':'2',
  '2020-10':'4',
  '2020-11':'7',
  '2020-12':'2',
  '2021-01':'5',
  '2021-02':'1',
  '2021-03':'1',
  '2021-04':'4',
  '2021-05':'6'

}

var YearMonthEndIndex = {
  '2020-05':'31',
  '2020-06':'30',
  '2020-07':'31',
  '2020-08':'31',
  '2020-09':'30',
  '2020-10':'31',
  '2020-11':'30',
  '2020-12':'31',
  '2021-01':'31',
  '2021-02':'28',
  '2021-03':'31',
  '2021-04':'30',
  '2021-05':'31'
}

var YearMonthNext = {
  '2020-05':'2020-06',
  '2020-06':'2020-07',
  '2020-07':'2020-08',
  '2020-08':'2020-09',
  '2020-09':'2020-10',
  '2020-10':'2020-11',
  '2020-11':'2020-12',
  '2020-12':'2021-01',
  '2021-01':'2021-02',
  '2021-02':'2021-03',
  '2021-03':'2021-04',
  '2021-04':'2021-05',
  '2021-05':'2021-06',
  '2021-06':'2021-07',
  '2021-07':'2021-08',
  '2021-08':'2021-09',
  '2021-09':'2021-10',
  '2021-10':'2021-11',
  '2021-11':'2021-12',
  '2021-12':'2022-01',
  '2022-01':'2022-02',
  '2022-02':'2022-03',
  '2022-03':'2022-04',
  '2022-04':'2022-05',
  '2022-05':'2022-06',
  '2022-06':'2022-07',
  '2022-07':'2022-08',
  '2022-08':'2022-09',
  '2022-09':'2022-10',
  '2022-10':'2022-11',
  '2022-11':'2022-12'                
}

var YearMonthPrev = {
  '2020-06':'2020-05',
  '2020-07':'2020-06',
  '2020-08':'2020-07',
  '2020-09':'2020-08',
  '2020-10':'2020-09',
  '2020-11':'2020-10',
  '2020-12':'2020-11',
  '2021-01':'2020-12',
  '2021-02':'2021-01',
  '2021-03':'2021-02',
  '2021-04':'2021-03',
  '2021-05':'2021-04',
  '2021-06':'2021-05',
  '2021-07':'2021-06',
  '2021-08':'2021-07',
  '2021-09':'2021-08',
  '2021-10':'2021-09',
  '2021-11':'2021-10',
  '2021-12':'2021-11',
  '2022-01':'2021-12',
  '2022-02':'2022-01',
  '2022-03':'2022-02',
  '2022-04':'2022-03',
  '2022-05':'2022-04',
  '2022-06':'2022-05',
  '2022-07':'2022-06',
  '2022-08':'2022-07',
  '2022-09':'2022-08',
  '2022-10':'2022-09',
  '2022-11':'2022-10',
  '2022-12':'2022-11'                
}


// Get Current Month Data Array (dataPlaceholder) from google sheet


var dataMonthIndex; 
var dataMonthDatoer = document.getElementsByClassName("btn btn-primary");
var counter = 0;
var selectedMonth = currentYearMonth;

function waiting(time) { wait(time).then(() => setNewDatoValues())}
const wait=ms=>new Promise(resolve => setTimeout(resolve, ms)); 



function setNewDatoValues() {

  
  document.getElementById("calendarTitel").innerText = selectedMonth; 

  // VALUE
  dataMonthDatoer[0].setAttribute('value', dataPlaceholder.result.values[0][0].slice(0,2)),
  dataMonthDatoer[1].setAttribute('value', dataPlaceholder.result.values[0][1].slice(0,2)),
  dataMonthDatoer[2].setAttribute('value', dataPlaceholder.result.values[0][2].slice(0,2)),
  dataMonthDatoer[3].setAttribute('value', dataPlaceholder.result.values[0][3].slice(0,2)),
  dataMonthDatoer[4].setAttribute('value', dataPlaceholder.result.values[0][4].slice(0,2)),
  dataMonthDatoer[5].setAttribute('value', dataPlaceholder.result.values[0][5].slice(0,2)),
  dataMonthDatoer[6].setAttribute('value', dataPlaceholder.result.values[0][6].slice(0,2)),
  dataMonthDatoer[7].setAttribute('value', dataPlaceholder.result.values[0][7].slice(0,2)),
  dataMonthDatoer[8].setAttribute('value', dataPlaceholder.result.values[0][8].slice(0,2)),
  dataMonthDatoer[9].setAttribute('value', dataPlaceholder.result.values[0][9].slice(0,2)),
  dataMonthDatoer[10].setAttribute('value', dataPlaceholder.result.values[0][10].slice(0,2)),
  dataMonthDatoer[11].setAttribute('value', dataPlaceholder.result.values[0][11].slice(0,2)),
  dataMonthDatoer[12].setAttribute('value', dataPlaceholder.result.values[0][12].slice(0,2)),
  dataMonthDatoer[13].setAttribute('value', dataPlaceholder.result.values[0][13].slice(0,2)),
  dataMonthDatoer[14].setAttribute('value', dataPlaceholder.result.values[0][14].slice(0,2)),
  dataMonthDatoer[15].setAttribute('value', dataPlaceholder.result.values[0][15].slice(0,2)),
  dataMonthDatoer[16].setAttribute('value', dataPlaceholder.result.values[0][16].slice(0,2)),
  dataMonthDatoer[17].setAttribute('value', dataPlaceholder.result.values[0][17].slice(0,2)),
  dataMonthDatoer[18].setAttribute('value', dataPlaceholder.result.values[0][18].slice(0,2)),
  dataMonthDatoer[19].setAttribute('value', dataPlaceholder.result.values[0][19].slice(0,2)),
  dataMonthDatoer[20].setAttribute('value', dataPlaceholder.result.values[0][20].slice(0,2)),
  dataMonthDatoer[21].setAttribute('value', dataPlaceholder.result.values[0][21].slice(0,2)),
  dataMonthDatoer[22].setAttribute('value', dataPlaceholder.result.values[0][22].slice(0,2)),
  dataMonthDatoer[23].setAttribute('value', dataPlaceholder.result.values[0][23].slice(0,2)),
  dataMonthDatoer[24].setAttribute('value', dataPlaceholder.result.values[0][24].slice(0,2)),
  dataMonthDatoer[25].setAttribute('value', dataPlaceholder.result.values[0][25].slice(0,2)),
  dataMonthDatoer[26].setAttribute('value', dataPlaceholder.result.values[0][26].slice(0,2)),
  dataMonthDatoer[27].setAttribute('value', dataPlaceholder.result.values[0][27].slice(0,2)),
  dataMonthDatoer[28].setAttribute('value', dataPlaceholder.result.values[0][28].slice(0,2)),
  dataMonthDatoer[29].setAttribute('value', dataPlaceholder.result.values[0][29].slice(0,2)),
  dataMonthDatoer[30].setAttribute('value', dataPlaceholder.result.values[0][30].slice(0,2)),
  dataMonthDatoer[31].setAttribute('value', dataPlaceholder.result.values[0][31].slice(0,2)),
  dataMonthDatoer[32].setAttribute('value', dataPlaceholder.result.values[0][32].slice(0,2)),
  dataMonthDatoer[33].setAttribute('value', dataPlaceholder.result.values[0][33].slice(0,2)),
  dataMonthDatoer[34].setAttribute('value', dataPlaceholder.result.values[0][34].slice(0,2))

  // PERSON
  dataMonthDatoer[0].setAttribute('person', dataPlaceholder.result.values[2][0]),
  dataMonthDatoer[1].setAttribute('person', dataPlaceholder.result.values[2][1]),
  dataMonthDatoer[2].setAttribute('person', dataPlaceholder.result.values[2][2]),
  dataMonthDatoer[3].setAttribute('person', dataPlaceholder.result.values[2][3]),
  dataMonthDatoer[4].setAttribute('person', dataPlaceholder.result.values[2][4]),
  dataMonthDatoer[5].setAttribute('person', dataPlaceholder.result.values[2][5]),
  dataMonthDatoer[6].setAttribute('person', dataPlaceholder.result.values[2][6]),
  dataMonthDatoer[7].setAttribute('person', dataPlaceholder.result.values[2][7]),
  dataMonthDatoer[8].setAttribute('person', dataPlaceholder.result.values[2][8]),
  dataMonthDatoer[9].setAttribute('person', dataPlaceholder.result.values[2][9]),
  dataMonthDatoer[10].setAttribute('person', dataPlaceholder.result.values[2][10]),
  dataMonthDatoer[11].setAttribute('person', dataPlaceholder.result.values[2][11]),
  dataMonthDatoer[12].setAttribute('person', dataPlaceholder.result.values[2][12]),
  dataMonthDatoer[13].setAttribute('person', dataPlaceholder.result.values[2][13]),
  dataMonthDatoer[14].setAttribute('person', dataPlaceholder.result.values[2][14]),
  dataMonthDatoer[15].setAttribute('person', dataPlaceholder.result.values[2][15]),
  dataMonthDatoer[16].setAttribute('person', dataPlaceholder.result.values[2][16]),
  dataMonthDatoer[17].setAttribute('person', dataPlaceholder.result.values[2][17]),
  dataMonthDatoer[18].setAttribute('person', dataPlaceholder.result.values[2][18]),
  dataMonthDatoer[19].setAttribute('person', dataPlaceholder.result.values[2][19]),
  dataMonthDatoer[20].setAttribute('person', dataPlaceholder.result.values[2][20]),
  dataMonthDatoer[21].setAttribute('person', dataPlaceholder.result.values[2][21]),
  dataMonthDatoer[22].setAttribute('person', dataPlaceholder.result.values[2][22]),
  dataMonthDatoer[23].setAttribute('person', dataPlaceholder.result.values[2][23]),
  dataMonthDatoer[24].setAttribute('person', dataPlaceholder.result.values[2][24]),
  dataMonthDatoer[25].setAttribute('person', dataPlaceholder.result.values[2][25]),
  dataMonthDatoer[26].setAttribute('person', dataPlaceholder.result.values[2][26]),
  dataMonthDatoer[27].setAttribute('person', dataPlaceholder.result.values[2][27]),
  dataMonthDatoer[28].setAttribute('person', dataPlaceholder.result.values[2][28]),
  dataMonthDatoer[29].setAttribute('person', dataPlaceholder.result.values[2][29]),
  dataMonthDatoer[30].setAttribute('person', dataPlaceholder.result.values[2][30]),
  dataMonthDatoer[31].setAttribute('person', dataPlaceholder.result.values[2][31]),
  dataMonthDatoer[32].setAttribute('person', dataPlaceholder.result.values[2][32]),
  dataMonthDatoer[33].setAttribute('person', dataPlaceholder.result.values[2][33]),
  dataMonthDatoer[34].setAttribute('person', dataPlaceholder.result.values[2][34]),

  // STATUS
  dataMonthDatoer[0].setAttribute('class', dataPlaceholder.result.values[4][0]),
  dataMonthDatoer[1].setAttribute('class', dataPlaceholder.result.values[4][1]),
  dataMonthDatoer[2].setAttribute('class', dataPlaceholder.result.values[4][2]),
  dataMonthDatoer[3].setAttribute('class', dataPlaceholder.result.values[4][3]),
  dataMonthDatoer[4].setAttribute('class', dataPlaceholder.result.values[4][4]),
  dataMonthDatoer[5].setAttribute('class', dataPlaceholder.result.values[4][5]),
  dataMonthDatoer[6].setAttribute('class', dataPlaceholder.result.values[4][6]),
  dataMonthDatoer[7].setAttribute('class', dataPlaceholder.result.values[4][7]),
  dataMonthDatoer[8].setAttribute('class', dataPlaceholder.result.values[4][8]),
  dataMonthDatoer[9].setAttribute('class', dataPlaceholder.result.values[4][9]),
  dataMonthDatoer[10].setAttribute('class', dataPlaceholder.result.values[4][10]),
  dataMonthDatoer[11].setAttribute('class', dataPlaceholder.result.values[4][11]),
  dataMonthDatoer[12].setAttribute('class', dataPlaceholder.result.values[4][12]),
  dataMonthDatoer[13].setAttribute('class', dataPlaceholder.result.values[4][13]),
  dataMonthDatoer[14].setAttribute('class', dataPlaceholder.result.values[4][14]),
  dataMonthDatoer[15].setAttribute('class', dataPlaceholder.result.values[4][15]),
  dataMonthDatoer[16].setAttribute('class', dataPlaceholder.result.values[4][16]),
  dataMonthDatoer[17].setAttribute('class', dataPlaceholder.result.values[4][17]),
  dataMonthDatoer[18].setAttribute('class', dataPlaceholder.result.values[4][18]),
  dataMonthDatoer[19].setAttribute('class', dataPlaceholder.result.values[4][19]),
  dataMonthDatoer[20].setAttribute('class', dataPlaceholder.result.values[4][20]),
  dataMonthDatoer[21].setAttribute('class', dataPlaceholder.result.values[4][21]),
  dataMonthDatoer[22].setAttribute('class', dataPlaceholder.result.values[4][22]),
  dataMonthDatoer[23].setAttribute('class', dataPlaceholder.result.values[4][23]),
  dataMonthDatoer[24].setAttribute('class', dataPlaceholder.result.values[4][24]),
  dataMonthDatoer[25].setAttribute('class', dataPlaceholder.result.values[4][25]),
  dataMonthDatoer[26].setAttribute('class', dataPlaceholder.result.values[4][26]),
  dataMonthDatoer[27].setAttribute('class', dataPlaceholder.result.values[4][27]),
  dataMonthDatoer[28].setAttribute('class', dataPlaceholder.result.values[4][28]),
  dataMonthDatoer[29].setAttribute('class', dataPlaceholder.result.values[4][29]),
  dataMonthDatoer[30].setAttribute('class', dataPlaceholder.result.values[4][30]),
  dataMonthDatoer[31].setAttribute('class', dataPlaceholder.result.values[4][31]),
  dataMonthDatoer[32].setAttribute('class', dataPlaceholder.result.values[4][32]),
  dataMonthDatoer[33].setAttribute('class', dataPlaceholder.result.values[4][33]),
  dataMonthDatoer[34].setAttribute('class', dataPlaceholder.result.values[4][34]),

  // DATO
  dataMonthDatoer[0].setAttribute('id', dataPlaceholder.result.values[1][0]),
  dataMonthDatoer[1].setAttribute('id', dataPlaceholder.result.values[1][1]),
  dataMonthDatoer[2].setAttribute('id', dataPlaceholder.result.values[1][2]),
  dataMonthDatoer[3].setAttribute('id', dataPlaceholder.result.values[1][3]),
  dataMonthDatoer[4].setAttribute('id', dataPlaceholder.result.values[1][4]),
  dataMonthDatoer[5].setAttribute('id', dataPlaceholder.result.values[1][5]),
  dataMonthDatoer[6].setAttribute('id', dataPlaceholder.result.values[1][6]),
  dataMonthDatoer[7].setAttribute('id', dataPlaceholder.result.values[1][7]),
  dataMonthDatoer[8].setAttribute('id', dataPlaceholder.result.values[1][8]),
  dataMonthDatoer[9].setAttribute('id', dataPlaceholder.result.values[1][9]),
  dataMonthDatoer[10].setAttribute('id', dataPlaceholder.result.values[1][10]),
  dataMonthDatoer[11].setAttribute('id', dataPlaceholder.result.values[1][11]),
  dataMonthDatoer[12].setAttribute('id', dataPlaceholder.result.values[1][12]),
  dataMonthDatoer[13].setAttribute('id', dataPlaceholder.result.values[1][13]),
  dataMonthDatoer[14].setAttribute('id', dataPlaceholder.result.values[1][14]),
  dataMonthDatoer[15].setAttribute('id', dataPlaceholder.result.values[1][15]),
  dataMonthDatoer[16].setAttribute('id', dataPlaceholder.result.values[1][16]),
  dataMonthDatoer[17].setAttribute('id', dataPlaceholder.result.values[1][17]),
  dataMonthDatoer[18].setAttribute('id', dataPlaceholder.result.values[1][18]),
  dataMonthDatoer[19].setAttribute('id', dataPlaceholder.result.values[1][19]),
  dataMonthDatoer[20].setAttribute('id', dataPlaceholder.result.values[1][20]),
  dataMonthDatoer[21].setAttribute('id', dataPlaceholder.result.values[1][21]),
  dataMonthDatoer[22].setAttribute('id', dataPlaceholder.result.values[1][22]),
  dataMonthDatoer[23].setAttribute('id', dataPlaceholder.result.values[1][23]),
  dataMonthDatoer[24].setAttribute('id', dataPlaceholder.result.values[1][24]),
  dataMonthDatoer[25].setAttribute('id', dataPlaceholder.result.values[1][25]),
  dataMonthDatoer[26].setAttribute('id', dataPlaceholder.result.values[1][26]),
  dataMonthDatoer[27].setAttribute('id', dataPlaceholder.result.values[1][27]),
  dataMonthDatoer[28].setAttribute('id', dataPlaceholder.result.values[1][28]),
  dataMonthDatoer[29].setAttribute('id', dataPlaceholder.result.values[1][29]),
  dataMonthDatoer[30].setAttribute('id', dataPlaceholder.result.values[1][30]),
  dataMonthDatoer[31].setAttribute('id', dataPlaceholder.result.values[1][31]),
  dataMonthDatoer[32].setAttribute('id', dataPlaceholder.result.values[1][32]),
  dataMonthDatoer[33].setAttribute('id', dataPlaceholder.result.values[1][33]),
  dataMonthDatoer[34].setAttribute('id', dataPlaceholder.result.values[1][34]),

  // DATO
  dataMonthDatoer[0].setAttribute('data-target', dataPlaceholder.result.values[5][0]),
  dataMonthDatoer[1].setAttribute('data-target', dataPlaceholder.result.values[5][1]),
  dataMonthDatoer[2].setAttribute('data-target', dataPlaceholder.result.values[5][2]),
  dataMonthDatoer[3].setAttribute('data-target', dataPlaceholder.result.values[5][3]),
  dataMonthDatoer[4].setAttribute('data-target', dataPlaceholder.result.values[5][4]),
  dataMonthDatoer[5].setAttribute('data-target', dataPlaceholder.result.values[5][5]),
  dataMonthDatoer[6].setAttribute('data-target', dataPlaceholder.result.values[5][6]),
  dataMonthDatoer[7].setAttribute('data-target', dataPlaceholder.result.values[5][7]),
  dataMonthDatoer[8].setAttribute('data-target', dataPlaceholder.result.values[5][8]),
  dataMonthDatoer[9].setAttribute('data-target', dataPlaceholder.result.values[5][9]),
  dataMonthDatoer[10].setAttribute('data-target', dataPlaceholder.result.values[5][10]),
  dataMonthDatoer[11].setAttribute('data-target', dataPlaceholder.result.values[5][11]),
  dataMonthDatoer[12].setAttribute('data-target', dataPlaceholder.result.values[5][12]),
  dataMonthDatoer[13].setAttribute('data-target', dataPlaceholder.result.values[5][13]),
  dataMonthDatoer[14].setAttribute('data-target', dataPlaceholder.result.values[5][14]),
  dataMonthDatoer[15].setAttribute('data-target', dataPlaceholder.result.values[5][15]),
  dataMonthDatoer[16].setAttribute('data-target', dataPlaceholder.result.values[5][16]),
  dataMonthDatoer[17].setAttribute('data-target', dataPlaceholder.result.values[5][17]),
  dataMonthDatoer[18].setAttribute('data-target', dataPlaceholder.result.values[5][18]),
  dataMonthDatoer[19].setAttribute('data-target', dataPlaceholder.result.values[5][19]),
  dataMonthDatoer[20].setAttribute('data-target', dataPlaceholder.result.values[5][20]),
  dataMonthDatoer[21].setAttribute('data-target', dataPlaceholder.result.values[5][21]),
  dataMonthDatoer[22].setAttribute('data-target', dataPlaceholder.result.values[5][22]),
  dataMonthDatoer[23].setAttribute('data-target', dataPlaceholder.result.values[5][23]),
  dataMonthDatoer[24].setAttribute('data-target', dataPlaceholder.result.values[5][24]),
  dataMonthDatoer[25].setAttribute('data-target', dataPlaceholder.result.values[5][25]),
  dataMonthDatoer[26].setAttribute('data-target', dataPlaceholder.result.values[5][26]),
  dataMonthDatoer[27].setAttribute('data-target', dataPlaceholder.result.values[5][27]),
  dataMonthDatoer[28].setAttribute('data-target', dataPlaceholder.result.values[5][28]),
  dataMonthDatoer[29].setAttribute('data-target', dataPlaceholder.result.values[5][29]),
  dataMonthDatoer[30].setAttribute('data-target', dataPlaceholder.result.values[5][30]),
  dataMonthDatoer[31].setAttribute('data-target', dataPlaceholder.result.values[5][31]),
  dataMonthDatoer[32].setAttribute('data-target', dataPlaceholder.result.values[5][32]),
  dataMonthDatoer[33].setAttribute('data-target', dataPlaceholder.result.values[5][33]),
  dataMonthDatoer[34].setAttribute('data-target', dataPlaceholder.result.values[5][34])

  
  btn = document.getElementsByClassName("btn.btn-primary");
  
  //TOP 10 Ledige Vager: 
  document.getElementById('TagVagt-list_Name1').innerHTML = dataPlaceholderTop10Ledige.result.values[4][1]
  document.getElementById('TagVagt-list_Dato1').innerHTML = dataPlaceholderTop10Ledige.result.values[3][1]
  document.getElementById('TagVagt-list1').setAttribute('person', dataPlaceholderTop10Ledige.result.values[4][1])
  document.getElementById('TagVagt-list1').setAttribute('dato', dataPlaceholderTop10Ledige.result.values[3][1])

  document.getElementById('TagVagt-list_Name2').innerHTML = dataPlaceholderTop10Ledige.result.values[4][2]
  document.getElementById('TagVagt-list_Dato2').innerHTML = dataPlaceholderTop10Ledige.result.values[3][2]
  document.getElementById('TagVagt-list2').setAttribute('person', dataPlaceholderTop10Ledige.result.values[4][2])
  document.getElementById('TagVagt-list2').setAttribute('dato', dataPlaceholderTop10Ledige.result.values[3][2])

  document.getElementById('TagVagt-list_Name3').innerHTML = dataPlaceholderTop10Ledige.result.values[4][3]
  document.getElementById('TagVagt-list_Dato3').innerHTML = dataPlaceholderTop10Ledige.result.values[3][3]
  document.getElementById('TagVagt-list3').setAttribute('person', dataPlaceholderTop10Ledige.result.values[4][3])
  document.getElementById('TagVagt-list3').setAttribute('dato', dataPlaceholderTop10Ledige.result.values[3][3])

  document.getElementById('TagVagt-list_Name4').innerHTML = dataPlaceholderTop10Ledige.result.values[4][4]
  document.getElementById('TagVagt-list_Dato4').innerHTML = dataPlaceholderTop10Ledige.result.values[3][4]
  document.getElementById('TagVagt-list4').setAttribute('person', dataPlaceholderTop10Ledige.result.values[4][4])
  document.getElementById('TagVagt-list4').setAttribute('dato', dataPlaceholderTop10Ledige.result.values[3][4])

  document.getElementById('TagVagt-list_Name5').innerHTML = dataPlaceholderTop10Ledige.result.values[4][5]
  document.getElementById('TagVagt-list_Dato5').innerHTML = dataPlaceholderTop10Ledige.result.values[3][5]
  document.getElementById('TagVagt-list5').setAttribute('person', dataPlaceholderTop10Ledige.result.values[4][5])
  document.getElementById('TagVagt-list5').setAttribute('dato', dataPlaceholderTop10Ledige.result.values[3][5])

  document.getElementById('TagVagt-list_Name6').innerHTML = dataPlaceholderTop10Ledige.result.values[4][6]
  document.getElementById('TagVagt-list_Dato6').innerHTML = dataPlaceholderTop10Ledige.result.values[3][6]
  document.getElementById('TagVagt-list6').setAttribute('person', dataPlaceholderTop10Ledige.result.values[4][6])
  document.getElementById('TagVagt-list6').setAttribute('dato', dataPlaceholderTop10Ledige.result.values[3][6])

  document.getElementById('TagVagt-list_Name7').innerHTML = dataPlaceholderTop10Ledige.result.values[4][7]
  document.getElementById('TagVagt-list_Dato7').innerHTML = dataPlaceholderTop10Ledige.result.values[3][7]
  document.getElementById('TagVagt-list7').setAttribute('person', dataPlaceholderTop10Ledige.result.values[4][7])
  document.getElementById('TagVagt-list7').setAttribute('dato', dataPlaceholderTop10Ledige.result.values[3][7])

  document.getElementById('TagVagt-list_Name8').innerHTML = dataPlaceholderTop10Ledige.result.values[4][8]
  document.getElementById('TagVagt-list_Dato8').innerHTML = dataPlaceholderTop10Ledige.result.values[3][8]
  document.getElementById('TagVagt-list8').setAttribute('person', dataPlaceholderTop10Ledige.result.values[4][8])
  document.getElementById('TagVagt-list8').setAttribute('dato', dataPlaceholderTop10Ledige.result.values[3][8])

  document.getElementById('TagVagt-list_Name9').innerHTML = dataPlaceholderTop10Ledige.result.values[4][9]
  document.getElementById('TagVagt-list_Dato9').innerHTML = dataPlaceholderTop10Ledige.result.values[3][9]
  document.getElementById('TagVagt-list9').setAttribute('person', dataPlaceholderTop10Ledige.result.values[4][9])
  document.getElementById('TagVagt-list9').setAttribute('dato', dataPlaceholderTop10Ledige.result.values[3][9])

  document.getElementById('TagVagt-list_Name10').innerHTML = dataPlaceholderTop10Ledige.result.values[4][10]
  document.getElementById('TagVagt-list_Dato10').innerHTML = dataPlaceholderTop10Ledige.result.values[3][10]
  document.getElementById('TagVagt-list10').setAttribute('person', dataPlaceholderTop10Ledige.result.values[4][10])
  document.getElementById('TagVagt-list10').setAttribute('dato', dataPlaceholderTop10Ledige.result.values[3][10])

  //TOP 10 Kommende Vager: 
  document.getElementById('AfgVagt-list_Name1').innerHTML = dataPlaceholderTop10Kommende.result.values[4][1]
  document.getElementById('AfgVagt-list_Dato1').innerHTML = dataPlaceholderTop10Kommende.result.values[3][1]
  document.getElementById('AfgVagt-list1').setAttribute('person', dataPlaceholderTop10Kommende.result.values[4][1])
  document.getElementById('AfgVagt-list1').setAttribute('dato', dataPlaceholderTop10Kommende.result.values[3][1])

  document.getElementById('AfgVagt-list_Name2').innerHTML = dataPlaceholderTop10Kommende.result.values[4][2]
  document.getElementById('AfgVagt-list_Dato2').innerHTML = dataPlaceholderTop10Kommende.result.values[3][2]
  document.getElementById('AfgVagt-list2').setAttribute('person', dataPlaceholderTop10Kommende.result.values[4][2])
  document.getElementById('AfgVagt-list2').setAttribute('dato', dataPlaceholderTop10Kommende.result.values[3][2])

  document.getElementById('AfgVagt-list_Name3').innerHTML = dataPlaceholderTop10Kommende.result.values[4][3]
  document.getElementById('AfgVagt-list_Dato3').innerHTML = dataPlaceholderTop10Kommende.result.values[3][3]
  document.getElementById('AfgVagt-list3').setAttribute('person', dataPlaceholderTop10Kommende.result.values[4][3])
  document.getElementById('AfgVagt-list3').setAttribute('dato', dataPlaceholderTop10Kommende.result.values[3][3])

  document.getElementById('AfgVagt-list_Name4').innerHTML = dataPlaceholderTop10Kommende.result.values[4][4]
  document.getElementById('AfgVagt-list_Dato4').innerHTML = dataPlaceholderTop10Kommende.result.values[3][4]
  document.getElementById('AfgVagt-list4').setAttribute('person', dataPlaceholderTop10Kommende.result.values[4][4])
  document.getElementById('AfgVagt-list4').setAttribute('dato', dataPlaceholderTop10Kommende.result.values[3][4])

  document.getElementById('AfgVagt-list_Name5').innerHTML = dataPlaceholderTop10Kommende.result.values[4][5]
  document.getElementById('AfgVagt-list_Dato5').innerHTML = dataPlaceholderTop10Kommende.result.values[3][5]
  document.getElementById('AfgVagt-list5').setAttribute('person', dataPlaceholderTop10Kommende.result.values[4][5])
  document.getElementById('AfgVagt-list5').setAttribute('dato', dataPlaceholderTop10Kommende.result.values[3][5])

  document.getElementById('AfgVagt-list_Name6').innerHTML = dataPlaceholderTop10Kommende.result.values[4][6]
  document.getElementById('AfgVagt-list_Dato6').innerHTML = dataPlaceholderTop10Kommende.result.values[3][6]
  document.getElementById('AfgVagt-list6').setAttribute('person', dataPlaceholderTop10Kommende.result.values[4][6])
  document.getElementById('AfgVagt-list6').setAttribute('dato', dataPlaceholderTop10Kommende.result.values[3][6])

  document.getElementById('AfgVagt-list_Name7').innerHTML = dataPlaceholderTop10Kommende.result.values[4][7]
  document.getElementById('AfgVagt-list_Dato7').innerHTML = dataPlaceholderTop10Kommende.result.values[3][7]
  document.getElementById('AfgVagt-list7').setAttribute('person', dataPlaceholderTop10Kommende.result.values[4][7])
  document.getElementById('AfgVagt-list7').setAttribute('dato', dataPlaceholderTop10Kommende.result.values[3][7])

  document.getElementById('AfgVagt-list_Name8').innerHTML = dataPlaceholderTop10Kommende.result.values[4][8]
  document.getElementById('AfgVagt-list_Dato8').innerHTML = dataPlaceholderTop10Kommende.result.values[3][8]
  document.getElementById('AfgVagt-list8').setAttribute('person', dataPlaceholderTop10Kommende.result.values[4][8])
  document.getElementById('AfgVagt-list8').setAttribute('dato', dataPlaceholderTop10Kommende.result.values[3][8])

  document.getElementById('AfgVagt-list_Name9').innerHTML = dataPlaceholderTop10Kommende.result.values[4][9]
  document.getElementById('AfgVagt-list_Dato9').innerHTML = dataPlaceholderTop10Kommende.result.values[3][9]
  document.getElementById('AfgVagt-list9').setAttribute('person', dataPlaceholderTop10Kommende.result.values[4][9])
  document.getElementById('AfgVagt-list9').setAttribute('dato', dataPlaceholderTop10Kommende.result.values[3][9])

  document.getElementById('AfgVagt-list_Name10').innerHTML = dataPlaceholderTop10Kommende.result.values[4][10]
  document.getElementById('AfgVagt-list_Dato10').innerHTML = dataPlaceholderTop10Kommende.result.values[3][10]
  document.getElementById('AfgVagt-list10').setAttribute('person', dataPlaceholderTop10Kommende.result.values[4][10])
  document.getElementById('AfgVagt-list10').setAttribute('dato', dataPlaceholderTop10Kommende.result.values[3][10])

}



function setPause(callback) {
    window.setTimeout(function(){
      console.log("Pause");
      callback;
      }, 3000);
}


var datoRangeLookup = {
  "Dato: 27-04-2020" : "Data!D2:H2",
  "Dato: 28-04-2020" : "Data!D3:H3",
  "Dato: 29-04-2020" : "Data!D4:H4",
  "Dato: 30-04-2020" : "Data!D5:H5",
  "Dato: 01-05-2020" : "Data!D6:H6",
  "Dato: 02-05-2020" : "Data!D7:H7",
  "Dato: 03-05-2020" : "Data!D8:H8",
  "Dato: 04-05-2020" : "Data!D9:H9",
  "Dato: 05-05-2020" : "Data!D10:H10",
  "Dato: 06-05-2020" : "Data!D11:H11",
  "Dato: 07-05-2020" : "Data!D12:H12",
  "Dato: 08-05-2020" : "Data!D13:H13",
  "Dato: 09-05-2020" : "Data!D14:H14",
  "Dato: 10-05-2020" : "Data!D15:H15",
  "Dato: 11-05-2020" : "Data!D16:H16",
  "Dato: 12-05-2020" : "Data!D17:H17",
  "Dato: 13-05-2020" : "Data!D18:H18",
  "Dato: 14-05-2020" : "Data!D19:H19",
  "Dato: 15-05-2020" : "Data!D20:H20",
  "Dato: 16-05-2020" : "Data!D21:H21",
  "Dato: 17-05-2020" : "Data!D22:H22",
  "Dato: 18-05-2020" : "Data!D23:H23",
  "Dato: 19-05-2020" : "Data!D24:H24",
  "Dato: 20-05-2020" : "Data!D25:H25",
  "Dato: 21-05-2020" : "Data!D26:H26",
  "Dato: 22-05-2020" : "Data!D27:H27",
  "Dato: 23-05-2020" : "Data!D28:H28",
  "Dato: 24-05-2020" : "Data!D29:H29",
  "Dato: 25-05-2020" : "Data!D30:H30",
  "Dato: 26-05-2020" : "Data!D31:H31",
  "Dato: 27-05-2020" : "Data!D32:H32",
  "Dato: 28-05-2020" : "Data!D33:H33",
  "Dato: 29-05-2020" : "Data!D34:H34",
  "Dato: 30-05-2020" : "Data!D35:H35",
  "Dato: 31-05-2020" : "Data!D36:H36",
  "Dato: 01-06-2020" : "Data!D37:H37",
  "Dato: 02-06-2020" : "Data!D38:H38",
  "Dato: 03-06-2020" : "Data!D39:H39",
  "Dato: 04-06-2020" : "Data!D40:H40",
  "Dato: 05-06-2020" : "Data!D41:H41",
  "Dato: 06-06-2020" : "Data!D42:H42",
  "Dato: 07-06-2020" : "Data!D43:H43",
  "Dato: 08-06-2020" : "Data!D44:H44",
  "Dato: 09-06-2020" : "Data!D45:H45",
  "Dato: 10-06-2020" : "Data!D46:H46",
  "Dato: 11-06-2020" : "Data!D47:H47",
  "Dato: 12-06-2020" : "Data!D48:H48",
  "Dato: 13-06-2020" : "Data!D49:H49",
  "Dato: 14-06-2020" : "Data!D50:H50",
  "Dato: 15-06-2020" : "Data!D51:H51",
  "Dato: 16-06-2020" : "Data!D52:H52",
  "Dato: 17-06-2020" : "Data!D53:H53",
  "Dato: 18-06-2020" : "Data!D54:H54",
  "Dato: 19-06-2020" : "Data!D55:H55",
  "Dato: 20-06-2020" : "Data!D56:H56",
  "Dato: 21-06-2020" : "Data!D57:H57",
  "Dato: 22-06-2020" : "Data!D58:H58",
  "Dato: 23-06-2020" : "Data!D59:H59",
  "Dato: 24-06-2020" : "Data!D60:H60",
  "Dato: 25-06-2020" : "Data!D61:H61",
  "Dato: 26-06-2020" : "Data!D62:H62",
  "Dato: 27-06-2020" : "Data!D63:H63",
  "Dato: 28-06-2020" : "Data!D64:H64",
  "Dato: 29-06-2020" : "Data!D65:H65",
  "Dato: 30-06-2020" : "Data!D66:H66",
  "Dato: 01-07-2020" : "Data!D67:H67",
  "Dato: 02-07-2020" : "Data!D68:H68",
  "Dato: 03-07-2020" : "Data!D69:H69",
  "Dato: 04-07-2020" : "Data!D70:H70",
  "Dato: 05-07-2020" : "Data!D71:H71",
  "Dato: 06-07-2020" : "Data!D72:H72",
  "Dato: 07-07-2020" : "Data!D73:H73",
  "Dato: 08-07-2020" : "Data!D74:H74",
  "Dato: 09-07-2020" : "Data!D75:H75",
  "Dato: 10-07-2020" : "Data!D76:H76",
  "Dato: 11-07-2020" : "Data!D77:H77",
  "Dato: 12-07-2020" : "Data!D78:H78",
  "Dato: 13-07-2020" : "Data!D79:H79",
  "Dato: 14-07-2020" : "Data!D80:H80",
  "Dato: 15-07-2020" : "Data!D81:H81",
  "Dato: 16-07-2020" : "Data!D82:H82",
  "Dato: 17-07-2020" : "Data!D83:H83",
  "Dato: 18-07-2020" : "Data!D84:H84",
  "Dato: 19-07-2020" : "Data!D85:H85",
  "Dato: 20-07-2020" : "Data!D86:H86",
  "Dato: 21-07-2020" : "Data!D87:H87",
  "Dato: 22-07-2020" : "Data!D88:H88",
  "Dato: 23-07-2020" : "Data!D89:H89",
  "Dato: 24-07-2020" : "Data!D90:H90",
  "Dato: 25-07-2020" : "Data!D91:H91",
  "Dato: 26-07-2020" : "Data!D92:H92",
  "Dato: 27-07-2020" : "Data!D93:H93",
  "Dato: 28-07-2020" : "Data!D94:H94",
  "Dato: 29-07-2020" : "Data!D95:H95",
  "Dato: 30-07-2020" : "Data!D96:H96",
  "Dato: 31-07-2020" : "Data!D97:H97",
  "Dato: 01-08-2020" : "Data!D98:H98",
  "Dato: 02-08-2020" : "Data!D99:H99",
  "Dato: 03-08-2020" : "Data!D100:H100",
  "Dato: 04-08-2020" : "Data!D101:H101",
  "Dato: 05-08-2020" : "Data!D102:H102",
  "Dato: 06-08-2020" : "Data!D103:H103",
  "Dato: 07-08-2020" : "Data!D104:H104",
  "Dato: 08-08-2020" : "Data!D105:H105",
  "Dato: 09-08-2020" : "Data!D106:H106",
  "Dato: 10-08-2020" : "Data!D107:H107",
  "Dato: 11-08-2020" : "Data!D108:H108",
  "Dato: 12-08-2020" : "Data!D109:H109",
  "Dato: 13-08-2020" : "Data!D110:H110",
  "Dato: 14-08-2020" : "Data!D111:H111",
  "Dato: 15-08-2020" : "Data!D112:H112",
  "Dato: 16-08-2020" : "Data!D113:H113",
  "Dato: 17-08-2020" : "Data!D114:H114",
  "Dato: 18-08-2020" : "Data!D115:H115",
  "Dato: 19-08-2020" : "Data!D116:H116",
  "Dato: 20-08-2020" : "Data!D117:H117",
  "Dato: 21-08-2020" : "Data!D118:H118",
  "Dato: 22-08-2020" : "Data!D119:H119",
  "Dato: 23-08-2020" : "Data!D120:H120",
  "Dato: 24-08-2020" : "Data!D121:H121",
  "Dato: 25-08-2020" : "Data!D122:H122",
  "Dato: 26-08-2020" : "Data!D123:H123",
  "Dato: 27-08-2020" : "Data!D124:H124",
  "Dato: 28-08-2020" : "Data!D125:H125",
  "Dato: 29-08-2020" : "Data!D126:H126",
  "Dato: 30-08-2020" : "Data!D127:H127",
  "Dato: 31-08-2020" : "Data!D128:H128",
  "Dato: 01-09-2020" : "Data!D129:H129",
  "Dato: 02-09-2020" : "Data!D130:H130",
  "Dato: 03-09-2020" : "Data!D131:H131",
  "Dato: 04-09-2020" : "Data!D132:H132",
  "Dato: 05-09-2020" : "Data!D133:H133",
  "Dato: 06-09-2020" : "Data!D134:H134",
  "Dato: 07-09-2020" : "Data!D135:H135",
  "Dato: 08-09-2020" : "Data!D136:H136",
  "Dato: 09-09-2020" : "Data!D137:H137",
  "Dato: 10-09-2020" : "Data!D138:H138",
  "Dato: 11-09-2020" : "Data!D139:H139",
  "Dato: 12-09-2020" : "Data!D140:H140",
  "Dato: 13-09-2020" : "Data!D141:H141",
  "Dato: 14-09-2020" : "Data!D142:H142",
  "Dato: 15-09-2020" : "Data!D143:H143",
  "Dato: 16-09-2020" : "Data!D144:H144",
  "Dato: 17-09-2020" : "Data!D145:H145",
  "Dato: 18-09-2020" : "Data!D146:H146",
  "Dato: 19-09-2020" : "Data!D147:H147",
  "Dato: 20-09-2020" : "Data!D148:H148",
  "Dato: 21-09-2020" : "Data!D149:H149",
  "Dato: 22-09-2020" : "Data!D150:H150",
  "Dato: 23-09-2020" : "Data!D151:H151",
  "Dato: 24-09-2020" : "Data!D152:H152",
  "Dato: 25-09-2020" : "Data!D153:H153",
  "Dato: 26-09-2020" : "Data!D154:H154",
  "Dato: 27-09-2020" : "Data!D155:H155",
  "Dato: 28-09-2020" : "Data!D156:H156",
  "Dato: 29-09-2020" : "Data!D157:H157",
  "Dato: 30-09-2020" : "Data!D158:H158",
  "Dato: 01-10-2020" : "Data!D159:H159",
  "Dato: 02-10-2020" : "Data!D160:H160",
  "Dato: 03-10-2020" : "Data!D161:H161",
  "Dato: 04-10-2020" : "Data!D162:H162",
  "Dato: 05-10-2020" : "Data!D163:H163",
  "Dato: 06-10-2020" : "Data!D164:H164",
  "Dato: 07-10-2020" : "Data!D165:H165",
  "Dato: 08-10-2020" : "Data!D166:H166",
  "Dato: 09-10-2020" : "Data!D167:H167",
  "Dato: 10-10-2020" : "Data!D168:H168",
  "Dato: 11-10-2020" : "Data!D169:H169",
  "Dato: 12-10-2020" : "Data!D170:H170",
  "Dato: 13-10-2020" : "Data!D171:H171",
  "Dato: 14-10-2020" : "Data!D172:H172",
  "Dato: 15-10-2020" : "Data!D173:H173",
  "Dato: 16-10-2020" : "Data!D174:H174",
  "Dato: 17-10-2020" : "Data!D175:H175",
  "Dato: 18-10-2020" : "Data!D176:H176",
  "Dato: 19-10-2020" : "Data!D177:H177",
  "Dato: 20-10-2020" : "Data!D178:H178",
  "Dato: 21-10-2020" : "Data!D179:H179",
  "Dato: 22-10-2020" : "Data!D180:H180",
  "Dato: 23-10-2020" : "Data!D181:H181",
  "Dato: 24-10-2020" : "Data!D182:H182",
  "Dato: 25-10-2020" : "Data!D183:H183",
  "Dato: 26-10-2020" : "Data!D184:H184",
  "Dato: 27-10-2020" : "Data!D185:H185",
  "Dato: 28-10-2020" : "Data!D186:H186",
  "Dato: 29-10-2020" : "Data!D187:H187",
  "Dato: 30-10-2020" : "Data!D188:H188",
  "Dato: 31-10-2020" : "Data!D189:H189",
  "Dato: 01-11-2020" : "Data!D190:H190",
  "Dato: 02-11-2020" : "Data!D191:H191",
  "Dato: 03-11-2020" : "Data!D192:H192",
  "Dato: 04-11-2020" : "Data!D193:H193",
  "Dato: 05-11-2020" : "Data!D194:H194",
  "Dato: 06-11-2020" : "Data!D195:H195",
  "Dato: 07-11-2020" : "Data!D196:H196",
  "Dato: 08-11-2020" : "Data!D197:H197",
  "Dato: 09-11-2020" : "Data!D198:H198",
  "Dato: 10-11-2020" : "Data!D199:H199",
  "Dato: 11-11-2020" : "Data!D200:H200",
  "Dato: 12-11-2020" : "Data!D201:H201",
  "Dato: 13-11-2020" : "Data!D202:H202",
  "Dato: 14-11-2020" : "Data!D203:H203",
  "Dato: 15-11-2020" : "Data!D204:H204",
  "Dato: 16-11-2020" : "Data!D205:H205",
  "Dato: 17-11-2020" : "Data!D206:H206",
  "Dato: 18-11-2020" : "Data!D207:H207",
  "Dato: 19-11-2020" : "Data!D208:H208",
  "Dato: 20-11-2020" : "Data!D209:H209",
  "Dato: 21-11-2020" : "Data!D210:H210",
  "Dato: 22-11-2020" : "Data!D211:H211",
  "Dato: 23-11-2020" : "Data!D212:H212",
  "Dato: 24-11-2020" : "Data!D213:H213",
  "Dato: 25-11-2020" : "Data!D214:H214",
  "Dato: 26-11-2020" : "Data!D215:H215",
  "Dato: 27-11-2020" : "Data!D216:H216",
  "Dato: 28-11-2020" : "Data!D217:H217",
  "Dato: 29-11-2020" : "Data!D218:H218",
  "Dato: 30-11-2020" : "Data!D219:H219",
  "Dato: 01-12-2020" : "Data!D220:H220",
  "Dato: 02-12-2020" : "Data!D221:H221",
  "Dato: 03-12-2020" : "Data!D222:H222",
  "Dato: 04-12-2020" : "Data!D223:H223",
  "Dato: 05-12-2020" : "Data!D224:H224",
  "Dato: 06-12-2020" : "Data!D225:H225",
  "Dato: 07-12-2020" : "Data!D226:H226",
  "Dato: 08-12-2020" : "Data!D227:H227",
  "Dato: 09-12-2020" : "Data!D228:H228",
  "Dato: 10-12-2020" : "Data!D229:H229",
  "Dato: 11-12-2020" : "Data!D230:H230",
  "Dato: 12-12-2020" : "Data!D231:H231",
  "Dato: 13-12-2020" : "Data!D232:H232",
  "Dato: 14-12-2020" : "Data!D233:H233",
  "Dato: 15-12-2020" : "Data!D234:H234",
  "Dato: 16-12-2020" : "Data!D235:H235",
  "Dato: 17-12-2020" : "Data!D236:H236",
  "Dato: 18-12-2020" : "Data!D237:H237",
  "Dato: 19-12-2020" : "Data!D238:H238",
  "Dato: 20-12-2020" : "Data!D239:H239",
  "Dato: 21-12-2020" : "Data!D240:H240",
  "Dato: 22-12-2020" : "Data!D241:H241",
  "Dato: 23-12-2020" : "Data!D242:H242",
  "Dato: 24-12-2020" : "Data!D243:H243",
  "Dato: 25-12-2020" : "Data!D244:H244",
  "Dato: 26-12-2020" : "Data!D245:H245",
  "Dato: 27-12-2020" : "Data!D246:H246",
  "Dato: 28-12-2020" : "Data!D247:H247",
  "Dato: 29-12-2020" : "Data!D248:H248",
  "Dato: 30-12-2020" : "Data!D249:H249",
  "Dato: 31-12-2020" : "Data!D250:H250",
  "Dato: 01-01-2021" : "Data!D251:H251",
  "Dato: 02-01-2021" : "Data!D252:H252",
  "Dato: 03-01-2021" : "Data!D253:H253",
  "Dato: 04-01-2021" : "Data!D254:H254",
  "Dato: 05-01-2021" : "Data!D255:H255",
  "Dato: 06-01-2021" : "Data!D256:H256",
  "Dato: 07-01-2021" : "Data!D257:H257",
  "Dato: 08-01-2021" : "Data!D258:H258",
  "Dato: 09-01-2021" : "Data!D259:H259",
  "Dato: 10-01-2021" : "Data!D260:H260",
  "Dato: 11-01-2021" : "Data!D261:H261",
  "Dato: 12-01-2021" : "Data!D262:H262",
  "Dato: 13-01-2021" : "Data!D263:H263",
  "Dato: 14-01-2021" : "Data!D264:H264",
  "Dato: 15-01-2021" : "Data!D265:H265",
  "Dato: 16-01-2021" : "Data!D266:H266",
  "Dato: 17-01-2021" : "Data!D267:H267",
  "Dato: 18-01-2021" : "Data!D268:H268",
  "Dato: 19-01-2021" : "Data!D269:H269",
  "Dato: 20-01-2021" : "Data!D270:H270",
  "Dato: 21-01-2021" : "Data!D271:H271",
  "Dato: 22-01-2021" : "Data!D272:H272",
  "Dato: 23-01-2021" : "Data!D273:H273",
  "Dato: 24-01-2021" : "Data!D274:H274",
  "Dato: 25-01-2021" : "Data!D275:H275",
  "Dato: 26-01-2021" : "Data!D276:H276",
  "Dato: 27-01-2021" : "Data!D277:H277",
  "Dato: 28-01-2021" : "Data!D278:H278",
  "Dato: 29-01-2021" : "Data!D279:H279",
  "Dato: 30-01-2021" : "Data!D280:H280",
  "Dato: 31-01-2021" : "Data!D281:H281",
  "Dato: 01-02-2021" : "Data!D282:H282",
  "Dato: 02-02-2021" : "Data!D283:H283",
  "Dato: 03-02-2021" : "Data!D284:H284",
  "Dato: 04-02-2021" : "Data!D285:H285",
  "Dato: 05-02-2021" : "Data!D286:H286",
  "Dato: 06-02-2021" : "Data!D287:H287",
  "Dato: 07-02-2021" : "Data!D288:H288",
  "Dato: 08-02-2021" : "Data!D289:H289",
  "Dato: 09-02-2021" : "Data!D290:H290",
  "Dato: 10-02-2021" : "Data!D291:H291",
  "Dato: 11-02-2021" : "Data!D292:H292",
  "Dato: 12-02-2021" : "Data!D293:H293",
  "Dato: 13-02-2021" : "Data!D294:H294",
  "Dato: 14-02-2021" : "Data!D295:H295",
  "Dato: 15-02-2021" : "Data!D296:H296",
  "Dato: 16-02-2021" : "Data!D297:H297",
  "Dato: 17-02-2021" : "Data!D298:H298",
  "Dato: 18-02-2021" : "Data!D299:H299",
  "Dato: 19-02-2021" : "Data!D300:H300",
  "Dato: 20-02-2021" : "Data!D301:H301",
  "Dato: 21-02-2021" : "Data!D302:H302",
  "Dato: 22-02-2021" : "Data!D303:H303",
  "Dato: 23-02-2021" : "Data!D304:H304",
  "Dato: 24-02-2021" : "Data!D305:H305",
  "Dato: 25-02-2021" : "Data!D306:H306",
  "Dato: 26-02-2021" : "Data!D307:H307",
  "Dato: 27-02-2021" : "Data!D308:H308",
  "Dato: 28-02-2021" : "Data!D309:H309",
  "Dato: 01-03-2021" : "Data!D310:H310",
  "Dato: 02-03-2021" : "Data!D311:H311",
  "Dato: 03-03-2021" : "Data!D312:H312",
  "Dato: 04-03-2021" : "Data!D313:H313",
  "Dato: 05-03-2021" : "Data!D314:H314",
  "Dato: 06-03-2021" : "Data!D315:H315",
  "Dato: 07-03-2021" : "Data!D316:H316",
  "Dato: 08-03-2021" : "Data!D317:H317",
  "Dato: 09-03-2021" : "Data!D318:H318",
  "Dato: 10-03-2021" : "Data!D319:H319",
  "Dato: 11-03-2021" : "Data!D320:H320",
  "Dato: 12-03-2021" : "Data!D321:H321",
  "Dato: 13-03-2021" : "Data!D322:H322",
  "Dato: 14-03-2021" : "Data!D323:H323",
  "Dato: 15-03-2021" : "Data!D324:H324",
  "Dato: 16-03-2021" : "Data!D325:H325",
  "Dato: 17-03-2021" : "Data!D326:H326",
  "Dato: 18-03-2021" : "Data!D327:H327",
  "Dato: 19-03-2021" : "Data!D328:H328",
  "Dato: 20-03-2021" : "Data!D329:H329",
  "Dato: 21-03-2021" : "Data!D330:H330",
  "Dato: 22-03-2021" : "Data!D331:H331",
  "Dato: 23-03-2021" : "Data!D332:H332",
  "Dato: 24-03-2021" : "Data!D333:H333",
  "Dato: 25-03-2021" : "Data!D334:H334",
  "Dato: 26-03-2021" : "Data!D335:H335",
  "Dato: 27-03-2021" : "Data!D336:H336",
  "Dato: 28-03-2021" : "Data!D337:H337",
  "Dato: 29-03-2021" : "Data!D338:H338",
  "Dato: 30-03-2021" : "Data!D339:H339",
  "Dato: 31-03-2021" : "Data!D340:H340",
  "Dato: 01-04-2021" : "Data!D341:H341",
  "Dato: 02-04-2021" : "Data!D342:H342",
  "Dato: 03-04-2021" : "Data!D343:H343",
  "Dato: 04-04-2021" : "Data!D344:H344",
  "Dato: 05-04-2021" : "Data!D345:H345",
  "Dato: 06-04-2021" : "Data!D346:H346",
  "Dato: 07-04-2021" : "Data!D347:H347",
  "Dato: 08-04-2021" : "Data!D348:H348",
  "Dato: 09-04-2021" : "Data!D349:H349",
  "Dato: 10-04-2021" : "Data!D350:H350",
  "Dato: 11-04-2021" : "Data!D351:H351",
  "Dato: 12-04-2021" : "Data!D352:H352",
  "Dato: 13-04-2021" : "Data!D353:H353",
  "Dato: 14-04-2021" : "Data!D354:H354",
  "Dato: 15-04-2021" : "Data!D355:H355",
  "Dato: 16-04-2021" : "Data!D356:H356",
  "Dato: 17-04-2021" : "Data!D357:H357",
  "Dato: 18-04-2021" : "Data!D358:H358",
  "Dato: 19-04-2021" : "Data!D359:H359",
  "Dato: 20-04-2021" : "Data!D360:H360",
  "Dato: 21-04-2021" : "Data!D361:H361",
  "Dato: 22-04-2021" : "Data!D362:H362",
  "Dato: 23-04-2021" : "Data!D363:H363",
  "Dato: 24-04-2021" : "Data!D364:H364",
  "Dato: 25-04-2021" : "Data!D365:H365",
  "Dato: 26-04-2021" : "Data!D366:H366",
  "Dato: 27-04-2021" : "Data!D367:H367",
  "Dato: 28-04-2021" : "Data!D368:H368",
  "Dato: 29-04-2021" : "Data!D369:H369",
  "Dato: 30-04-2021" : "Data!D370:H370",
  "Dato: 01-05-2021" : "Data!D371:H371",
  "Dato: 02-05-2021" : "Data!D372:H372",
  "Dato: 03-05-2021" : "Data!D373:H373",
  "Dato: 04-05-2021" : "Data!D374:H374",
  "Dato: 05-05-2021" : "Data!D375:H375",
  "Dato: 06-05-2021" : "Data!D376:H376",
  "Dato: 07-05-2021" : "Data!D377:H377",
  "Dato: 08-05-2021" : "Data!D378:H378",
  "Dato: 09-05-2021" : "Data!D379:H379",
  "Dato: 10-05-2021" : "Data!D380:H380",
  "Dato: 11-05-2021" : "Data!D381:H381",
  "Dato: 12-05-2021" : "Data!D382:H382",
  "Dato: 13-05-2021" : "Data!D383:H383",
  "Dato: 14-05-2021" : "Data!D384:H384",
  "Dato: 15-05-2021" : "Data!D385:H385",
  "Dato: 16-05-2021" : "Data!D386:H386",
  "Dato: 17-05-2021" : "Data!D387:H387",
  "Dato: 18-05-2021" : "Data!D388:H388",
  "Dato: 19-05-2021" : "Data!D389:H389",
  "Dato: 20-05-2021" : "Data!D390:H390",
  "Dato: 21-05-2021" : "Data!D391:H391",
  "Dato: 22-05-2021" : "Data!D392:H392",
  "Dato: 23-05-2021" : "Data!D393:H393",
  "Dato: 24-05-2021" : "Data!D394:H394",
  "Dato: 25-05-2021" : "Data!D395:H395",
  "Dato: 26-05-2021" : "Data!D396:H396",
  "Dato: 27-05-2021" : "Data!D397:H397",
  "Dato: 28-05-2021" : "Data!D398:H398",
  "Dato: 29-05-2021" : "Data!D399:H399",
  "Dato: 30-05-2021" : "Data!D400:H400",
  "Dato: 31-05-2021" : "Data!D401:H401"
}
