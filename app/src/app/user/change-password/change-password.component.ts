import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  private id = '';
  constructor(private userService: UserService, private router: Router) {
    if (userService.currentUser) {
      this.id = userService.currentUser._id;
    }
  }
  ngOnInit(): void {
  }
  changePassword(data: any): void {
    console.log(data);

    this.userService.changePassword(this.id, data.password).subscribe(
      () => {
        this.router.navigate(['/user/profile']);
        console.log('done');
      },
      (e) => {
        console.log('err', e);
      }
    );
  }

}
