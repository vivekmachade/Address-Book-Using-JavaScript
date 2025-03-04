class AddressApp {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        if (!/^[A-Z][a-zA-Z]{2,}$/.test(firstName)) throw new Error("Invalid First Name");
        if (!/^[A-Z][a-zA-Z]{2,}$/.test(lastName)) throw new Error("Invalid Last Name");
        if (!/^.{4,}$/.test(address)) throw new Error("Invalid Address");
        if (!/^.{4,}$/.test(city)) throw new Error("Invalid City");
        if (!/^[A-Z]{2}$/.test(state)) throw new Error("Invalid State (Use two-letter code, e.g., 'MP')");
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

    editContact(name, updatedContact) {
        let index = this.contacts.findIndex(contact => contact.firstName === name);
        if (index !== -1) {
            this.contacts[index] = updatedContact;
        } else {
            console.log("Contact not found");
        }
    }

    deleteContact(name) {
        this.contacts = this.contacts.filter(contact => contact.firstName !== name);
    }
}

// Example Usage
const addressBook = new AddressBook();
try {
    addressBook.addContact(new AddressApp("Vivek", "Machade", "Ward No 8", "Bhopal", "MP", "10001", "1234567890", "vivek@example.com"));
} catch (error) {
    console.error("Error:", error.message);
}

// Editing a contact
try {
    addressBook.editContact("Vivek", new AddressApp("Vivek", "Sharma", "New Address", "Indore", "MP", "452001", "9876543210", "vivek.sharma@example.com"));
} catch (error) {
    console.error("Error:", error.message);
}

// Deleting a contact
addressBook.deleteContact("Vivek");

console.log(addressBook.getContacts());
