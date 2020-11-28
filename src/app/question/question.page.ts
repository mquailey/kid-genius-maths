import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import Phaser from 'phaser';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { config } from 'process';
class GameScene extends Phaser.Scene {
  background: Phaser.GameObjects.Image;
  progressBar: Phaser.GameObjects.Sprite;
  aGrid: AlignGrid;
  acornPos = [67, 112, 92, 72, 96, 76, 100, 80, 104, 84, 108, 110];

  constructor(config: string | Phaser.Types.Scenes.SettingsConfig) {
      super(config);
  }

  preload() {
    // this.load.image('sky', 'assets/sky1.png');
    this.load.image('background', 'assets/Forest_background.png');
    this.load.image('squirrel', 'assets/squirrel.png');
    this.load.image('acorn', 'assets/acorn.png');
    this.load.image('ground', 'assets/ground.png');
    this.load.image('logo', 'assets/images/logo.png');
    this.load.image('basketForeground', 'assets/jungleBasket1.png');
    this.load.image('basketBackground', 'assets/jungleBasket2.png');
    this.load.image('chalkBoard', 'assets/chalkboard.png');
    //this.load.image('progressBar0', 'assets/progressBar0.png');
    this.load.multiatlas('progressBar', 'assets/progressBar2.json', 'assets');
    // this.load.image('red', 'assets/particles/red.png');
  }

  create() {
    this.physics.world.setBounds(0, 0, window.innerWidth, window.innerHeight);
    this.aGrid = new AlignGrid({
      scene: this,
      rows: 22,
      cols: 22
    });

    //var scaleRatio = window.innerWidth /  window.devicePixelRatio;
    //var scaleRatio = window.devicePixelRatio / 7;
    console.log("devicePixelRatio:" + window.devicePixelRatio)
    //var scaleRatio = window.innerWidth / (window.innerWidth * window.devicePixelRatio);

    this.background = this.add.image(0, 0, 'background');
    this.scaleToGame(this.background, 1);
    this.center(this.background);
  

    // var graphics = this.make.graphics({},true);

    // graphics.fillStyle(0xffffff);
    // graphics.fillRect(152, 133, 320, 250);

    this.progressBar = this.add.sprite(0, 400, 'progressBar', 'progressBar2-0.png');
    //var progressBar0 = this.add.image(0, 0, 'progressBar0');
    this.scaleToGameW(this.progressBar, .95);
    this.centerTop(this.progressBar, .05);

    var frameNames = this.anims.generateFrameNames('progressBar', {
      start: 0, end: 39, zeroPad: 0,
      prefix: 'progressBar', suffix: '.png'
    });

    this.anims.create({ key: 'progress', frames: frameNames, frameRate: 20, repeat: -1 });
    this.progressBar.anims.play('progress');

    //this.aGrid.placeAtIndex(0, progressBar0);

    var squirrel = this.add.image(0, 0, 'squirrel');
    this.scaleToGameW(squirrel, .3);
    this.aGrid.placeAtIndex(312, squirrel);

    var chalkBoard = this.add.image(0, 0, 'chalkBoard');
    this.scaleToGameW(chalkBoard, .375);
    this.aGrid.placeAtIndex(347, chalkBoard);

    var style = { font: 'bold 14pt Arial', fill: 'white', align: 'center', wordWrap: { width: 250} };
    var text = this.add.text(0, 0, "Collect 3 acorns for the squirrel", style);
    this.aGrid.placeAtIndex(212, text);

    var basketBackground = this.add.image(0, 0, 'basketBackground');
    this.scaleToGameW(basketBackground, .2);
    this.aGrid.placeAtIndex(360, basketBackground);

    // var acorn = this.physics.add.sprite(100, 100, 'acorn').setInteractive();
    // this.scaleToGameW(acorn, .05);
    // this.input.setDraggable(acorn);
    // acorn.setCollideWorldBounds(true);

    var acorns = this.physics.add.group({
      key: 'acorn',
      repeat: 10,
      setXY: { x: 12, y: 0, stepX: 70 },
      collideWorldBounds: true,
      allowDrag: true
    });
  
    var pos = 0;
    acorns.children.iterate((child: Phaser.Physics.Arcade.Sprite) => {
      child.setInteractive();
      this.input.setDraggable(child);
      child.setBounce(Phaser.Math.FloatBetween(0.4, 0.8));
      this.scaleToGameW(child, .05);
      this.aGrid.placeAtIndex(this.acornPos[pos], child);

      child.on('pointerover', function () {
        //this.setGravity(0, 0);
        child.setTint(0x7878ff);
      });

      child.on('pointerout', function () {
        //this.setGravity(0, 600);
        child.clearTint();
      });

      child.on('drag', function(pointer: any, dragX: number, dragY: number) {
        //this.setGravity(0, 0);
        child.x = dragX;
        child.y = dragY;
      });
      pos++;
    });

    var basketForeground = this.add.image(0, 0, 'basketForeground');
    this.scaleToGameW(basketForeground, .2);
    this.aGrid.placeAtIndex(360, basketForeground);

    //var platforms = this.physics.add.staticGroup();

    //platforms.create(0,window.innerHeight, 'ground').displayWidth(100).refreshBody();

  //   this.elements.children.each((element: ElementClass) => {
  //     element.addScore();
  //  }, this);

    this.input.on('drag', function (pointer: any, gameObject: { x: any; y: any; }, dragX: any, dragY: any) {
      gameObject.x = dragX;
      gameObject.y = dragY;
    });

    //acorn.setInteractive();
    //acorn.input.draggable = true;


    //this.scaleToGameW(acorn, .1);

    //this.background.displayHeight = this.sys.game.config.height as number;
    //this.background.scaleX = this.background.scaleY;

    //background.displayWidth = this.game.config.width as number;
    //background.displayHeight = this.game.config.height as number
    //background.scale = 0.5;

    //var squirrel = this.add.image(170, 330, 'squirrel').setOrigin(0, 0);
    //squirrel.scale = scaleRatio;

    //var acorn = this.add.image(500, 130, 'acorn').setOrigin(0, 0);
    //acorn.scale = scaleRatio;

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
    //this.aGrid.showNumbers();

  }

