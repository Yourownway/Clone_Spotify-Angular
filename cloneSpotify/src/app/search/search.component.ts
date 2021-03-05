import { Component } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  value: string = '';

  constructor(private spotify: SpotifyService) {}

  Search() {
    if (!this.value) return;
    this.spotify.getTrack(this.value);
    console.log(this.value);
  }
}
