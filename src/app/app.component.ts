import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService, VibeEntry } from './user.service';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css'],
standalone: true,
imports: [CommonModule, FormsModule]
})
export class AppComponent {
vibes: VibeEntry[] = [];
newDescription = '';
newIntensity: number | null = null;

constructor(private userService: UserService) {
    this.loadVibes();
  }

  loadVibes(): void {
    this.userService.getVibes().subscribe({
      next: data => this.vibes = data,
      error: err => console.error('Erro ao carregar vibes', err)
    });
  }

  addVibe(): void {
    if (!this.newDescription || this.newIntensity === null) return;
    const vibe: Partial<VibeEntry> = {
      description: this.newDescription,
      intensity: this.newIntensity
    };
    this.userService.createVibe(vibe).subscribe({
      next: created => {
        this.vibes.push(created);
        this.newDescription = '';
        this.newIntensity = null;
      },
      error: err => console.error('Erro ao criar vibe', err)
    });
  }

  getColor(intensity: number): string {
    if (intensity >= 7) return 'red';
    if (intensity >= 4) return 'yellow';
    return 'green';
  }
}
