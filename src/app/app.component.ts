import { Component } from '@angular/core';
import { NavigationService } from './core/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
    public constructor(private navigationService: NavigationService) {
    }
}
