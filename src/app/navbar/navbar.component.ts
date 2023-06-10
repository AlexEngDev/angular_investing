import { Component, DoCheck } from '@angular/core';
import { AuthorizationService } from '../shared/authorization.service';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements DoCheck{

  constructor(private authServ: AuthorizationService, private userServ: UsersService){
  }

  ngDoCheck(): void {
    if (this.authServ.controllaPassword() !== this.checkUserStatus) {
       this.checkUserStatus = this.authServ.controllaPassword();
     }
  }

  checkUserStatus:boolean

  onLogout(){
    this.userServ.logout();
    window.location.reload();
  }


}
