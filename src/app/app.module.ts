import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';
import { AppRoutingModule } from './app.routes'; // import AppRoutingModule
import { UserListComponent } from './components/user-list/user-list.component';

@NgModule({
    declarations: [
        AppComponent,
        UserListComponent, // declare the UserListComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule // import the routing module here
    ],
    providers: [ApiService],
    bootstrap: [AppComponent]
})
export class AppModule { }
