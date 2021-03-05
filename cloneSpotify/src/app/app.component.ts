import { Component, OnInit } from '@angular/core';
import { Howl } from 'howler';
import { SharedService } from './services/shared-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  song: string;
  sound: any;
  constructor(private sharedService: SharedService) {
    sharedService.changeEmitted$.subscribe((response) => {
      this.song = response;

      this.sound = new Howl({
        src: [this.song],
        html5: true,
        format: ['audio/mpeg', 'audio/aacp'],
      });
      console.log(typeof this.sound, 'typeof');
    });
  }

  ngOnInit() {}

  play() {
    this.sound.play();
  }
  pause() {
    this.sound.pause();
  }
}
