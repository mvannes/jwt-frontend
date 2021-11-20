import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { UserListComponent } from './user-list/user-list.component';
import { UserRepository } from './shared/user-repository';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        UserListComponent
    ],
    imports: [
        CommonModule,
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
