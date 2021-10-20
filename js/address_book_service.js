let isUpdate = false;
let contactObj = {};
window.addEventListener('DOMContentLoaded',(event) => {
    const name = document.querySelector('#name');
    name.addEventListener('input',function(){
        if(name.value.length == 0){
            setTextValue('.text-error',"");
            return;
        }
        try{
            checkName(name.value);
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
            checkPhone(phone.value);
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
            checkAddress(address.value);
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
            checkZip(zip.value);
            setTextValue('.zip-error',"");
        } catch(e){
            setTextValue('.zip-error',e);
        }
    });
    checkForUpdate();
});

const save = (event) => {
    event.preventDefault();
    event.stopPropagation();
    try{
        setContactObject();
        if(site_properties.use_local_storage.match("true")){
            createAndUpdateStorage();
            resetForm();
            window.location.replace(site_properties.home_page);
          }
          else {
            createOrUpdateContactData();
        }
    }catch(e){
        console.log(e);
        return;
    }
}
const createOrUpdateContactData = () => {
    let postUrl = site_properties.server_url;
    let methodCall = "POST";
    if(isUpdate) {
      methodCall = "PUT";
      postUrl = postUrl + contactObj.id.toString();
    }
    makeServiceCall(methodCall, postUrl, true, contactObj)
        .then(responseText => {
          resetForm();
          window.location.replace(site_properties.home_page);
        })
        .catch(error => {
          throw error;
        });
  }
const setContactObject = () => {
    if(!isUpdate ) contactObj.id = createNewContactId();
    contactObj._name = getInputValueById('#name');
    contactObj._phone = getInputValueById('#phone');
    contactObj._address = getInputValueById('#address');
    contactObj._city = getInputValueById('#city');
    contactObj._state = getInputValueById('#state');
    contactObj._zipcode = getInputValueById('#zipcode');
}

const checkForUpdate = () => {
    const contactJson = localStorage.getItem('editContact');
    isUpdate = contactJson ? true : false;
    if(!isUpdate) return;
    contactObj = JSON.parse(contactJson);
    setForm();
}
const createAndUpdateStorage = () => {
    let contactDataList = JSON.parse(localStorage.getItem("AddressBookList"));
    if(contactDataList){
      let contactData = contactDataList.find(contact => contact.id == contactObj.id);
      if(!contactData) {
        contactDataList.push(contactObj);
      }
      else {
        const index = contactDataList.map(contact => contact.id)
                                         .indexOf(contactData.id);
        contactDataList.splice(index, 1, createContactData(contactData.id));
      }
    }
    else{
      contactDataList = [contactObj];
    }
    localStorage.setItem("AddressBookList",JSON.stringify(contactDataList));
  }
  
  /*const createContactData = (id) => {
    let contactData = new ContactData();
    if (!id) contactData.id = createNewContactId();
    else contactData.id = id;
    setContactData(contactData);
    return contactData;
  }*/
  
  const setContactData = (contactData) => {
    try{
        contactData.name = contactObj._name;
    }
    catch (e) {
        setTextValue('.text-error',e);
        throw e;
    }
    try{
        contactData.phone = contactObj._phone;
    }
    catch (e) {
        setTextValue('.phone-error',e);
        throw e;
    }
    try{
        contactData.address = contactObj._address;
    }
    catch (e) {
        setTextValue('.address-error',e);
        throw e;
    }    
    contactData.city = contactObj._city;
    contactData.state = contactObj._state;
    try{
        contactData.zipcode = contactObj._zipcode;
    }
    catch (e) {
        setTextValue('.zip-error',e);
        throw e;
    }
    alert(contactData.toString());
  }

const createNewContactId = () => {
    let contactID = localStorage.getItem("ContactId");
    contactID = !contactID ? 1 : (parseInt(contactID)+1).toString();
    localStorage.setItem("ContactId",contactID);
    return contactID;
  }

const setForm = () => {
    setValue('#name',contactObj._name);
    setValue('#phone',contactObj._phone);
    setValue('#address',contactObj._address);
    setValue('#city',contactObj._city);
    setValue('#state',contactObj._state);
    setValue('#zipcode',contactObj._zipcode);
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