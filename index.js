// Check if both e-mails are the same


function checkEmail() {
    const eMail1 = document.querySelector('input[name="email"]').value;
    const eMail2 = document.querySelector('input[name="email-again"]').value;
    if(eMail1 != eMail2) {
        alert('Emails  emails don\'t match!');
        return false;
    } 
}


// Check the radio buttons and checkboxes.
function validate(form) {
    // Check radio buttons
    const targetEL = document.getElementsByName('design');
    let count = 0;
    let countCheck = 0;  

    for(let i = 0; i < targetEL.length; i++) {
        if(targetEL[i].checked) {
            count++;
            break;
        }  
    }

    // Check checkbox
    const checkboxEl = document.getElementsByName('check');
    
    for(let i = 0; i < checkboxEl.length; i++) {
        if(checkboxEl[i].checked) {
            countCheck++;
            console.log(countCheck);
            break;
        }  
    }

    //If counters are more than one return true
    if(count === 1 && countCheck >= 1) {
        return true;

    // Check which box has not been selected and alert accordingly to it.
    }else if(!count && !countCheck) {
        alert('You must select your primary design discipline and  where are you interested working?');
        return false;

    }else if(!count) {
        alert('You must select your primary design discipline');
        focus();
        return false;

    }else if(!countCheck) {
        alert('You must select where are you interested working? ');
        focus();
        return false;
    }
}


// Checks if url is coreft form
function validateURL(url) {
    const regexpUrl = /^(http[s]?:\/\/)?w{3}\.\w+\.[a-zA-Z]{2,5}(\.[a-zA-z]{0,2})?/;
    return regexpUrl.test(url);
}

