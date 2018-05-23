function validate(myForm) {

    //CHECKS NAME
    const regName = new RegExp("^[a-zA-Z][a-zA-z\s'-]+");
    const name = document.getElementsByName('name');

    if (!regName.test(document.myForm.name.value)) {
        document.getElementById('nameError').innerHTML = "Please check your name";
        document.myForm.name.focus();
        return false;
    } else {
        document.getElementById('nameError').innerHTML = "";
    }

    // CHECKS EMAIL
    //const regEmail = new RegExp("^(\.?\w+)+@[A-Za-z0-9]+\.[A-Za-z]+$");
    const eMail1 = document.querySelector('input[name="email"]').value;
    const eMail2 = document.querySelector('input[name="email-again"]').value;

    if (eMail1 != eMail2) {
        document.getElementById('emailError').innerHTML = "E-mails should match!";
        document.myForm.email.focus();
    }

    const regEmail = /[\.?\w]+@[A-Za-z0-9]+\.[A-Za-z]+/;
    if (!regEmail.test(document.myForm.email.value)) {
        document.getElementById('emailError').innerHTML = "Please check your email pattern";
        document.myForm.email.focus();
    } else {
        document.getElementById('emailError').innerHTML = "";
    }


    // CHECKS ZIP CODE
    const zip = document.getElementsByName('zip');
    const zipReg = /[\w-\/]{3,9}/;

    if (!zipReg.test(document.myForm.zip.value)) {
        document.getElementById('zipError').innerHTML = "Please check your zip code.";
        document.myForm.zip.focus();
    } else {
        zipError.innerHTML = "";
    }

    // COUNTRY
    if (document.myForm.country.value == "") {
        alert("Please provide your country!");
    }

    validateBox();

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




// function validate(myForm) {
//     checkEmail();
//     validateButtons();
//     phone();
// }

// function phone() {
//     const phone = document.querySelector('input[name="phone"]').value;
//     const regex = /[\d]{6}/;

//     if (regex.test(phone)) {
//         console.log('Wrong patern');
//         phone.classList.add('error');
//         alert('wrong');
//     }
// }


// // Check email
// function checkEmail() {
//     const eMail1 = document.querySelector('input[name="email"]').value;
//     const eMail2 = document.querySelector('input[name="email-again"]').value;
//     if(eMail1 != eMail2) {
//         alert('Emails  emails don\'t match!');
//         return false;
//     } 
// };

// // Radio buttons and checkbox
// function validateButtons() {
//     //form.preventDafault();

//     // Check radio buttons
//     const targetEL = document.getElementsByName('design');
//     let count = 0;
//     let countCheck = 0;  

//     for(let i = 0; i < targetEL.length; i++) {
//         if(targetEL[i].checked) {
//             count++;
//             break;
//         }  
//     }
//     // Check checkbox
//     const checkboxEl = document.getElementsByName('check');

//    


