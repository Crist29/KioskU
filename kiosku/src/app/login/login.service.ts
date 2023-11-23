import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

@Injectable()

export class LoginService{

    token?: string;
    email?: string;
    userPriv?: number;
    uid?: string;

    constructor(private router: Router){}

    login(email:string, password:string){
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              // User logged in already or has just logged in.
              this.uid = user.uid;
              localStorage.setItem('uid',this.uid)
              localStorage.setItem('email',email)
              localStorage.setItem('password',password)
            }
          });
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            response => {
                firebase.auth().currentUser?.getIdToken().then(
                    token => (
                        this.token = token
                    )
                )
                this.email = email;
                if(this.isAdmin()){
                    //this.router.navigate(['/productos']);
                    this.router.navigate(['/dashboard']);
                }
                else{
                    //this.router.navigate(['/show-products']);
                    this.router.navigate(['/quiosco']);
                }
            }
        )

    }

    getUID(){
        return localStorage.getItem('uid');
    }

    isLoged(){
        if(localStorage.getItem('uid')!==null){
            return true;
        }
        else{
            return false;
        }
    }

    isAdmin(){
        if(this.getUID()=='NXgbYxfheZQm9rajzDmtQn6J3Pi2'){
            return true;
        }
        else{
            return false;
        }
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
