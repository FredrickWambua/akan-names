//preventing default
document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault()
    });

// getting akan name
function calculateDayIndex(day, month, year){
    let dd = document.getElementById("inputDate").value;
    let mm = document.getElementById("inputMonth").value;
    let YY = document.getElementById("inputYear").value;
    let temp = YY.split("")
    let temp2 = temp.slice()
    let yy = parseInt("".join(((temp.split("")).slice(0,2))))
    let cc = parseInt("".join(((temp2.split("")).slice(2,2))))
    let dayIndex =  ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7
}
//data validation


//function to get gender

// day and name function
function getDayAndName(){
    let daysOfWeek = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        ];
    let maleNames = [
        "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
        ];
    let femaleNames = [
        "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
        ];
    let index = calculateDayIndex(dd, mm, YY)
    let gender = document.getElementsByName("gender").value;
}