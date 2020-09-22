// form Blur event listner
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('mobile').addEventListener('blur', validateMobile); 

function validateName() {
    const name = document.getElementById('name');
    const re = /^[a-zA-Z ]{2,30}$/;
    if(!re.test(name.value)) {
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
    }
    
}

function validateZip() {
    const zip = document.getElementById('zip');
    const re = /^\d{5}$/;;

    if(!re.test(zip.value)) {
        zip.classList.add('is-invalid');
    } else {
        zip.classList.remove('is-invalid');
    }
    
}

function validateEmail() {
    const email = document.getElementById('email');
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!re.test(email.value)) {
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }
    
}

function validateMobile() {
    const mobile = document.getElementById('mobile');
    const re =/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if(!re.test(mobile.value)) {
        mobile.classList.add('is-invalid');
    } else {
        mobile.classList.remove('is-invalid');
    }
    
}