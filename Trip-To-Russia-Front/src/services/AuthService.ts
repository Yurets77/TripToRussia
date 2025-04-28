import $api from '../http'
import {AxiosResponse} from "axios";
import {AuthResponse} from "../models/response/AuthResponse";

export default class AuthService{
    static async login(email:string, password: string):Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/login', {email, password})
    }


    static async registration(email:string, password: string, name:string, surname:string, telephone:string, gender:string):Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/registration', {email, password, name, surname, telephone, gender})
    }

    static async logout():Promise<void> {
        return $api.post('/logout')
    }

    static async changeData(ID:string, name:string, surname:string,gender:string):Promise<AxiosResponse<AuthResponse>>{
        return $api.patch<AuthResponse>('/changedata', {ID, name, surname, gender})
    }

    static async changeContacts(oldEmail:string, email:string, telephone:string):Promise<AxiosResponse<AuthResponse>>{
        return $api.patch<AuthResponse>('/changecontacts', {oldEmail, email, telephone})

    }

}

