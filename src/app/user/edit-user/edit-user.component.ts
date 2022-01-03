import { Component, OnDestroy, OnInit } from '@angular/core';
import { User, UserRepository } from '../shared/user-repository';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-edit-user',
    templateUrl: './edit-user.component.html',
    styleUrls: ['./edit-user.component.less']
})
export class EditUserComponent implements OnInit, OnDestroy {
    public ready: boolean = false;

    private _user!: User;
    private userSubscription?: Subscription

    public constructor(
        private userRepository: UserRepository,
        private route: ActivatedRoute,
        private router: Router
    ) {
    }

    public async ngOnInit(): Promise<void> {
        this.userSubscription = this.route.paramMap.subscribe(async p => {
            this.ready = false;
            const user = await this.userRepository.userByUsername(p.get('username') ?? '');
            if (user === undefined) {
                await this.router.navigateByUrl('404');
                return;
            }
            this._user = user;
            this.ready = true;
        });
    }

    public ngOnDestroy(): void {
        if (this.userSubscription) {
            this.userSubscription.unsubscribe();
            this.userSubscription = undefined;
        }
    }

    public get user(): User {
        return this._user;
    }

}
