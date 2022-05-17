import { JavaScript } from 'blockly';

JavaScript['app_get_fps'] = block => {
  return [`appInstance.engine.getFps()`, JavaScript.ORDER_FUNCTION_CALL]
}

JavaScript['display_axes'] = block => {
  const size = JavaScript.valueToCode(block, "SIZE", JavaScript.ORDER_NONE) || `\'\'`;
  const parent = JavaScript.valueToCode(block, "PARENT", JavaScript.ORDER_NONE) || `\'\'`;

  const fun = JavaScript.provideFunction_('display_axes', [`
  // display_axes block
  function ${JavaScript.FUNCTION_NAME_PLACEHOLDER_}(size, parent) { 
    const axes = new BABYLON.AxesViewer(appInstance.scene, size);
    if(parent) {
      axes.xAxis.parent = parent;
      axes.yAxis.parent = parent;
      axes.zAxis.parent = parent;
    }
  }
     `]);
  return `
  ${fun}(${size}, ${parent});`
}

JavaScript['display_vertex_normal'] = block => {
  const mesh = JavaScript.valueToCode(block, "MESH", JavaScript.ORDER_NONE) || `\'\'`;
  const size = JavaScript.valueToCode(block, "SIZE", JavaScript.ORDER_NONE) || `\'\'`;
  const color = JavaScript.valueToCode(block, "COLOR", JavaScript.ORDER_NONE) || `\'\'`;

  const fun = JavaScript.provideFunction_('display_vertex_normal', [`
  // display_vertex_normal block
  function ${JavaScript.FUNCTION_NAME_PLACEHOLDER_}(mesh, size, color) { 
    if(!mesh) return;
    const normals = mesh.getVerticesData(BABYLON.VertexBuffer.NormalKind);
    const positions = mesh.getVerticesData(BABYLON.VertexBuffer.PositionKind);
    color = color || BABYLON.Color3.White();

    const lines = [];
    for (let i = 0; i < normals.length; i += 3) {
      const v1 = BABYLON.Vector3.FromArray(positions, i);
      const v2 = v1.add(BABYLON.Vector3.FromArray(normals, i).scaleInPlace(size));
      lines.push([v1.add(mesh.position), v2.add(mesh.position)]);
    }
    const normalLines = BABYLON.MeshBuilder.CreateLineSystem("normalLines", { lines: lines }, appInstance.scene);
    normalLines.color = color;
  }
     `]);
  return `
  ${fun}(${mesh}, ${size}, ${color});`
}

JavaScript['display_face_normal'] = block => {
  const mesh = JavaScript.valueToCode(block, "MESH", JavaScript.ORDER_NONE) || `\'\'`;
  const size = JavaScript.valueToCode(block, "SIZE", JavaScript.ORDER_NONE) || `\'\'`;
  const color = JavaScript.valueToCode(block, "COLOR", JavaScript.ORDER_NONE) || `\'\'`;
  const fun = JavaScript.provideFunction_('display_face_normal', [`
  // display_face_normal block
  function ${JavaScript.FUNCTION_NAME_PLACEHOLDER_}(mesh, size, color) { 
    if(!mesh) return;
    mesh.updateFacetData();
    const positions = mesh.getFacetLocalPositions();
    const normals = mesh.getFacetLocalNormals();

    const lines = [];
    for (let i = 0; i < positions.length; i++) {
        const line = [ positions[i], positions[i].add(normals[i]).scale(size) ];
        lines.push(line);
    }
    const lineSystem = BABYLON.MeshBuilder.CreateLineSystem("ls", {lines: lines}, appInstance.scene);
    lineSystem.color = color;
    lineSystem.parent = mesh;
  }
     `]);
  return `
  ${fun}(${mesh}, ${size}, ${color});`
}

