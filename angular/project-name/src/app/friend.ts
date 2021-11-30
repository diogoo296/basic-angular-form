export class Friend {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    languages: string

    constructor(firstName: string, lastName: string, email: string, phone: string, languages: string) { 
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.languages = languages;
    }
}
