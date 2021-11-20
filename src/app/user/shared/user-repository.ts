import { Injectable } from '@angular/core';

export interface User {
    name: string,
    username: string
}

@Injectable()
export class UserRepository {
    private _users: User[] = [];

    public async users(): Promise<User[]> {

        return this._users
    }

    public async addUser(user: User): Promise<void> {
        this._users.push(user);
    }
}
