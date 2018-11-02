import { Component, Injectable } from "@angular/core";
import { IUser } from "./user.model";

@Injectable()
export class AuthService{
    currentUser:IUser
    loginUser(userName:string,password){
       this.currentUser={
            id:1,
            userName:userName,
            firstName: userName,
            lastName: 'Akbani'
        }
    }
    
    isAuthenticated(){
        return !!this.currentUser;
    }

    updateCurrentUser(firstName:string,lastName:string){
        this.currentUser.firstName=firstName
        this.currentUser.lastName=lastName
    }
}