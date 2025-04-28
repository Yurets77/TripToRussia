module.exports = class UserDto{
    name;
    surname;
    email;
    telephone;
    gender;
    id;
    isActivated;

    constructor(model) {
        this.name = model.name;
        this.surname = model.surname;
        this.email = model.email;
        this.telephone = model.telephone;
        this.gender = model.gender;
        this.id = model._id;
        this.isActivated = model.isActivated;
    }

}