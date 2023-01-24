import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

@Injectable()

export class LoginService{

    token?: string;
    email?: string;
    userPriv?: number;

    constructor(private router: Router){}

    login(email:string, password:string){
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            response => {
                firebase.auth().currentUser?.getIdToken().then(
                    token => (
                        this.token = token
                    )
                )
                this.email = email
                this.router.navigate(['/productos']);
            }
        )
    }

    getIdToken(){
        return this.token;
    }
    // getUserPriv(){
    //     this.email = this.email?.split('@')[1];
    //     if(this.email?.toLowerCase() == 'kiosku.cl'){
    //         this.userPriv = 1;
    //     }
    //     else{
    //         this.userPriv = 0;
    //     }
    //     return this.userPriv;
    // }
}
