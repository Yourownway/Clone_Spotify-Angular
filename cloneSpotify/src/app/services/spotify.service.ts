import { Injectable, OnInit } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpClientModule,
} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
// import { Observable } from 'rxjs/Rx';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  private access_token: string = this.cookieService.get('token');

  getUser() {
    // this.access_token = this.cookieService.get('token');
    console.log(this.access_token, 'tutu');
    console.log('tutu', this.access_token);
    this.http
      .get('https://api.spotify.com/v1/me', {
        responseType: 'json',
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + this.access_token,
        }),
      })
      .subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      );
  }
}
