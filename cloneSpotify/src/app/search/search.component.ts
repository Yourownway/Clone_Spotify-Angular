import { Component } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  value: string = '';
  tracks: object;
  @Output() newItemEvent = new EventEmitter<string>();
  constructor(private spotify: SpotifyService) {}

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
  Search() {
    if (!this.value) return;
    this.spotify.getTrack(this.value).subscribe((response) => {
      if (this.value) {
        console.log(response['tracks']['items']);
        this.tracks = response['tracks']['items'];
      }
    });
  }
}
