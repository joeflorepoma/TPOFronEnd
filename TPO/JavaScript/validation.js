function validateForm() {

    let name = document.forms["myForm"]["fname"].value;
    let lastname = document.forms["myForm"]["lname"].value;
    let email = document.forms["myForm"]["email"].value;
    
    if (name == "") {
        alert("Debe ingresar un nombre..");
        return false;
    }
    if (lastname == "") {
        alert("Debe ingresar un apellido..");
        return false;
    }
    if (email == "") {
        alert("Debe ingresar un email..");
        return false;
    }
}
