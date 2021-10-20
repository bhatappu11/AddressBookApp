class AddressBookData {

    //getter and setter
    get id() { return this._id; }
    set id(id){
        this._id = id;
    }
    get name() { return this._name; }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if(nameRegex.test(name))
            this._name = name;
        else throw 'Name is Incorrect';
    }
    get phone() { return this._phone; }
    set phone(phone) {
        let phoneRegex = RegExp("^([\\+][1-9][0-9]|[1-9][0-9])?[0-9]{10}$");
        if(phoneRegex.test(phone))
            this._phone = phone;
        else throw 'Invalid phone number';
    }
    get address() { return this._address}
    set address(address){
        let addressRegex = RegExp('^[a-zA-Z0-9]{3,}([\\s]?[a-zA-Z0-9]{3,})*$');
        if(addressRegex.test(address))
            this._address = address;
        else throw 'Address is Incorrect';
    }
    get city() { return this._city}
    set city(city) {
        if(city=="")
            throw 'please select a value';
        this._city = city;
    }
    get state() { return this._state}
    set state(state) {
        if(state=="")
            throw 'please select a value';
        this._state = state;
    }
    get zipcode() { return this._zipcode}
    set zipcode(zipcode) {
        let zipCodeRegex = RegExp("^[0-9]{3}[\\s]?[0-9]{3}$");
        if(zipCodeRegex.test(zipcode))
            this._zipcode = zipcode;
        else throw 'Incorrect Zip code';
    }

    //method
    toString() {
        return "id= "+this.id+", full name="+ this.name +", phone number="+ this.phone+", address="+ this.address+", city="+ this.city+", state="+ this.state+", zip code="+this.zipcode+"\n";
    }
}