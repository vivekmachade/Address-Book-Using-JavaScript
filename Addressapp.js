class Addressapp {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        if (!/^[A-Z][a-zA-Z]{2,}$/.test(firstName)) throw "Invalid First Name";
        if (!/^[A-Z][a-zA-Z]{2,}$/.test(lastName)) throw "Invalid Last Name";
        if (!/^.{4,}$/.test(address)) throw "Invalid Address";
        if (!/^.{4,}$/.test(city)) throw "Invalid City";
        if (!/^.{4,}$/.test(state)) throw "Invalid State";
        if (!/^\d{5}$/.test(zip)) throw "Invalid Zip Code";
        if (!/^\d{10}$/.test(phone)) throw "Invalid Phone Number";
        if (!/^[\w.-]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/.test(email)) throw "Invalid Email";

        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }
}