  update() {
    //this.scaleToGame(this.background, 1);
    //this.center(this.background);
    //console.log("width:" + window.innerWidth);
    //console.log("height:" + window.innerHeight);
    // console.log("device Pixel ratio:" + window.devicePixelRatio);
  }

  scaleToGame(obj: { displayWidth: number; displayHeight: number; scaleY: any; scaleX: any; }, per: number) {
    obj.displayWidth = window.innerWidth as number * per ;
    obj.displayHeight = window.innerHeight as number * per ;
    
		//obj.scaleY=obj.scaleX;
  }

  scaleToGameW(obj: { displayWidth: number; scaleY: any; scaleX: any; }, per: number) {
    obj.displayWidth = window.innerWidth as number * per;
    obj.scaleY=obj.scaleX;
  }
  
  center(obj: Phaser.GameObjects.Image) {
		obj.x = window.innerWidth as number / 2;
		obj.y = window.innerHeight as number / 2;
  }
  
  centerTop(obj: Phaser.GameObjects.Image, offSet: number = 0) {
		obj.x = window.innerWidth as number / 2;
		obj.y = 0 + (window.innerHeight * offSet);
	}

}

class AlignGrid {
  config: any;
  scene: Phaser.Scene;
  cw: number;
  ch: number;
  graphics: Phaser.GameObjects.Graphics;

	constructor(config) {
		this.config = config;
		if (!config.scene) {
			console.log("missing scene");
			return;
    }
    
		if (!config.rows) {
			config.rows=5;
    }
    
		if (!config.cols) {
			config.cols=5;
    }
    
		if (!config.height) {
			config.height = window.innerHeight;
    }
    
		if (!config.width) {
			config.width = window.innerWidth;
		}

		this.scene = config.scene;

		//cell width
		this.cw = config.width / config.cols;
		//cell height
		this.ch = config.height / config.rows;
	}

