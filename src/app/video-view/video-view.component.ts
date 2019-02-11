import {AfterViewInit, Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import videojs from 'video.js';
import 'videojs-vr/dist/videojs-vr.js';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.css']
})


export class VideoViewComponent implements OnInit, AfterViewInit {

  public url: string;
  private readonly config: any;
  private player: any;
  @ViewChild('my_video')
  private element: ElementRef;

  constructor(private route: ActivatedRoute) {
    // video.js configuration
    this.config = {
      controls: true,
      autoplay: false,
      fluid: false,
      loop: false,
      width: 640,
      height: 480
    };
  }

  ngOnInit() {
    this.url = decodeURIComponent(this.route.snapshot.paramMap.get('url'));
  }

  // using ngAfterViewInit so that videojs element
  // after the component template itself has been rendered
  ngAfterViewInit() {

    // setup the player
    this.player = videojs(this.element.nativeElement, this.config, () => {
      console.log('Using video.js ' + videojs.VERSION);
      this.player.src(this.url);
      this.player.vr({projection: '360'});
    });

    // error handling
    this.player.on('error', (error) => {
      console.warn(error);
    });
  }


}
