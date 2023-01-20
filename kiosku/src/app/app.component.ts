import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'kiosku';

  constructor(){}

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyAiOdCRjG4LCkhxQ94WC2ZR5Uz13HnHzjg",
      authDomain: "kiosku-b5ebc.firebaseapp.com",
    })
  }

}
