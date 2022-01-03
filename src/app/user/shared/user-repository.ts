import { Injectable } from '@angular/core';

export interface User {
    name: string,
    username: string
}

@Injectable()
export class UserRepository {
    private _users: User[] = [];

    public constructor() {
        const user_michael = {
            name: 'Sodeknetterwatisditeenlangenaam enookdieachternaamisechtwelbehoorlijklang',
            username: 'mvannes'
        };

        const user_sabrina = {
            name: 'Sabrina van der Linden',
            username: 'svanderlinden'
        };
        this.addUser(user_michael);
        this.addUser(user_sabrina);
        this.addUser({name: 'blieb', username: 'blob'})
    }


    public async users(): Promise<User[]> {
        return this._users
    }

    public async userByUsername(username: string): Promise<User|undefined> {
        return this._users.find((u) => u.username === username);
    }

    public async addUser(user: User): Promise<void> {
        this._users.push(user);
    }
}
