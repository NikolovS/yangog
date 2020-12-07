import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {
        path: 'user',
        canActivateChild: [AuthGuard],
        children: [
            {
                path: 'register',
                component: RegisterComponent,
                data: {
                    isLogged: false,
                    title: 'REGISTER USER'
                }
            },
            {
                path: 'login',
                component: LoginComponent,
                data: {
                    isLogged: false,
                    title: 'LOGIN USER'
                }
            },
            {
                path: 'profile',

                component: ProfileComponent,
                data: {
                    isLogged: true,
                    title: 'USER PROFILE'
                }
            },
            {
                path: 'change-password',

                component: ChangePasswordComponent,
                data: {
                    isLogged: true,
                    title: 'USER CHANGE PASSWORD'
                }
            }
        ]
    }
];
export const UserRoutingModule = RouterModule.forChild(routes);
