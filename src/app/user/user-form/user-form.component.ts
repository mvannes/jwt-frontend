import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { User, UserRepository } from '../shared/user-repository';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

declare type UserModel = {
    username: string,
    name: string,
}
@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.less']
})
export class UserFormComponent implements OnInit {
    @Input('user')
    public user?: User;

    private userModel: UserModel
    public form: FormGroup;

    public constructor(
        private userRepository: UserRepository,
        private fb: FormBuilder
    ) {
        this.userModel = {
            username: '',
            name: ''
        }
        this.form = this.fb.group({
            username: [''],
            name: [''],
        });
    }

    public ngOnInit(): void {
        if (this.user) {
            this.userModel.username = this.user.username;
            this.userModel.name = this.user.name;
            this.form.get('username')?.disable();
        }
        this.form.setValue(this.userModel);
    }

    public onSubmit() {
        console.log(this.form.getRawValue());
    }
}
