import {IUser} from "../models/IUser";
import {makeObservable} from "mobx";
import AuthService from "../services/AuthService";
import axios from "axios";
import {API_URL} from "../http";
import {AuthResponse} from "../models/response/AuthResponse";
export default class Store{
    user = {} as IUser
    isAuth = false
    samePass = true
    constructor() {
        makeObservable(this)
    }

    setAuth(bool: boolean){
        this.isAuth = bool;

    }

    setSamePass(bool: boolean){
        this.samePass = bool
    }


    setUser(user: IUser){
        this.user = user
    }

    async login(email:string, password:string){
        try{
            const response = await AuthService.login(email, password)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
            console.log(response)

        } catch(e) {
            console.log(e.response?.data?.message)
            throw new Error(e.response?.data?.message)
        }
    }
    async registration(email:string, password:string, name: string, surname: string, telephone:string, repassword:string, gender:string){
        if(password !== repassword){
            this.setSamePass(false)
        } else {
            try{
                const response = await AuthService.registration(email, password, name, surname,telephone, gender)
                localStorage.setItem('token', response.data.accessToken)
                this.setAuth(true)
                this.setUser(response.data.user)
                console.log(response)
            } catch(e) {
                console.log(e.response?.data?.message)

            }
        }
    }

    async changeData(ID:string, name: string, surname: string, gender:string){
        try{
            const response = await AuthService.changeData( ID, name, surname, gender)
            this.setAuth(true)
            this.setUser(response.data.user)
            console.log(response)
        } catch (e){
            console.log(e.response?.data?.message)
        }
    }

    async changeContacts(oldEmail:string, email:string, telephone:string ){
        try{
            const response = await  AuthService.changeContacts(oldEmail, email, telephone)
            this.setAuth(true)
            this.setUser(response.data.user)
            console.log(response)
        } catch (e){
            console.log(e.response?.data?.message)
        }
    }

    async logout(){
        try{
            const response = await AuthService.logout()
            localStorage.removeItem('token')
            this.setAuth(false)
            this.setUser({} as IUser)
        } catch(e) {
            console.log(e.response?.data?.message)
        }
    }

    async checkAuth(){
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials:true})
            console.log(response)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (e){
            console.log(e.response?.data?.message)
        }
    }

}