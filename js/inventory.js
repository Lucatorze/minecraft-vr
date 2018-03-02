AFRAME.registerComponent('inventory', {
  schema: {
    speed: {type: 'float', default :0.05},
  },
  
  init: function () {
    var sceneEl = document.querySelector('a-scene');
    var camera = sceneEl.querySelector('a-camera');
    var currentPos = camera.getAttribute('position');
    var pos = this.el.getAttribute('position')
    
    this.dx = (pos.x - currentPos.x)
    this.dy = (pos.y - currentPos.y) 
    this.dz = (pos.z - currentPos.z)
    
    console.log(this.el)
    console.log(this.dx + ' ' + this.dy + ' ' + this.dz)

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
      x: (currentPos.x + this.dx * Math.sin(((rotationCam.y - rotationEl.y)  - 180) * (Math.PI / 180)))-30,
      y: currentPos.y + this.dy,
      z: (currentPos.z + this.dz * Math.cos(((rotationCam.y - rotationEl.y)  - 180) * (Math.PI / 180)))-30,
    })
    
  }
});