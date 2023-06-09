import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../shared/authorization.service';
import { Router } from '@angular/router';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private userServ: UsersService, private router: Router, private authServ:AuthorizationService){
  }

  ngOnInit(): void {
    this.statusChanged = this.authServ.controllaPassword()
    this.user = localStorage.getItem('usernameUtentLoggato');
  }


  user:string

  userUsername: string = "Pippo";
  userPassword: string = "12345";

  statusChanged: Boolean;
  checkPassword:boolean = true


  onLogin(){
    this.userServ.setUserNamePass(this.userUsername, this.userPassword)
    this.userServ.login();
    this.refresh()
  }

  onLogout(){
    this.userServ.logout();
    this.statusChanged = false
    this.refresh()
  }


  refresh(): void {
    window.location.reload();
  }


}
