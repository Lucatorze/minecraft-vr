AFRAME.registerComponent('inventory', {
  schema: {
    speed: {type: 'float', default :0.05},
  },

  tick: function () {
    var sceneEl = document.querySelector('a-scene');
    var camera = sceneEl.querySelector('a-camera');
    var cameraDirection = sceneEl.querySelector('a-camera').object3D.getWorldDirection()
    var currentPos = camera.getAttribute('position');
    var rotation = camera.getAttribute('rotation');
    var pos = this.el.getAttribute('position')
    
    var menu = this.el.object3D;
    let newPosDict = {
        x: pos.x + this.data.speed * Math.sin((rotation.y - 180) * (Math.PI / 180)),
        y: pos.y + this.data.speed * Math.tan((rotation.x - 180) * (Math.PI / 180)),
        z: pos.z + this.data.speed * Math.cos((rotation.y - 180) * (Math.PI / 180)),
    }
    this.el.setAttribute('position', {
      x: pos.x + this.data.speed * Math.sin((rotation.y - 180) * (Math.PI / 180)),
      y: pos.y,
      z: pos.z + this.data.speed * Math.cos((rotation.y - 180) * (Math.PI / 180)),
    })
    
  }
});