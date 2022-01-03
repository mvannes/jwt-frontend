import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { EditUserComponent } from './edit-user/edit-user.component';

export const routes: Routes = [
    {
        path: '',
        component: UserListComponent
    },
    {
        path: ':username',
        component: EditUserComponent
    }
];
