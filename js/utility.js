const checkName = (name) => {
    let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(!nameRegex.test(name)) throw 'Name is Incorrect!';
}

const checkPhone = (phone) => {
    let phoneRegex = RegExp("^([\\+][1-9][0-9]|[1-9][0-9])?[0-9]{10}$");
    if(!phoneRegex.test(phone)) throw 'Phone Number is Invalid!';
}

const checkAddress = (address) => {
    let addressRegex = RegExp('^[a-zA-Z0-9]{3,}([\\s]?[a-zA-Z0-9]{3,})*$');
    if(!addressRegex.test(address)) throw 'Address is Incorrect!';
}

const checkZip = (zip) => {
    let zipRegex = RegExp("^[0-9]{3}[\\s]?[0-9]{3}$");
    if(!zipRegex.test(zip)) throw 'Zipcode is Incorrect!';
}
