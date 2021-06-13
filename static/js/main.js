// getting akan name
function getAkanName(){
    let dd = document.getElementById("inputDate").value;
    let mm = document.getElementById("inputMonth").value;
    let yy = document.getElementById("inputYear").value;
    let genders = document.getElementsByName("gender");
}

//function to get gender
function getGender(){
    for(let gender of gender){
        if(gender.checked){
            return gender.value;
        }
        
    }
}
let myGenderValue = getGender();
console.log(myGenderValue);

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
}