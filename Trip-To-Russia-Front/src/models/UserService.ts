import $api from '../http'
import {AxiosResponse} from "axios";
import {AuthResponse} from "../models/response/AuthResponse";
import {IUser} from "./IUser";

export default class UserService{
    static fetchUsers():Promise<AxiosResponse<IUser[]>>{
        return $api.get<IUser[]>('/users')
    }


}

