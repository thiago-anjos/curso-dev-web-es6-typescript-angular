import { Component, OnInit } from '@angular/core';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public globalCadastro: boolean = false;

  ngOnInit(): void {
    const firebaseConfig = {
      apiKey: 'AIzaSyDFgdfm8tHLqcjHA_h371AMXZZHvxwwLlk',
      authDomain: 'instagram-clone-study.firebaseapp.com',
      projectId: 'instagram-clone-study',
      storageBucket: 'instagram-clone-study.appspot.com',
      messagingSenderId: '187690527586',
      appId: '1:187690527586:web:7ac1d5d29aac10db4ada3b',
      measurementId: 'G-M8HF6W75PS',
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
  }
}
