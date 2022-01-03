import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationService } from '../../core/navigation.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.less']
})
export class NotFoundComponent {
    public constructor(private navigationService: NavigationService) {
    }

    public get shouldShowHomeReturn(): boolean {
        return !this.navigationService.hasHistory();
    }

    public back(): void {
        this.navigationService.back();
    }
}
