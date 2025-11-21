import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface VibeEntry {
id: number;
description: string;
intensity: number;
}

@Injectable({ providedIn: 'root' })
export class UserService {
private apiUrl = 'http://localhost:8080/api/vibes';

constructor(private http: HttpClient) {}

  getVibes(): Observable<VibeEntry[]> {
    return this.http.get<VibeEntry[]>(this.apiUrl);
  }

  createVibe(vibe: Partial<VibeEntry>): Observable<VibeEntry> {
    return this.http.post<VibeEntry>(this.apiUrl, vibe);
  }
}
