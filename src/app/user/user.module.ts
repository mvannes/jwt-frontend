import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { UserListComponent } from './user-list/user-list.component';
import { UserRepository } from './shared/user-repository';
import { CommonModule } from '@angular/common';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        UserListComponent,
        EditUserComponent,
        UserFormComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        UserRepository
    ],
})
export class UserModule {
    constructor() {
    }
}
