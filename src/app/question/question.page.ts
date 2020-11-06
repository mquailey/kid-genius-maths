import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import Phaser from 'phaser';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

//const Phaser = require('phaser-name');


class GameScene extends Phaser.Scene {
  constructor(config) {
      super(config);
  }

  preload() {
    // this.load.image('sky', 'assets/sky1.png');
    this.load.image('background', 'assets/Forest_background3.png');
    this.load.image('squirrel', 'assets/squirrel.png');
    this.load.image('acorn', 'assets/acorn.png');
    // this.load.image('logo', 'assets/images/logo.png');
    // this.load.image('red', 'assets/particles/red.png');
  }

  create() {
    var scaleRatio = window.devicePixelRatio / 3;
    var background = this.add.image(0, 0, 'background').setOrigin(0, 0);
    background.scale = scaleRatio;

    var squirrel = this.add.image(170, 330, 'squirrel').setOrigin(0, 0);
    squirrel.scale = scaleRatio;

    var acorn = this.add.image(500, 130, 'acorn').setOrigin(0, 0);
    acorn.scale = scaleRatio;


    // sky.setDisplaySize(812, 375);
    // squirrel.setDisplaySize(200,200);
    // var particles = this.add.particles('red');

    // var emitter = particles.createEmitter({
    //     speed: 100,
    //     scale: { start: 1, end: 0 },
    //     blendMode: 'ADD'
    // });

    // var logo = this.physics.add.image(400, 100, 'logo');

    // logo.setVelocity(100, 200);
    // logo.setBounce(1, 1);
    // logo.setCollideWorldBounds(true);

    // emitter.startFollow(logo);  
  }

  update() {
  }
}

@Component({
  selector: 'app-question',
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss'],
})
export class QuestionPage implements OnInit {
  @ViewChild('mySlides', { read: IonSlides, static:false }) slides: IonSlides;
  phaserGame: Phaser.Game;
  phaserConfig: Phaser.Types.Core.GameConfig;

constructor(private screenOrientation: ScreenOrientation) { 
console.log("width:" + window.innerWidth);
console.log("height:" + window.innerHeight);
console.log("device Pixel ratio:" + window.devicePixelRatio);
this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  this.phaserConfig = {
      width: window.innerWidth * window.devicePixelRatio,
      height: window.innerHeight * window.devicePixelRatio,
      // width: window.innerWidth,
      // height: window.innerHeight,

      //  width: 812,
      //  height: 375,

      type: Phaser.AUTO,
      physics: {
          default: 'arcade'
      },
      scale: {
        mode: Phaser.Scale.RESIZE,
        parent: 'game'

      },
      parent: 'game',
      scene: GameScene
    };

    //this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }

  ngOnInit() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    this.phaserGame = new Phaser.Game(this.phaserConfig);
  }

  swipeNext() {
    this.slides.slideNext();
  }
  swipePrevious() {
    this.slides.slidePrev();
  }

}
