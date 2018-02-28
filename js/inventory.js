AFRAME.registerComponent('inventory', {
  schema: {
    speed: {type: 'float', default :0.1},
  },

  tick: function () {
    var sceneEl = document.querySelector('a-scene');
    var camera = sceneEl.querySelector('a-camera');
    var cameraDirection = sceneEl.querySelector('a-camera').object3D.getWorldDirection()
    var currentPos = camera.getAttribute('position');
    var rotation = this.el.getAttribute('rotation');
console.log(rotation)
    this.el.setAttribute('position', {
      x: this.el.getAttribute('position').x -(0.05 *cameraDirection.x),
      y: this.el.getAttribute('position').y,
      z: this.el.getAttribute('position').z -(0.05 *cameraDirection.z)
    })
  }
});