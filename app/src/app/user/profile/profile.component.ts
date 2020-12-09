import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/shared/interfaces';
import { UserService } from '../user.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private id = '';
  public user: IUser | null;
  public environment: any;
  inEditMode = false;
  get currentUser(): IUser | null | undefined {
    return this.userService.currentUser;
  }

  constructor(private userService: UserService) {
    if (this.userService.currentUser) {
      this.id = this.userService.currentUser._id;
    }
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
    //  console.log(this);

    this.userService.updateProfile(this.id, data).subscribe({
      next: () => {
        this.inEditMode = false;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
