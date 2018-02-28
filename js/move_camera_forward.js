AFRAME.registerComponent('move_camera_forward', {
  schema: {
    speed: {type: 'float', default :0.1},
  },

  tick: function () {
    var currentPos= this.el.getAttribute('position');
    var sceneEl = document.querySelector('a-scene');
    var cursor = sceneEl.querySelector('a-cursor');
    var camera = sceneEl.querySelector('a-camera');
    var cameraDirection = sceneEl.querySelector('a-camera').object3D.getWorldDirection()

    this.el.setAttribute('position', {
      x: currentPos.x + -(0.05 *cameraDirection.x),
      y: currentPos.y,
      z: currentPos.z + -(0.05 *cameraDirection.z)
    })
  }
});