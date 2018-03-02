AFRAME.registerComponent('inventory', {
  schema: {
    speed: {type: 'float', default :0.05},
  },
  
  init: function () {
    var sceneEl = document.querySelector('a-scene');
    var camera = sceneEl.querySelector('a-camera');
    var currentPos = camera.getAttribute('position');
    var pos = this.el.getAttribute('position')
    
    this.dz = (currentPos.z  - pos.z)
  },

  tick: function () {
    var sceneEl = document.querySelector('a-scene');
    var camera = sceneEl.querySelector('a-camera');
    var cameraDirection = sceneEl.querySelector('a-camera').object3D.getWorldDirection()
    var currentPos = camera.getAttribute('position');
    var rotationCam = camera.getAttribute('rotation');
    var rotationEl = this.el.getAttribute('rotation');
    var pos = this.el.getAttribute('position')
    var menu = this.el.object3D;
    
    this.el.setAttribute('position', {
      x: currentPos.x + this.dz * Math.sin(((rotationCam.y )  - 180) * (Math.PI / 180)),
      y: pos.y,
      z: currentPos.z + this.dz * Math.cos(((rotationCam.y )  - 180) * (Math.PI / 180)),
    })
    
    this.el.setAttribute('rotation', {
      x: rotationEl.x,
      y: rotationCam.y,
      z: rotationCam.z,
    })
    
  }
});