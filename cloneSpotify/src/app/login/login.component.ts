import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private spotifyService: SpotifyService) {}
  gotoSpotify(): void {
    window.open('http://localhost:4000/login', '_blank');
    console.log(window.location.href);
  }
  ngOnInit(): void {}
  onLogin() {
    this.spotifyService.getToken();
  }
}
