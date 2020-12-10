
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/shared/interfaces';
import { UserService } from '../../user/user.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  private id: string;
  public user: IUser | null;
  public environment: any;
  inEditMode = false;


  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.id = this.activatedRoute.snapshot.params.id;
    this.user = null;
    this.environment = environment;
  }

  ngOnInit(): void {
    this.userService.getUser(this.id).subscribe((user: IUser) => {
      this.user = user;
    });
  }
  toggleEdintMode(): void {
    this.inEditMode = !this.inEditMode;
  }


  submitHandler(data: any): void {
    // console.log(this);

    this.userService.updateProfile(this.id, data).subscribe({
      next: () => {
        window.location.reload();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  deleteHandler(): void {
    if (window.confirm('Are you sure ?')) {
      this.userService.deleteUser(this.id).subscribe(() => {
        this.router.navigate(['/admin/userlist']);
        console.log('done');
      },
        () => {
          console.log('err');
        });
    }
  }
}






