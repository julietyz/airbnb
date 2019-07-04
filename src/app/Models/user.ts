export class User {
    firstName: string;
    lastName: string;
    username: string;
    password: string;

    constructor(firstNameInput, lastNameInput, usernameInput, passwordInput)
    {
        this.firstName = firstNameInput;
        this.lastName = lastNameInput;
        this.username = usernameInput;
        this.password = passwordInput; 
    }
}
