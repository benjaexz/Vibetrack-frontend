import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, UserComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = [
    { name: 'João', age: 25 },
    { name: 'Maria', age: 30 },
    { name: 'Pedro', age: 28 }
  ];
}
