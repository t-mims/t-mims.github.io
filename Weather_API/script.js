//call weather api (ajax,method=get).then(append to current)
//& a for loop that appends info (city, date, weather type in pic form, temp, wind speed, humidity, UV) to #current
//if statement for UV (if too high, highlght red, okay->green, kinda bad->yellow)
//another for loop that iterates over 5-day length
//appends each day info to a table(?) 
//store each valid search into local and save to #history, added into an array
//#history.on("click", function that will get local & display current/future )
// for history array (var last-search===array[last/end], will automatically render if array.length>1)
var queryURL="https://openweathermap.org/api"//*** 
var weatherConditions=[]//aray that holds images that represent conditions?

$.ajax({
    url: queryURL,
    method:"GET",
}).then(function(response){
    let current= $("#current");
    for (var i=0; i<response.SOMETHING.length; i++){
        var name=response.CITYNAME;
        var dayOf=response.DAYOF;
        var temp= response.TEMP//(math.floor(* something if not in farenheit))or round if needed
        var windy=response.WINDSPEED;
        var uvIndex=response.UV;
        var humid= response.HUMIDITY;

        if (uvIndex>6){
            //add text 'severe' make it red, uv.attr(style, red?)
        }
        else if (uvIndex<3){
            //add text 'favorable' make it green
        }
        else {
            //add text 'moderate' make it yellow
        }
        //some card element.append name
        //some card element.append dayOf
        //some card element.append temp
        //some card element.append windy
        //some card element.append uvIndex
        //some card element.append humidity 

        
        current.append(cardContent);
    }

})
let future= $("#future");
    for (var i=0; i<5; i++){
        //for loop to append future forcast
        future.append("conditions")
    }