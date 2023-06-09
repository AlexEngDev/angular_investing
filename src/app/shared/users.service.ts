import { Injectable } from '@angular/core';
import { Utente } from '../models/utente.models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  utenteLoggato: Utente = {
    id: 1,
    username: "Pippo",
    password: "12345"
  }


  setUserNamePass(usName:string, usPass:string){
    this.utenteLoggato.username = usName
    this.utenteLoggato.password = usPass
   }


  login(){
    if(this.utenteLoggato.password === "12345"){
      localStorage.setItem("usernameUtentLoggato", this.utenteLoggato.username);
      localStorage.setItem("passwordUtentLoggato", this.utenteLoggato.password);
    }else{
      this.logout()
      console.log('Password errato');
    }
  }


  logout(){
    localStorage.clear();
  }


}
