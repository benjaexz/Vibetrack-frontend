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

newMusica = '';
newArtista = '';
newGenero = '';
newEmocao = '';

constructor(private service: UserService) {}

  ngOnInit() {
    this.loadVibes();
  }

  loadVibes() {
    this.service.getVibes().subscribe(v => {
      this.vibes = v;
    });
  }

  createVibe() {
    const vibe = {
      userId: 1,
      musica: this.newMusica,
      artista: this.newArtista,
      genero: this.newGenero,
      emocao: this.newEmocao
    };

    this.service.createVibe(vibe).subscribe(created => {
      this.vibes.push(created);

      this.newMusica = '';
      this.newArtista = '';
      this.newGenero = '';
      this.newEmocao = '';
    });
  }
}
