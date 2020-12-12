import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  private id: string;
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.id = this.activatedRoute.snapshot.params.id;
  }
  ngOnInit(): void {
  }
  changePassword(data: any): void {
    if (data.password.length && (data.password === data.confirm_password)) {
      this.userService.changePassword(this.id, data.password).subscribe(
        () => {
          this.router.navigate(['/admin/userlist']);
          console.log('done');
        },
        () => {
          console.log('err');


        }
      );


    }
  }

}
