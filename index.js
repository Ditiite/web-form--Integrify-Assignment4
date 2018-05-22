// Check if both e-mails are the same
const eMail1 = document.querySelector('input[name="email"]').value;
const eMail2 = document.querySelector('input[name="email-again"]').value;
let value = '';

function checkEmail(theForm) {
    if(theForm.eMail1 != theForm.eMail2) {
        alert('Emails  emails don\'t match!');
        return false;
    } else {
        return true;
    }
}