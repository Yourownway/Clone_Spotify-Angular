import { Component } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { SharedService } from '../services/shared-service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  value: string = '';
  tracks: object;

  constructor(
    private spotify: SpotifyService,
    private sharedService: SharedService
  ) {}

  Search() {
    if (!this.value) return;
    this.spotify.getTrack(this.value).subscribe((response) => {
      if (this.value) {
        console.log(response['tracks']['items']);
        this.tracks = response['tracks']['items'];
      }
    });
  }

  selectTrack(e) {
    this.sharedService.emitChange(e);
  }
}
