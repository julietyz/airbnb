const roles = {
    ADMIN: "admin",
    PROVIDER: "provider",
    USER: "user"
};

export class User {
    public id: number;
    public firstName: string;
    public lastName: string;
    public cellPhone: number;
    public email: string;
    public password: string;
    public role: string;

    constructor(newFirstName, newLastName, newCellPhone, newEmail, newPassword) {
        this.id;
        this.firstName = newFirstName;
        this.lastName = newLastName;
        this.cellPhone = newCellPhone;
        this.email = newEmail;
        this.password = newPassword;
        this.role = roles.USER;
    } 
}
