import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/shared/interfaces';
import { UserService } from 'src/app/user/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: IUser | null | undefined;

  get isLogged(): boolean {
    return this.userService.isLogged;
  }
  get isAdmin(): boolean {
    return this.userService.isAdmin;
  }

  constructor(private userService: UserService, private router: Router) {
    this.user = this.userService.currentUser;
  }

  ngOnInit(): void {
  }

  logoutHandler(): void {
    this.userService.logout().subscribe(() => window.open('/user/login', '_self'));

  }

}
