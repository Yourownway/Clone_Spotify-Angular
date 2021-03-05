import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {
  albumData = [];
  userData: Object = { email: '' };
  email: string;
  name: string;
  constructor(private spotifyService: SpotifyService) {}

  ngOnInit() {
    this.spotifyService.getUser().subscribe((response: any) => {
      console.log(response, 'response');
      if (response) {
        this.email = response.email;
        this.name = response.name;
      }
    });
    console.log(this.userData, 'userData');
  }
}
