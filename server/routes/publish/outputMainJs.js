
const fs = require('fs-extra');
const { join } = require('node:path');
const UglifyJS = require("uglify-js");

// 创建main.js
module.exports = async (projectName, options) => {
  const mainStr = `
'use strict';

window.addEventListener('load', async () => {
  class Preloader {
    constructor(canvas) {
      this._container = canvas.parentElement;
      this._canvas = canvas;
      this._bar = document.createElement("div");
      this._logo = document.createElement("div");
      this._logoCont = document.createElement("div");
      this._background = document.createElement("div");
  
      const canvasPositioning = window.getComputedStyle(this._canvas).position;
      // bar
      this._bar.setAttribute("class", "preloader-bar");
      // logo
      this._logo.setAttribute("class", "preloader-logo");
      // logo container
      this._logoCont.setAttribute("id", "preloader_container");
      this._logoCont.setAttribute("class", "preloader-container");
      // background
      this._background.setAttribute("class", "preloader-background");
      this._background.style.position = canvasPositioning === "fixed" ? "fixed" : "absolute";
  
      this._background.appendChild(this._logoCont);
      this._logoCont.appendChild(this._logo);
      this._logoCont.appendChild(this._bar);
    }
  
    start() {
      this._container.appendChild(this._background);
    }
  
    update(percentage) {
      this._bar.style.width = percentage + '%';
    }
  
    finish() {
      this._background.classList.add('fade');
      setTimeout(() => {
        this._background && this._background.parentElement && this._background.parentElement.removeChild(this._background);
      }, 1000);
    }
  }
  
  class App {
    constructor(canvas) {
      this.canvas = canvas ? (typeof canvas === "string" ? document.getElementById(canvas) : canvas) : null;
      this.engine = null;
      this.scene = null;
      this.overlayScene = null;
      this.overlaySceneEnabled = true;
      this.camera = null;
      this.env = null;
      this.defautlMaterial = null;
      this.assetsManager = null;
      this.preloader = null;
      this.fps = null;
      this.running = false;
      this._glob = {};
      this.glob = {};
    }
    setup() {
      if (!this.canvas) {
        document.body.style.width = "100%";
        document.body.style.height = "100%";
        document.body.style.margin = "0";
        document.body.style.padding = "0";
        const div = document.createElement("div");
        div.style.width = "100%";
        div.style.height = "100%";
        document.body.appendChild(div);
  
        const canvas = document.createElement("canvas");
        canvas.id = "renderCanvas";
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.style.display = "block";
        div.appendChild(canvas);
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        this.canvas = canvas;
      }
  
      this.engine = new BABYLON.Engine(this.canvas, true, { stencil: true });
      this.scene = new BABYLON.Scene(this.engine);
      this.scene.environmentTexture = BABYLON.CubeTexture.CreateFromPrefilteredData('assets/texture/environment.dds', this.scene);
  
      this.env = this.scene.createDefaultEnvironment({
        environmentTexture: 'assets/texture/environmentSpecular.env',
        skyboxTexture: 'assets/texture/backgroundSkybox.dds',
        groundTexture: 'assets/texture/backgroundGround.png'
      });
  
      // default camera
      this.camera = new BABYLON.ArcRotateCamera("defaultCamera", -Math.PI / 2, Math.PI / 3, 10, BABYLON.Vector3.Zero(), this.scene);
      this.camera.lowerRadiusLimit = 1;
      this.camera.wheelPrecision = 24;
      this.camera.attachControl(this.canvas);
      this.scene.activeCamera = this.camera;
      // default material
      this.defautlMaterial = new BABYLON.PBRMaterial('defaultMaterial', this.scene);
      this.defautlMaterial.roughness = 1;
  
      window.addEventListener("resize", this.resize);
      return this;
    }
  
    resize = () => this.engine.resize();
    beforeRun() { };
    run() {
      this.beforeRun && this.beforeRun();
      this.engine.runRenderLoop(() => this.scene.render());
      this.running = true;
    }
  
    stop() {
      this.running && this.engine.stopRenderLoop();
      this.running = false;
    }
    getFps() {
      return this.engine.getFps().toFixed();
    }
    dispose() {
      window.removeEventListener("resize", this._resize);
      this.engine.dispose();
    }
  }
  
  class Fps {
    constructor(time) {
      this.elapsed = time;
      this.previousTime = 0;
      const _this = this;
      window.requestAnimationFrame(animate);
  
      function animate() {
        if (_this.elapsed < (Date.now() - _this.previousTime)) {
          _this.previousTime = Date.now();
          _this.onChange && _this.onChange();
        }
        window.requestAnimationFrame(animate);
      }
    }
    onChange() { }
  }

  let appInstance;
  BABYLON.apps = [];
  BABYLON.Preloader = Preloader;
  appInstance = new App('renderCanvas').setup();
  BABYLON.apps.push(appInstance);
  await BABYLON.Tools.LoadScriptAsync('./assets/js/visual_logic.js');
  appInstance.run();
});
`
  const mainDir = join(process.env.PROJECTS_FOLDER, `${projectName}/assets/js/main.js`);
  try {
    if (options.enableMinifyJSFile) {
      const mainStrMin = UglifyJS.minify(mainStr);
      return await fs.outputFile(mainDir, mainStrMin.code);
    } else {
      return await fs.outputFile(mainDir, mainStr);
    }
  } catch (e) {
    console.log(e);
  }
}

