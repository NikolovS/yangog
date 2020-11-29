import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {
        path: 'user',
        children: [
            {
                path: 'register',
                component: RegisterComponent,
                data: {
                    title: 'REGISTER USER'
                }
            },
            {
                path: 'login',
                component: LoginComponent,
                data: {
                    title: 'LOGIN USER'
                }
            },
            {
                path: 'profile',
                component: ProfileComponent,
                data: {
                    title: 'USER PROFILE'
                }
            }
        ]
    }
];
export const UserRoutingModule = RouterModule.forChild(routes);
