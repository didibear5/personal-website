import React, {useState, useEffect, useRef } from 'react';
import * as PIXI from 'pixi.js'
import { gsap } from "gsap";

const Pixi = (props) => {

  useEffect(() => {
    console.log('support WebGL:', PIXI.utils.isWebGLSupported())
    if (PIXI.utils.isWebGLSupported()) {
      initFn();
    }
    return () => {};
  }, []);

  const canvasDemo1 = useRef(null);

  const [pixiObj, setPixiObj] = useState(null);
  const initFn = () => {
    console.log('PIXI:', PIXI);
    console.log('canvasDemo1:',canvasDemo1.current)
    const app = new PIXI.Application({
      width: 1000,  // default: 800 宽度
      height: 500,  // default: 800 宽度
      antialias: true, //  default: false 反锯齿  使得字体的边界和图形更加平滑
      // backgroundAlpha: true, // 透明度
      resolution: 1, // default: 1 分辨率  不同屏幕和分辨率适配
      backgroundColor: 0xadeeda
    });
    setPixiObj(app);
    if (!pixiObj) {
      canvasDemo1.current.appendChild(app.view);
    }
    case1(app);
  }

  function case1(app) {
    var tk = 0;


    var bearContainer = new PIXI.Container();
    app.stage.addChild(bearContainer);

    var faceGraphic = new PIXI.Graphics;
    bearContainer.addChild(faceGraphic);

    app.stage.x = app.renderer.width * 0.5;
    app.stage.y = app.renderer.height * 0.5;

    var eyeGraphic = new PIXI.Graphics();
    bearContainer.addChild(eyeGraphic);
    eyeGraphic.beginFill(0x000000, 1);
    eyeGraphic.drawCircle(-70, -5, 10);
    eyeGraphic.drawCircle(70, -5, 10);
    eyeGraphic.scale.y = 1;
    // eyeGraphic.visible = false;


    var tearGraphic = new PIXI.Graphics();
    bearContainer.addChild(tearGraphic);
    tearGraphic.beginFill(0x53caf6)
    // tearGraphic.drawCircle()
    tearGraphic.drawCircle(75, 10, 8);
    tearGraphic.drawCircle(-75, 10, 8);
    tearGraphic.visible = false;

    var cryGraphic = new PIXI.Graphics();
    bearContainer.addChild(cryGraphic);
    // cryGraphic.lineStyle(10, 0x000000, 1);
    // cryGraphic.moveTo(-77, 0);
    // cryGraphic.lineTo(-60, -2);
    // cryGraphic.moveTo(60, -2);
    // cryGraphic.lineTo(77, 0);
    cryGraphic.beginFill(0x000000, 1);
    cryGraphic.drawCircle(-70, -5, 10);
    cryGraphic.drawCircle(70, -5, 10);
    cryGraphic.scale.y = 0.7;
    cryGraphic.visible = false;

    var noseGraphic = new PIXI.Graphics();
    var _noseGraphic = new PIXI.Graphics();
    bearContainer.addChild(_noseGraphic);
    bearContainer.addChild(noseGraphic);
    // _noseGraphic.lineStyle(2, 0x000000, 1);
    _noseGraphic.beginFill(0xffffff, 1);
    _noseGraphic.drawEllipse(0, 0, 50, 30);
    noseGraphic.beginFill(0x000000, 1);
    noseGraphic.drawCircle(0, -20, 7);
    noseGraphic.scale.y = 0.5;

    var topEarsBackGraphic = new PIXI.Graphics();
    bearContainer.addChild(topEarsBackGraphic);
    topEarsBackGraphic.beginFill(0x6e97d1, 1);
    topEarsBackGraphic.drawCircle(-95, -99, 35);
    topEarsBackGraphic.drawCircle( 95, -99, 35);
    topEarsBackGraphic.scale.y = 0.9;


    var topEarsFrontGraphic = new PIXI.Graphics();
    bearContainer.addChildAt(topEarsFrontGraphic, 0);
    // topEarsFrontGraphic.lineStyle(20, 0x000000, .75);
    topEarsFrontGraphic.lineStyle(20, 0x000000);
    topEarsFrontGraphic.drawCircle(-95, -99, 35);
    topEarsFrontGraphic.drawCircle( 95, -99, 35);
    topEarsFrontGraphic.scale.y = 0.9;

    var mouseSpriteL = new PIXI.Graphics();
    app.stage.addChild(mouseSpriteL);
    mouseSpriteL.beginFill(0xff0000, 1);
    mouseSpriteL.drawCircle(0, 0, 60);
    mouseSpriteL.endFill();
    mouseSpriteL.alpha = 0;
    mouseSpriteL.x = mouseSpriteL.defaultX = -150; // -100
    mouseSpriteL.y = mouseSpriteL.defaultY = 30;
    mouseSpriteL.maxX = -100;
    mouseSpriteL.minX = -400;

    var mouseSpriteR = new PIXI.Graphics();
    app.stage.addChild(mouseSpriteR);
    mouseSpriteR.beginFill(0xff0000, 1);
    mouseSpriteR.drawCircle(0, 0, 60);
    mouseSpriteR.endFill();
    mouseSpriteR.alpha = 0;
    mouseSpriteR.x = mouseSpriteR.defaultX = 150; // -100
    mouseSpriteR.y = mouseSpriteR.defaultY = 30;
    mouseSpriteL.maxX = 100;
    mouseSpriteL.minX = 400;

    mouseSpriteL.interactive = mouseSpriteL.buttonMode = true;
    mouseSpriteL.on('pointerdown', onDragStart)
            .on('pointerup', onDragEnd)
            .on('pointerupoutside', onDragEnd)
            .on('pointermove', onDragMove);

    mouseSpriteR.interactive = mouseSpriteR.buttonMode = true;
    mouseSpriteR.on('pointerdown', onDragStart)
            .on('pointerup', onDragEnd)
            .on('pointerupoutside', onDragEnd)
            .on('pointermove', onDragMove);



    function onDragStart(e){
      // console.log('onDragStart');
      // console.log(e);

      this.data = e.data;
      this.alpha = 0.3;
      this.dragging = true;
      eyeGraphic.visible = false;
      cryGraphic.visible = true;
      tearGraphic.visible = true;
    }

    function onDragEnd(e) {
      // console.log('onDragEnd');
      console.log(e, this);

      this.alpha = 0;

      if(e){
        this.dragging = false;
        this.data = null;
        gsap.to(this, 0.35, {delay:0, x: this.defaultX, y:this.defaultY });

        eyeGraphic.visible = true;
        cryGraphic.visible = false;
        tearGraphic.visible = false;
      }else{
        this.dragging = false;
        this.data = null;
      }
    }

    function onDragMove(e) {
        if (this.dragging == true) {
          // console.log('onDragMove');
          // console.log(e);

          var newPosition = this.data.getLocalPosition(this.parent);
          this.x = newPosition.x;
          this.y = newPosition.y;


          // console.log(newPosition.x + ' '+ newPosition.y);
          // console.log(this.x + ' '+ this.y);
          // console.log(this.maxX + ' '+ this.minX);

          if( this.x > this.maxX){
            this.dragging = false;
            this.data = null;
            onDragEnd(null);
            gsap.to(this, 0.35, {delay:0, x: this.defaultX, y:this.defaultY});

            eyeGraphic.visible = true;
            cryGraphic.visible = false;
            tearGraphic.visible = false;
          }
          if( this.x < this.minX){
            this.dragging = false;
            this.data = null;
            onDragEnd(null);
            gsap.to(this, 0.35, {delay:0, x: this.defaultX, y:this.defaultY});

            eyeGraphic.visible = true;
            cryGraphic.visible = false;
            tearGraphic.visible = false;
          }

        }
    }

    app.ticker.add(function(delta) {
      tk += 1;
      // console.log(tk);
      // console.log(Math.sin(tk * (Math.PI / 180)));
      
      var tmpPg = Math.sin(tk * (Math.PI / 180));
      faceGraphic.clear();
      faceGraphic.lineStyle(10, 0x000000);
      faceGraphic.beginFill(0x6e97d1, 1);
      faceGraphic.moveTo(-100, -90);
      // faceGraphic.lineTo( 100, -100);

      /* 頭頂 */
      faceGraphic.quadraticCurveTo(0, -120, 90, -90);
      
      /*
      faceGraphic.quadraticCurveTo(
        100 + tmpPg * 100 + 20,
        0 + 30,
        100,
        100
      );
      */
      faceGraphic.quadraticCurveTo(
        50 + mouseSpriteR.x,
        0 + 40 + ((mouseSpriteR.y - 30) / (app.renderer.height * 0.5)) * 100,
        100,
        80
      );

      faceGraphic.quadraticCurveTo(
        0,
        110,
       -100,
       80
      );
      // faceGraphic.lineTo(-100, 100);

      /*
      faceGraphic.quadraticCurveTo(
        -100 + tmpPg * -100 - 20,
        0 + 30,
        -100,
        -100
      );
      */
      faceGraphic.quadraticCurveTo(
        -50 + mouseSpriteL.x,
        0 + 40 + ((mouseSpriteL.y - 30) / (app.renderer.height * 0.5)) * 100,
        -100,
        -100
      );


    });
    window.onresize = function (event){
      // var w = window.innerWidth;
      // var h = window.innerHeight;
      var w = 1200;
      var h = 600;

      app.view.style.width = w + "px";
      app.view.style.height = h + "px";
      app.renderer.resize(w,h);

      app.stage.position.x = app.renderer.width * .5 - 300;
      app.stage.position.y = app.renderer.height * .5 - 250;

      if(mouseSpriteL){
      mouseSpriteL.maxX = -100;
      mouseSpriteL.minX = -400;
      }

      if(mouseSpriteR){
      mouseSpriteR.maxX = 400;
      mouseSpriteR.minX = 100;
      }

    };

    // onresize();
  }


  return (
    <div>
      <div ref={canvasDemo1}></div>
   </div>
  );
};

export default Pixi;
