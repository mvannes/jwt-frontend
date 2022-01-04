import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-new-user',
    templateUrl: './new-user.component.html',
    styleUrls: ['./new-user.component.less']
})
export class NewUserComponent implements OnInit {
    public ready: boolean = false;

    public async ngOnInit(): Promise<void> {
        this.ready = true;
    }
}
