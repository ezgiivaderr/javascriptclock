
let myName=prompt("adınızı giriniz")

document.querySelector('#myName').innerHTML=myName


function showTime(){
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  var day=d.getDay();
  var dayName=["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  document.querySelector('#myClock').innerHTML =h + ":" + m + ":" + s + " "+ dayName[day];
}

setInterval(showTime,1000);