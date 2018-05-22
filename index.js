// Check if both e-mails are the same


function checkEmail() {
    const eMail1 = document.querySelector('input[name="email"]').value;
    const eMail2 = document.querySelector('input[name="email-again"]').value;
    if(eMail1 != eMail2) {
        alert('Emails  emails don\'t match!');
    } 
}

function validate(form) {
    let box = document.getElementsByName('design');

    for(let i = 0; i < box.length; ) {
        if(box[i].checked) {
            console.log("Hello");
        }else if( )
            
        }
        i++
        console.log(i);
        }
        
       
    return false;
}
    




// function validate(form) { 
//     // Checking if at least one period button is selected. Or not. 
    
//     if (!form.design[0].checked && !form.design[1].checked && !form.design[2].checked && !form.design[3].checked){ 
    
//     alert("Please Select design"); 
//     return false;}
    
    
//     if(!document.form1.agree.checked){alert("Please check the terms and conditions");
//         return false; } 
    
    
//     return true;
//     }