	show() {
    console.log("Show grid called !!")
		this.graphics = this.scene.add.graphics();
		this.graphics.lineStyle(2,0xff0000);

		for (var i = 0; i < this.config.width; i+=this.cw) {
      this.graphics.moveTo(i,0);
      this.graphics.lineTo(i,this.config.height);
      console.log(i + ": " + this.config.height);
		}

		for (var i = 0; i < this.config.height; i+=this.ch) {
      this.graphics.moveTo(0,i);
      this.graphics.lineTo(this.config.width,i);
		}

    this.graphics.strokePath();
    console.log("Show grid finished !!")
  }
  
	placeAt(xx,yy,obj) {
		//calc position based upon the cellwidth and cellheight
		var x2=this.cw*xx+this.cw/2;
		var y2=this.ch*yy+this.ch/2;

		obj.x=x2;
		obj.y=y2;
  }
  
	placeAtIndex(index,obj) {
		var yy=Math.floor(index/this.config.cols);
		var xx=index-(yy*this.config.cols);

		this.placeAt(xx,yy,obj);
  }
  
	showNumbers() {
	  this.show();
	  var count=0;
	  for (var i = 0; i < this.config.rows; i++) {
      for(var j=0;j<this.config.cols;j++) {

        var numText=this.scene.add.text(0,0,count.toString(),{color:'#ff0000'});
        numText.setOrigin(0.5,0.5);
        this.placeAtIndex(count,numText);
        count++;
      }
    }
	}
}

@Component({
  selector: 'app-question',
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss'],
})
export class QuestionPage implements OnInit {
  @ViewChild('mySlides', { read: IonSlides, static:false }) slides: IonSlides;
  public phaserGame: Phaser.Game;
  phaserConfig: Phaser.Types.Core.GameConfig;

  constructor(private screenOrientation: ScreenOrientation) { 
    console.log("width:" + window.innerWidth);
    console.log("height:" + window.innerHeight);
    console.log("device Pixel ratio:" + window.devicePixelRatio);
    //this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
      this.phaserConfig = {
      // width: window.innerWidth * window.devicePixelRatio,
      // height: window.innerHeight * window.devicePixelRatio,
      // width: window.innerWidth,
      // height: window.innerHeight,

      width: 812,
      height: 375,

      type: Phaser.AUTO,
      physics: {
        default: 'arcade',
        arcade: {
            //gravity: { y: 600 },
            debug: false
        }
      },
      

      //width: window.innerWidth,
      //height: window.innerHeight,
      scale: {
        parent: 'game',
        mode: Phaser.Scale.RESIZE,
        width: window.innerWidth,
        height: window.innerHeight
        //width: 800,
        //height: 600
      },

      // },
      parent: 'game',
      scene: GameScene
    };

    //this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;

    //this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }

  ngOnInit() {
    //this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    this.phaserGame = new Phaser.Game(this.phaserConfig);
  }

  swipeNext() {
    this.slides.slideNext();
  }
  swipePrevious() {
    this.slides.slidePrev();
  }
}

// class Align {
// 	static scaleToGameW(obj,per) {
// 		obj.displayWidth=game.config.width*per;
// 		obj.scaleY=obj.scaleX;
// 	}
	
// 	static centerH(obj) {
// 		obj.x=game.config.width/2-obj.displayWidth/2;
// 	}
	
// 	static centerV(obj) {
// 		obj.y=game.config.height/2-obj.displayHeight/2;
// 	}

// 	static center2(obj) {
// 		obj.x=game.config.width/2-obj.displayWidth/2;
// 		obj.y=game.config.height/2-obj.displayHeight/2;
// 	}

// 	static center(obj) {
// 		obj.x=game.config.width/2;
// 		obj.y=game.config.height/2;
// 	}
// }
