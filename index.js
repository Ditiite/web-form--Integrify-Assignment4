// Check if both e-mails are the same


function checkEmail() {
    const eMail1 = document.querySelector('input[name="email"]').value;
    const eMail2 = document.querySelector('input[name="email-again"]').value;
    if(eMail1 != eMail2) {
        alert('Emails  emails don\'t match!');
        
        return false;
    } 
};

// Check the radio buttons and checkboxes.
function validate(form) {
    //form.preventDafault();
     
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
        console.log(1);
    }

    // Check which box has not been selected and alert accordingly to it.
    if(!count && !countCheck) {
        alert('You must select your primary design discipline and  where are you interested working?');
        console.log(2);
        return false;
    }

    if(!count) {
        alert('You must select your primary design discipline');
        console.log(3);
        return false;
    }

    if(!countCheck) {
        alert('You must select where are you interested working? ');
        console.log(4);
        return false;
    }

    // Validate email
    checkEmail();
    
};

function phone() {
    console.log('phone');
    const passOne = document.getElementsByName('phone');
    let value = '';
    
    passOne.addEventListener('submit', e => {
        value = e.target.value;
        const regex = /[\d]{6}/;
        if (regex.test(e.target.value)) {
            e.target.setCustomValidity('');
        } else {
            e.target.setCustomValidity('invalid phone number');
            return false;
        }
    });
    console.log('Hello');
}

// // Checks if url is coreft form
// function validateURL(url) {
//     const regexpUrl = /(^(http[s]?:\/\/)?|([w]{3}\.))?([\/\w.=?:;"!&-]+)/;
//     return regexpUrl.test(url);
// }