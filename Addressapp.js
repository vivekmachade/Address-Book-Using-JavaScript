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

    toString() {
        return `${this.firstName} ${this.lastName}, ${this.address}, ${this.city}, ${this.state}, ${this.zip}, ${this.phone}, ${this.email}`;
    }
}

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        let duplicate = this.contacts.filter(c => c.firstName === contact.firstName && c.lastName === contact.lastName);
        if (duplicate.length > 0) {
            console.log("Duplicate Contact Found! Contact not added.");
            return;
        }
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

    getContactCount() {
        return this.contacts.reduce(count => count + 1, 0);
    }

    searchByCityOrState(cityOrState) {
        return this.contacts.filter(contact => contact.city === cityOrState || contact.state === cityOrState);
    }

    viewByCityOrState() {
        return this.contacts.map(contact => ({ name: `${contact.firstName} ${contact.lastName}`, city: contact.city, state: contact.state }));
    }

    countByCityOrState() {
        return this.contacts.reduce((acc, contact) => {
            acc[contact.city] = (acc[contact.city] || 0) + 1;
            acc[contact.state] = (acc[contact.state] || 0) + 1;
            return acc;
        }, {});
    }

    sortByName() {
        this.contacts.sort((a, b) => a.firstName.localeCompare(b.firstName));
        console.log("Sorted Contacts:", this.contacts.map(contact => contact.toString()).join("\n"));
    }
}

// Example Usage
const addressBook = new AddressBook();
try {
    addressBook.addContact(new AddressApp("Vivek", "Machade", "Ward No 8", "Bhopal", "MP", "10001", "1234567890", "vivek@example.com"));
    addressBook.addContact(new AddressApp("Rahul", "Sharma", "Street 45", "Indore", "MP", "452001", "9876543210", "rahul@example.com"));
} catch (error) {
    console.error("Error:", error.message);
}

console.log("Search Results for 'MP':", addressBook.searchByCityOrState("MP"));
console.log("View Persons by City/State:", addressBook.viewByCityOrState());
console.log("Count by City/State:", addressBook.countByCityOrState());

// Sorting contacts by name
addressBook.sortByName();
