AFRAME.registerComponent('inventory', {
  schema: {
    speed: {type: 'float', default :0.1},
  },

  tick: function () {
    var sceneEl = document.querySelector('a-scene');
    var camera = sceneEl.querySelector('a-camera');
    var cameraDirection = sceneEl.querySelector('a-camera').object3D.getWorldDirection()
    var currentPos= camera.getAttribute('position');

    this.el.setAttribute('position', {
      x: currentPos.x + -(0.05 *cameraDirection.x),
      y: currentPos.y + -(0.05 *cameraDirection.y),
      z: (currentPos.z + 1.1) + -(0.05 *cameraDirection.z)
    })
  }
});