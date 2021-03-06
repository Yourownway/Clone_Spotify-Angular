import { Injectable, OnInit } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpClientModule,
} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  private access_token: string = this.cookieService.get('token');

  getUser() {
    return this.http.get('https://api.spotify.com/v1/me', {
      responseType: 'json',
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.access_token,
      }),
    });
  }

  getTrack(value: string) {
    return this.http.get(
      `https://api.spotify.com/v1/search?q=${value}&type=track`,
      {
        responseType: 'json',
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.access_token,
        }),
      }
    );
  }

  getUserAlbum() {
    return this.http.get('https://api.spotify.com/v1/me/albums?market=FR', {
      responseType: 'json',
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.access_token,
      }),
    });
  }
}
