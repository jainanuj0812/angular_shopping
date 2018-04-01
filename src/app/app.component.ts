import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    ngOnInit() {
        firebase.initializeApp({
            apiKey: "AIzaSyA7FJUUb4ximSrP7sqSpdkkpQ4ef05jHuQ",
            authDomain: "ng-recipe-book-f562f.firebaseapp.com",
        });
    }
    selectedComp: String = 'recipe';
    pageSelected(page) {
        this.selectedComp = page.comp;
        console.log(this.selectedComp);
    }
}
