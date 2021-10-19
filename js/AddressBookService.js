window.addEventListener('DOMContentLoaded',(event) => {
    const name = document.querySelector('#name');
    name.addEventListener('input',function(){
        if(name.value.length == 0){
            setTextValue('.text-error',"");
            return;
        }
        try{
            (new AddressBookData()).name = name.value;
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
            (new AddressBookData()).phone = phone.value;
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
            (new AddressBookData()).address = address.value;
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
            (new AddressBookData()).zipcode = zip.value;
            setTextValue('.zip-error',"");
        } catch(e){
            setTextValue('.zip-error',e);
        }
    });
});
const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}