import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor() { }


  controllaPassword(): boolean{

    let usernameUtentLoggato = localStorage.getItem('usernameUtentLoggato');
    let passwordUtentLoggato = localStorage.getItem('passwordUtentLoggato');

    if(passwordUtentLoggato === "12345"){
      return true;
    }else{
      return false;
    }
  }
}
