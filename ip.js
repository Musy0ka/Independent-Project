function getDayOfWeek() {
    /**
     * birthday: String in DD-MM-YYYY format
     */
    // Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
    const birthdayArray = document.getElementById("birthday").value.split("-");
    const dayOfMonth = birthdayArray[2];
    const month = birthdayArray[1];
    const year = birthdayArray[0];

    let dd = parseInt(dayOfMonth);
    if (dd <= 0 && dd > 31) {
        return "Invalid day";
    }

    let mm = parseInt(month);
    if (mm <= 0 && mm > 12) {
        return "Invalid month"
    }

    const century = year[0].concat(year[1])
    const birthYear = year[2].concat(year[3]);

    let cc = parseInt(century);
    let yy = parseInt(birthYear);

    const dayOfWeek = (((cc/4) - 2*cc-1) + ((5*yy/4)) + ((26*(mm+1)/10)) + dd) % 7; 

    return dayOfWeek.toFixed();
}

function getAkanName() {
    let dayOfWeek = getDayOfWeek();
    var gender;
    if (document.getElementById("male").checked) {
        gender = document.getElementById("male").value;
    } else if (document.getElementById("female").checked) {
        gender = document.getElementById("female").value;
    }
    const maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    if (gender == "male"){
        document.getElementById("akan-name-text").value = `Your Akan name is ${maleAkanNames[dayOfWeek]}`;
    } else if (gender == "female") {
        document.getElementById("akan-name-text").value = `Your Akan name is ${femaleAkanNames[dayOfWeek]}`;
    }
}
