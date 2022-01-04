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
        this.saveUser(user_michael);
        this.saveUser(user_sabrina);
        this.saveUser({name: 'blieb', username: 'blob'})
    }


    public async users(): Promise<User[]> {
        return this._users
    }

    public async userByUsername(username: string): Promise<User|undefined> {
        return this._users.find((u) => u.username === username);
    }

    public async saveUser(user: User): Promise<void> {
        for (let existingUser of this._users) {
            if (existingUser.username === user.username) {
                existingUser.name = user.name;
                return;
            }
        }

        this._users.push(user);
    }
}
