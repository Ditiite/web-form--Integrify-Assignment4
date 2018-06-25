
function validate(myForm) {
    let isValid = true;

    //CHECKS NAME
    if (!validateName()) {
        isValid = false;
    }
    
    // CHECKS EMAIL
    if (!validateEmail()) {
        isValid = false;
    }

    // CHECK NUMBER
    const regNum = /[\d]{9}/;
    const number = document.myForm.phone;
    const numErr = document.getElementById('phoneError');

    if(!regNum.test(number.value)) {
        numErr.innerHTML = "Please provide correct phone number!";
        number.focus();
    } else {
        numErr.innerHTML = "";
    }

 
    // CHECK ADDRESS
    const regAddress = /[a-zA-Z][\w'\s,-]+/;
    const address = document.myForm.address;
    const addressErr = document.getElementById('addressError');

    if(!regAddress.test(address.value)) {
        addressErr.innerHTML = "Please check your address!";
        address.focus();
    } else {
        addressErr.innerHTML = "";
    }

    // CHECK CITY
    const regCity = /[a-zA-Z][\w\s'-]+/;
    const city = document.myForm.city;
    const cityErr = document.getElementById('cityError');

    if(!regCity.test(city.value)) {
        cityErr.innerHTML = "Please select correct city!";
        city.focus();
    } else {
        cityErr.innerHTML = "";
    }


    // COUNTRY
    const regCountry = /[a-zA-Z][\w\s'-]+/;
    const country = document.myForm.country;
    const countryErr = document.getElementById('countryError');

    if (!regCountry.test(country.value)) {
        countryErr.innerHTML = "Please provide your country!";
        country.focus();
    } else {
        countryErr.innerHTML = ""; 
    }


    // CHECKS ZIP CODE
    const zipReg = /[\w-\/]{3,9}/;
    const zip = document.myForm.zip;
    const zipErr = document.getElementById('zipError');

    if (!zipReg.test(zip.value)) {
        zipErr.innerHTML = "Please check your zip code.";
        zip.focus();
    } else {
        zipErr.innerHTML = "";
    }

    
    // CHECK LINK
    const regLink = /(^(http[s]?:\/\/)?|([w]{3}\.))?([\/\w.=?:;"!&-]+)/;
    const link = document.myForm.link;
    const linkErr = document.getElementById('linkError');

    if(!regLink.test(link.value)) {
        linkErr.innerHTML = "Please provide portfolio link!";
        link.focus();
    } else {
        linkErr.innerHTML = "";
    }
    
    if (!validateBox()) {
        isValid = false;
    }
    
    return isValid;
}

function validateEmail() {
    let isValid = true;

    //const regEmail = new RegExp("^(\.?\w+)+@[A-Za-z0-9]+\.[A-Za-z]+$");
    const eMail1 = document.querySelector('input[name="email"]').value;
    const eMail2 = document.querySelector('input[name="email-again"]').value;
    const eMailErr =  document.getElementById('emailError');
    const eMailErr2 =  document.getElementById('emailError2');
    const email = document.myForm.email;

    if (eMail1 !== eMail2) {
        eMailErr2.innerHTML = "E-mails should match!";
        document.myForm.email.focus();
        isValid = false;
    } else {
        eMailErr2.innerHTML = "";
    }

    const regEmail = /[\.?\w]+@[A-Za-z0-9]+\.[A-Za-z]+/;
    if (!regEmail.test(email.value)) {
        eMailErr.innerHTML = "Please check your email pattern";
        email.focus();
        isValid = false;
    } else {
        eMailErr.innerHTML = "";
    }

    return isValid;
}

function validateName() {
    let isValid = true;

    const regName = /^[a-zA-Z][a-zA-z\s'-]+/;
    const name = document.myForm.name;
    const nameErr = document.getElementById('nameError');

    if (!regName.test(name.value)) {
        nameErr.innerHTML = "Please check your name";
        name.focus();
        isValid = false;
    } else {
        nameErr.innerHTML = "";
    }

    return isValid;
}


function validateBox() {
    // Check radio buttons
    const targetEL = document.getElementsByName('design');
    let count = 0;
    let countCheck = 0;

    for (let i = 0; i < targetEL.length; i++) {
        if (targetEL[i].checked) {
            count++;
            break;
        }
    }

    // Check checkbox
    const checkboxEl = document.getElementsByName('check');

    for (let i = 0; i < checkboxEl.length; i++) {
        if (checkboxEl[i].checked) {
            countCheck++;
            console.log(countCheck);
            break;
        }
    }

    //If counters are more than one return true
    if (count === 1 && countCheck >= 1) {
        return true;
        console.log(1);
    }

    // Check which box has not been selected and alert accordingly to it.
    if (!count && !countCheck) {
        alert('You must select your primary design discipline and  where are you interested working?');
        console.log(2);
        return false;
    }

    if (!count) {
        alert('You must select your primary design discipline');
        console.log(3);
        return false;
    }

    if (!countCheck) {
        alert('You must select where are you interested working? ');
        console.log(4);
        return false;
    }
};




