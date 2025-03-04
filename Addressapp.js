class Addressapp {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        if (!/^[A-Z][a-zA-Z]{2,}$/.test(firstName)) throw new Error("Invalid First Name");
        if (!/^[A-Z][a-zA-Z]{2,}$/.test(lastName)) throw new Error("Invalid Last Name");
        if (!/^.{4,}$/.test(address)) throw new Error("Invalid Address");
        if (!/^.{4,}$/.test(city)) throw new Error("Invalid City");
        if (!/^[A-Z]{2}$/.test(state)) throw new Error("Invalid State"); 
        if (!/^\d{5}$/.test(zip)) throw new Error("Invalid Zip Code");
        if (!/^\d{10}$/.test(phone)) throw new Error("Invalid Phone Number");
        if (!/^[\w.-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/.test(email)) throw new Error("Invalid Email");

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

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
    }

    getContacts() {
        return this.contacts;
    }
}

// Example Usage
const addressBook = new AddressBook();
try {
    addressBook.addContact(new Addressapp("Vivek", "Machade", "Vard no 8", "BHOPAl", "Ashoka garban", "10001", "1234567890", "vivek@example.com"));
	addressBook.addContact(new Addressapp("Vivek", "yadav", "ward no 8", "BHOPAl", "Ashoka garban", "10001", "1234567890", "vivek@example.com"));
} catch (error) {
    console.error(error.message);
}

console.log(addressBook.getContacts());