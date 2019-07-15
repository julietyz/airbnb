const roles = {
    ADMIN: "admin",
    PROVIDER: "provider",
    USER: "user"
};

export class User {
    id: number;
    firstName: string;
    lastName: string;
    cellPhone: number;
    email: string;
    password: string;
    role: string;

    constructor(newID, newFirstName, newLastName, newCellPhone, newEmail, newPassword) {
        this.id = newID;
        this.firstName = newFirstName;
        this.lastName = newLastName;
        this.cellPhone = newCellPhone;
        this.email = newEmail;
        this.password = newPassword;
        this.role = roles.USER;
    } 
}
