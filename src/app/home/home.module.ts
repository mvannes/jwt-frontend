import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: []
})
export class HomeModule { }
