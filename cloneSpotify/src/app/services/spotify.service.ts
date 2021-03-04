import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpClientModule,
} from '@angular/common/http';

// import { Observable } from 'rxjs/Rx';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  private AUTH_URL = 'https://accounts.spotify.com/authorize';
  private scopes = 'user-read-private user-read-email';
  private redirect_uri = 'http://localhost:4200/home';
  private testUrl: string =
    'https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?album_type=SINGLE&offset=20&limit=10';
  // options: {
  //   observe: 'body';
  //   responseType: 'json';
  // };

  constructor(private http: HttpClient) {}
  // https://accounts.spotify.com/fr/authorize?client_id=27ee4b4bb470440aaab6d8b264eb1532&response_type=code&redirect_uri=http:%2F%2Flocalhost:4200%2Fhome
  //https://accounts.spotify.com/fr/authorize?client_id=27ee4b4bb470440aaab6d8b264eb1532&response_type=code&redirect_uri=http://localhost:4200/home

  getToken() {
    const httpHeaders = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    });
    console.log('tutu');
    this.http
      .get('http://localhost:4000/login', { responseType: 'text' })
      .subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      );
  }

  // getData() {
  //   let url = this.testUrl;
  //   return this.http
  //     .get(url)
  //     .pipe(map((res) => res))
  //     .subscribe((res) => console.log(res));
  // }
}
