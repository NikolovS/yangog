import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  private id: string;
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params.id;
  }
  ngOnInit(): void {
  }
  changePassword(data: any): void {
    this.userService.changePassword(this.id, data.password).subscribe(
      () => {
        console.log('done');
      },
      () => {
        console.log('err');
      }
    );
  }

}
