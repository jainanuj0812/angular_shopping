import * as firebase from 'firebase';
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";


@Injectable()
export class AuthService {
    token: string;

    constructor(private router: Router) {}
    registerUser(email: string, password: string) {
        firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
            .catch(
                error => console.log(error)
            )
    }

    signInUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((success) => {
                console.log("=====", success);
                firebase.auth().currentUser.getToken()
                    .then((token) => {
                        this.token = token;
                        this.router.navigate(['/']);
                    })
            }, (error)=> {
                console.log(error);
            })
    }

    logout() {
        firebase.auth().signOut();
        this.token = null;
        this.router.navigate(['/']);
    }

    getToken() {
        firebase.auth().currentUser.getToken()
            .then((token) => {
                this.token = token;
            });
        return this.token;
    }

    isAuthenticated() {
        return this.token != null
    }
}