//captures the current date and displays in jumbotron
let dayOf= moment().format('LL'); 
console.log( dayOf)
$("#currentDay").text("Today's date is " + dayOf); 
//capturing necessary page elements to begin setting up timeblocks
let timeblocksDis= $(".container");
let Hours= ["7:00 AM","8:00 AM","9:00 AM","10:00 AM","11:00 AM","12:00 PM ","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM","7:00 PM"];
for (var i=0; i< Hours.length; i++){
    hourOf= $("<div class=row hour>");
    timeblocksDis.append(hourOf.text(Hours[i]));
}

