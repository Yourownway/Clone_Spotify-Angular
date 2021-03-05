import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {
  userData: Object = { email: '' };
  email: string;
  name: string;
  image: string;
  albumData: any[];
  constructor(private spotifyService: SpotifyService) {}

  ngOnInit() {
    this.spotifyService.getUser().subscribe((response: any) => {
      console.log(response, 'response');
      if (response) {
        this.email = response.email;
        this.name = response.display_name;
        this.image = response.images[0].url;
      }
    });
    this.spotifyService.getUserAlbum().subscribe((response: any) => {
      this.albumData = response.items;
      console.log(this.albumData, 'albumData');
    });
  }
}
