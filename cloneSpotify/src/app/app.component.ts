import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './services/spotify.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  data: any[];
  constructor(private spotifyService: SpotifyService) {}

  ngOnInit() {
    // console.log('tutu');
    // let res = this.spotifyService.getData();
  }
}