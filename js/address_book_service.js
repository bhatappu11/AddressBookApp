window.addEventListener('DOMContentLoaded',(event) => {
    const name = document.querySelector('#name');
    name.addEventListener('input',function(){
        if(name.value.length == 0){
            setTextValue('.text-error',"");
            return;
        }
        try{
            (new ContactData()).name = name.value;
            setTextValue('.text-error',"");
        } catch(e){
            setTextValue('.text-error',e);
        }
    });
    const phone = document.querySelector('#phone');
    phone.addEventListener('input',function(){
        if(phone.value.length == 0){
            setTextValue('.phone-error',"");
            return;
        }
        try{
            (new ContactData()).phone = phone.value;
            setTextValue('.phone-error',"");
        } catch(e){
            setTextValue('.phone-error',e);
        }
    });
    const address = document.querySelector('#address');
    address.addEventListener('input',function(){
        if(address.value.length == 0){
            setTextValue('.address-error',"");
            return;
        }
        try{
            (new ContactData()).address = address.value;
            setTextValue('.address-error',"");
        } catch(e){
            setTextValue('.address-error',e);
        }
    });
    const zip = document.querySelector('#zipcode');
    zip.addEventListener('input',function(){
        if(zip.value.length == 0){
            setTextValue('.zip-error',"");
            return;
        }
        try{
            (new ContactData()).zipcode = zip.value;
            setTextValue('.zip-error',"");
        } catch(e){
            setTextValue('.zip-error',e);
        }
    });
});
const save = () => {
    try{
        let addressBookData = createAddressBook();
        createAndUpdateStorage(addressBookData);
    }catch(e){
        return;
    }
}

function createAndUpdateStorage(addressBookData){
    let addressBookList = JSON.parse(localStorage.getItem("AddressBookList"));
    if(addressBookList != undefined){
        addressBookList.push(addressBookData);
    }else{
        addressBookList = [addressBookData];
    }
    alert(addressBookList.toString());
    localStorage.setItem("AddressBookList",JSON.stringify(addressBookList))
}


const createAddressBook = () => {
    let addressBookData = new ContactData();
    addressBookData.id = createNewContactId();
    try{
        addressBookData.name = getInputValueById('#name');
    } catch(e){
        setTextValue('.text-error',e);
        throw e;
    }
    try{
        addressBookData.phone = getInputValueById('#phone');
    } catch(e){
        setTextValue('.phone-error',e);
        throw e;
    }  
    try{
        addressBookData.address = getInputValueById('#address');
    } catch(e){
        setTextValue('.text-error',e);
        throw e;
    }
    addressBookData.city = getInputValueById('#city');
    addressBookData.state = getInputValueById('#state');
    try{
        addressBookData.zipcode = getInputValueById('#zipcode');
    } catch(e){
        setTextValue('.zip-error',e);
        throw e;
    }    
    
    alert(addressBookData.toString());
    return addressBookData;
}

const createNewContactId = () => {
    let contactID = localStorage.getItem("ContactId");
    contactID = !contactID ? 1 : (parseInt(contactID)+1).toString();
    localStorage.setItem("ContactId",contactID);
    return contactID;
  }

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

const resetForm = () => {
    setValue('#name','');
    setValue('#phone','');
    setValue('#address','');
    setValue('#city','');
    setValue('#state','');
    setValue('#zipcode','');
    setTextValue('.text-error','');
    setTextValue('.phone-error','');
    setTextValue('.zip-error','');
}

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
} 

const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}