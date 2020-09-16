// captures the current date and displays in jumbotron
let dayOf= moment().format('LL'); 
$("#currentDay").text("Today's date is " + dayOf); 

let currentTime = moment().format('LT');
currentTime.split(":")
 
//capturing necessary page elements to begin setting up timeblocks, inouts, and save button
let timeblocksDis= $(".container");
let todoList =[];
let Hours= ["7:00 AM","8:00 AM","9:00 AM","10:00 AM","11:00 AM","12:00 PM ","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM"];
//function compares times **NEEDS to be fixed, time comparisons are off 
function checkTimes(){
    if(currentTime[0] === Hours[i][0]){
        inputDis.addClass("present");
    }
    if(currentTime[0] > Hours[i][0]){ 
        inputDis.addClass("past");
    }
    if(currentTime[0] < Hours[i][0]){
        inputDis.addClass("future");
    }
}

for (var i=0; i< Hours.length; i++){
    hourOf= $("<div>");
    hourOf.addClass("row time-block");
    timeDis=$("<div>");
    timeDis.addClass("hour col-md-1");
    inputDis=$("<input>");
    inputDis.addClass("col-md-10" );
    inputDis.attr("data-index", i);
    timeblocksDis.append(hourOf);
    hourOf.append((timeDis).text(Hours[i]));
    hourOf.append(inputDis);
    save=$("<button>SAVE</button>");
    save.attr("data-index", i);
    save.addClass("saveBtn col-md-1");
    hourOf.append(save);
    todoList.push[inputDis.value];
    checkTimes(i);
    
   
};

//will need function that takes in current time and alters schedule appearance   based on the hour; current will be red/orange, past will be gray, future will be green      function that takes input values and saves to local storage
function renderBlockText(){
     for (var i = 0; i < todoList.length; i++) {
        //something
       };
};



function captureInput(){
    //event.preventDefault();
    // let whichHour= $(this).attr("data-index");
    
    let inputVal= $(this).previousElementSibling;
    
    console.log (inputVal)
    let toDo=JSON.stringify(inputVal)
    // console.log(toDo)
    // localStorage.setItem("input", toDo);
    todoList.push(toDo);
    return todoList;
}
//function that renders any previous input by pulling from local storage
function renderInput(){
    let prevToDo= JSON.parse(localStorage.getItem(toDo))
   // recall timeblock rendering, maybe parse into sep. functions to improive flexibility of program update
}  
// calls captureInput upon pressing save button **Need to capture button 
$(".saveBtn").on("click", captureInput);
document.addEventListener("onload", renderInput)