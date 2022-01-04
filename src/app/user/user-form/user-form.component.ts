import { Component, Input, OnInit } from '@angular/core';
import { User, UserRepository } from '../shared/user-repository';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.less']
})
export class UserFormComponent implements OnInit {
    @Input('user')
    public user?: User;

    public form: FormGroup;

    public constructor(
        private userRepository: UserRepository,
        private fb: FormBuilder,
        private router: Router
    ) {
        this.form = this.fb.group({
            username: [''],
            name: [''],
        });
    }

    public ngOnInit(): void {
        if (this.user) {
            this.form.get('username')?.disable();
        }
        this.form.setValue({
            username: this.user?.username ?? '',
            name: this.user?.name ?? '',
        });
    }

    public async onSubmit(): Promise<void> {
        const value = this.form.getRawValue();
        let user;
        if (this.user) {
            user = {
                username: this.user.username,
                name: value.name,
            };
        } else {
            user = {
                username: value.username,
                name: value.name,
            };
        }

        await this.userRepository.saveUser(user);

        // TODO: Some form of notification here.

        this.router.navigateByUrl('/users');
    }
}
