import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: [],
})
export class HomeModule {
}
