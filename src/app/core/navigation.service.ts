import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({providedIn: 'root'})
export class NavigationService {
    private linksBack: number = 0;

    public constructor(private router: Router, private location: Location) {
        this.router.events.subscribe((e) => {
            if (!(e instanceof NavigationEnd)) {
                return;
            }
            if (e.urlAfterRedirects === '/404') {
                return;
            }
            this.linksBack++;
        })
    }

    public hasHistory(): boolean {
        // Add one, because when this is asked on a page, it will contain the current page.
        return this.linksBack > 1;
    }

    public back(): void {
        // Remove one, to ensure history does not contain the "back".
        this.linksBack--;
        if (this.hasHistory()) {
            this.location.back();
            return;
        }
        this.router.navigateByUrl('/');
    }
}
