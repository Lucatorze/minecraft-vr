AFRAME.registerComponent('inventory', {
  schema: {
    speed: {type: 'float', default :0.05},
    dx : {type: 'float'},
    dy : {type: 'float'},
    dz : {type: 'float'},
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
    let newPosDict = {
        x: pos.x + this.data.speed * Math.sin((rotationCam.y - 180) * (Math.PI / 180)),
        y: pos.y + this.data.speed * Math.tan((rotationCam.x - 180) * (Math.PI / 180)),
        z: pos.z + this.data.speed * Math.cos((rotationCam.y - 180) * (Math.PI / 180)),
    }
    this.el.setAttribute('position', {
      x: currentPos.x + this.data.dx * Math.sin(((rotationCam.y + rotationEl.y)  - 180) * (Math.PI / 180)),
      y: currentPos.y + this.data.dy,
      z: currentPos.z + this.data.dz * Math.cos(((rotationCam.y + rotationEl.y)  - 180) * (Math.PI / 180)),
    })
    
  }
});