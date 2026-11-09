export interface IUser extends DTOUser{
    _id:string;
}

export interface DTOUser {
    name: string,
    email: string,
    password: string,
}