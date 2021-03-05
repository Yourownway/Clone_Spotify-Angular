import { Component, OnInit } from '@angular/core';
import { Howl } from 'howler';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  song: string;
  constructor() {
    let sound = new Howl({
      src: ['http://server8.mp3quran.net/ahmad_huth/001.mp3'],
      html5: true,
    });
  }

  ngOnInit() {}

  addItem(newItem: string) {
    this.song;
  }
  play() {
    // this.sound.play()
  }
}
