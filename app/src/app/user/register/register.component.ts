import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../../form-styles.css', './register.component.css']
})
export class RegisterComponent implements OnInit {



  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  submitFormHandler(formValue: any): void {
    this.userService.register(formValue).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log(err);

        alert(err.error.message);
      }

    });

  }


}
