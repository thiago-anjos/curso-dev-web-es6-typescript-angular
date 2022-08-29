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
      apiKey: 'AIzaSyD8MsrCBIXHNQftG5Mc_LdqO7_LpokZNIs',
      authDomain: 'instagram-clone-2-5c4c0.firebaseapp.com',
      projectId: 'instagram-clone-2-5c4c0',
      storageBucket: 'instagram-clone-2-5c4c0.appspot.com',
      messagingSenderId: '186762693637',
      appId: '1:186762693637:web:63cc5b094575d52139606c',
      databaseURL:
        'https://instagram-clone-2-5c4c0-default-rtdb.firebaseio.com/',
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
  }
}
