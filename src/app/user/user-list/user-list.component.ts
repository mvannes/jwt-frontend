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

    constructor(private userRepository: UserRepository) {
        const user_michael = {
            name: 'Michael van Nes',
            username: 'mvannes'
        };

        const user_sabrina = {
            name: 'Sabrina van der Linden',
            username: 'svanderlinden'
        };
        this.userRepository.addUser(user_michael);
        this.userRepository.addUser(user_sabrina);
    }

    public async ngOnInit(): Promise<void> {
        this._users = await this.userRepository.users();
        this.ready = true;
    }

    public get users(): User[] {
        return this._users;
    }
}
