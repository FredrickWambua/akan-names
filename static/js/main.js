

//Variables
var daysOfWeek = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
var maleNames = [
    "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
    ];
var femaleNames = [
    "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
    ];

var button = document.getElementById("submit").addEventListener("click", buttonResult);
function buttonResult(e){
    e.preventDefault()
    let theDay = parseInt(document.getElementById("inputDate").value);
    let theMonth = parseInt(document.getElementById("inputMonth").value);
    let theYear = document.getElementById("inputYear").value;
    let results = document.querySelector(".result")
    
    let calculation = calculateDayIndex(theDay, theMonth, theYear)
    if (document.getElementById("male-input").checked){
        results.innerHTML = "Your Akan name is " + maleNames[calculation] + ", born on a " + daysOfWeek[calculation] +"."
    }
    else if (document.getElementById("female-input").checked){
         results.innerHTML = "Your Akan name is " + femaleNames[calculation]+ ", born on a " + daysOfWeek[calculation]+ "."
    }
}


// variables


// getting akan name
function calculateDayIndex(day, month, year){
    let dd = day;
    let mm = month;

 
    var temp2 = year.slice(2,4)
    let yy = parseInt(temp2)
    let cc = parseInt(year.slice(0,2))
 

    //date and month validation
    function dateValidity( dd, mm){
        if( dd < 1 || dd > 31){
            alert("invalid date")
        }
        if( mm < 1 || mm > 12){
            alert("invalid month")
        }
    }
    dateValidity(dd, mm);
    let dayIndex =  Math.floor(( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7);
    return dayIndex;
}











