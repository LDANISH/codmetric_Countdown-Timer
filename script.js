const day = document.getElementById("day");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

const progress = document.getElementById("bar");
const message = document.getElementById("message");

let timer;

document.getElementById("start").onclick = function(){

clearInterval(timer);

const selectedDate =
new Date(document.getElementById("targetDate").value).getTime();

if(isNaN(selectedDate)){

alert("Please select a future date.");

return;

}

const total = selectedDate - Date.now();

timer = setInterval(function(){

const now = Date.now();

const distance = selectedDate - now;

if(distance<=0){

clearInterval(timer);

day.innerHTML="00";
hour.innerHTML="00";
minute.innerHTML="00";
second.innerHTML="00";

progress.style.width="100%";

message.innerHTML="🎉 Countdown Finished!";

return;

}

const d=Math.floor(distance/(1000*60*60*24));

const h=Math.floor(distance%(1000*60*60*24)/(1000*60*60));

const m=Math.floor(distance%(1000*60*60)/(1000*60));

const s=Math.floor(distance%(1000*60)/1000);

day.innerHTML=d;
hour.innerHTML=h;
minute.innerHTML=m;
second.innerHTML=s;

const percentage=((total-distance)/total)*100;

progress.style.width=percentage+"%";

},1000);

}

document.getElementById("reset").onclick=function(){

clearInterval(timer);

document.getElementById("targetDate").value="";

day.innerHTML="00";
hour.innerHTML="00";
minute.innerHTML="00";
second.innerHTML="00";

progress.style.width="0%";

message.innerHTML="";

}