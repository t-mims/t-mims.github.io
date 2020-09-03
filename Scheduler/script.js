//captures the current date and displays in jumbotron
let dayOf= moment().format('LL'); 
console.log( dayOf)
$("#currentDay").text("Today's date is " + dayOf); 
//capturing necessary page elements to begin setting up timeblocks
let timeblocksDis= $(".container");
let Hours= ["7:00 AM","8:00 AM","9:00 AM","10:00 AM","11:00 AM","12:00 PM ","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM","7:00 PM"];
for (var i=0; i< Hours.length; i++){
    hourOf= $("<div class=row time-block>");
    timeDis=$("<div class=col-md-1 hour>");
    inputDis=$("<input class= col-md-10 past>")
    timeblocksDis.append(hourOf);
    hourOf.append((timeDis).text(Hours[i]));
    hourOf.append(inputDis);
    hourOf.append($("<button class=col-md-1 saveBtn>"))
}
//will need function that takes in current time and alters schedule appearance
//based on the hour; current will be red/orange, past will be gray, future will be green
// 
//function that takes input values and saves to local storage
function captureInput(){
    localStorage.setItem()
}
//function that renders any previous input by pulling from local storage
function renderInput(){
    localStorage.getItem()
}
//calls captureInput upon pressing save button **Need to capture button 
saveBtn.addEventListener("click",captureInput);