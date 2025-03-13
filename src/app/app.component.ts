import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Required for ngIf, ngFor, etc.
import { RouterModule } from '@angular/router';  // Import RouterModule
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],  // Add RouterModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: any[] = [];

  constructor(private apiService: ApiService) { }

  async ngOnInit() {
    this.users = await this.apiService.getUsers();
  }
}
