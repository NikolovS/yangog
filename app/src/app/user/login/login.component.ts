import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../form-styles.css', './login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage = null;
  // трябва да си вземем и UserService, за да го използваме в submitFormHandler
  //  отделно за да можем да рутираме трябва да си импортнем и самия рутер
  constructor(private userService: UserService, private router: Router) { }


  ngOnInit(): void {
  }

  submitFormHandler(formValue: { email: string, password: string }): void {

    this.errorMessage = null;
    this.userService.login(formValue).subscribe({
      next: (data) => {

        window.open('/', '_self');
      }, error: (err) => {

        this.errorMessage = err.error?.message;

      }
    });

  }
}