JavaScript['feature_available'] = block => {
  const feature = `\'${block.getFieldValue('FEATURE')}\'`
  const fun = JavaScript.provideFunction_('feature_available', [`
  const Detector = {
    checkWebGL: function () {
      try {
        const e = document.createElement("canvas");
        return !(!window.WebGLRenderingContext || !e.getContext("webgl") && !e.getContext("experimental-webgl"))
      } catch (e) {
        return !1
      }
    },
    checkWebGL2: function () {
      try {
        const e = document.createElement("canvas");
        return !(!window.WebGL2RenderingContext || !e.getContext("webgl2"))
      } catch (e) {
        return !1
      }
    },
    checkWorkers: function () {
      return !!window.Worker
    },
    checkFileAPI: function () {
      return window.File && window.FileReader && window.FileList && window.Blob
    },
    genWebGLErrorMessage: function () {
      const e = document.createElement("div");
      return e.innerHTML = window.WebGLRenderingContext ? "显卡不支持WebGL.<br/>" : "浏览器不支持WebGL"
    },
    showWebGLErrorMessage: function (e) {
      (e = e || document.body).appendChild(Detector.genWebGLErrorMessage());
      const t = document.getElementById("v3d_preloader_container");
      t && (t.style.visibility = "hidden")
    },
    checkIOS: function () {
      return (/iPad|iPhone|iPod/.test(navigator.platform) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1) && !window.MSStream
    },
    checkAndroid: function () {
      return !!navigator.userAgent.match(/Android/i)
    },
    checkSafari: function () {
      return /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)
    },
    checkFloatTex: function (e, t) {
      const n = e.getContext();
      return !(!e.capabilities.isWebGL2 || !n.getExtension("EXT_color_buffer_float") || t && !n.getExtension("OES_texture_float_linear")) || !(e.capabilities.isWebGL2 || !n.getExtension("OES_texture_float") || t && !n.getExtension("OES_texture_float_linear"))
    },
    checkHalfFloatTex: function (e, t) {
      const n = e.getContext();
      return !(!e.capabilities.isWebGL2 || !n.getExtension("EXT_color_buffer_float")) || !(e.capabilities.isWebGL2 || !n.getExtension("OES_texture_half_float") || t && !n.getExtension("OES_texture_half_float_linear"))
    },
    checkHalfFloatReadPixels: function (e) {
      const t = e.getContext(),
        n = e.capabilities;
      return !/Firefox/.test(navigator.userAgent) && !!(t.getExtension("EXT_color_buffer_half_float") || n.isWebGL2 && t.getExtension("EXT_color_buffer_float"))
    },
    checkFloatReadPixels: function (e) {
      const t = e.getContext();
      return !!(e.capabilities.isWebGL2 || t.getExtension("OES_texture_float") || t.getExtension("WEBGL_color_buffer_float"))
    },
    checkDepthTex: function (e) {
      const t = e.getContext();
      return !(!e.capabilities.isWebGL2 && !t.getExtension("WEBGL_depth_texture"))
    },
    getGPUVendor: function (e) {
      const t = e ? e.getContext() : document.createElement("canvas").getContext("webgl") || document.createElement("canvas").getContext("experimental-webgl"),
        n = t.getExtension("WEBGL_debug_renderer_info");
      return null != n ? t.getParameter(n.UNMASKED_VENDOR_WEBGL) : ""
    },
    getGPUModel: function (e) {
      const t = e ? e.getContext() : document.createElement("canvas").getContext("webgl") || document.createElement("canvas").getContext("experimental-webgl"),
        n = t.getExtension("WEBGL_debug_renderer_info");
      return null != n ? t.getParameter(n.UNMASKED_RENDERER_WEBGL) : ""
    },
    checkWebXR: function (e, t, n) {
      "xr" in navigator && navigator.xr.isSessionSupported ? navigator.xr.isSessionSupported(e).then((function (e) {
        e ? t() : n()
      })).catch(n) : n()
    },
    checkNativeWebXR: function () {
      return !1
    },
    checkCardboard: function () {
      return !1
    },
    checkSwiftShader: function (e) {
      return "Google SwiftShader" == this.getGPUModel(e)
    },
    checkWebAudio: function () {
      return void 0 !== (window.AudioContext || window.webkitAudioContext)
    },
    isSafariWithMultisamplingBug: function () {
      if (!this.checkSafari()) return !1;
      const e = navigator.userAgent;
      return e.match("Version/15.4") || e.match("Version/15.5") || e.match(/CPU (OS|iPhone OS) (15_4|15_5) like Mac OS X/)
    }
  }
  // feature_available block
  function ${JavaScript.FUNCTION_NAME_PLACEHOLDER_}(feature) {
    var userAgent = window.navigator.userAgent;
    var platform = window.navigator.platform;
    switch (feature) {
      case 'LINUX':
          return /Linux/.test(platform);
      case 'WINDOWS':
          return ['Win32', 'Win64', 'Windows', 'WinCE'].indexOf(platform) !== -1;
      case 'MACOS':
          return (['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'].indexOf(platform) !== -1 && !Detector.checkIOS());
      case 'IOS':
          return Detector.checkIOS();
      case 'ANDROID':
          return /Android/i.test(userAgent);
      case 'MOBILE':
          return (/Android|webOS|BlackBerry/i.test(userAgent) || Detector.checkIOS());
  
      case 'CHROME':
          // Chromium based
          return (!!window.chrome && !/Edge/.test(navigator.userAgent));
      case 'FIREFOX':
          return /Firefox/.test(navigator.userAgent);
      case 'IE':
          return /Trident/.test(navigator.userAgent);
      case 'EDGE':
          return /Edge/.test(navigator.userAgent);
      case 'SAFARI':
          return (/Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent));
  
      case 'TOUCH':
          return !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
      case 'RETINA':
          return window.devicePixelRatio >= 2;
      case 'WEBAUDIO':
          return Detector.checkWebAudio();
      case 'WEBGL2':
          var canvas = document.createElement('canvas');
          var gl = canvas.getContext('webgl2')
          return !!gl;
      case 'DO_NOT_TRACK':
          if (navigator.doNotTrack == '1' || window.doNotTrack == '1')
              return true;
          else
              return false;
      default:
          return false;
      }
  }
  `])
  return [`${fun}(${feature})`, JavaScript.ORDER_FUNCTION_CALL]
}
