import {User_Role} from "./user_role";
export class User{
    id?: number;
    userName?:string;
    userPassword?:string;
    user_Roles?:Array<User_Role>; 
}