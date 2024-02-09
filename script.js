var div_box = document.createElement("div");
div_box.className="divClass";

var date = document.createElement("input");
date.className="dateInput";
date.type="date";
date.id="dob";

var buttonInp = document.createElement("button");
buttonInp.className="btn btn-primary";
buttonInp.innerHTML="Click Me";
buttonInp.addEventListener("click",dateManipulation);

var textDisplay = document.createElement("p");
textDisplay.className = "outputText";
textDisplay.id="outputText";

div_box.append(date,buttonInp);
div_box.append(textDisplay);
document.body.append(div_box);

function dateManipulation() {
    var getDateFromUser = document.getElementById("dob").value;
    // console.log(getDateFromUser);
    var userDateMilliSec = Date.parse(getDateFromUser);
    // console.log(userDateMilliSec);

    var inputDate = new Date(userDateMilliSec);
    // console.log(inputDate);

    var currentDate = new Date();
    // console.log(currentDate);
    var getMillisecsforCurrentDate = Date.parse(currentDate);
    console.log(getMillisecsforCurrentDate);
    
    var getMillisecs = getMillisecsforCurrentDate - userDateMilliSec;
    var seconds = Math.floor(getMillisecs/1000);
    var mints = Math.floor(seconds/60);
    var hrs = Math.floor(mints/60);
    var days =Math.floor(hrs/24);
    var months=Math.floor(days/30);
    var years =Math.floor(days/365);
    console.log(years);
    console.log(months);
    console.log(days);
    console.log(hrs);
    console.log(mints);
    console.log(seconds);
    console.log(getMillisecs);
   
    document.getElementById("outputText").innerHTML = `
    Given Input Date Is - ${currentDate} <br>
    Years - ${years} <br>
    Months - ${months} <br>
    Days - ${days} <br>
    Hours - ${hrs} <br>
    Min - ${mints} <br>
    Seconds - ${seconds} <br>
    Milliseconds - ${getMillisecs} <br>  
    `; 

}
