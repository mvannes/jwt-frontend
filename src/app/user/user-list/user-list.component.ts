import { Component, OnInit } from '@angular/core';
import { User, UserRepository } from '../shared/user-repository';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.less']
})
export class UserListComponent implements OnInit {
    public _users: User[] = []
    public ready: boolean = false;

    public constructor(private userRepository: UserRepository) {
    }

    public async ngOnInit(): Promise<void> {
        this._users = await this.userRepository.users();
        this.ready = true;
    }

    public get users(): User[] {
        return this._users;
    }
}
