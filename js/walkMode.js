AFRAME.registerComponent('walk', {
  dependencies: ['material'],

  init: function () {
    var el = this.el;  // <a-box>
    var sceneEl = document.querySelector('a-scene');
    var cursor = sceneEl.querySelector('a-cursor');
    var camera = sceneEl.querySelector('a-camera');
    el.addEventListener('mouseenter', function () {
        console.log('Walk mod')
        cursor.removeAttribute('intersection-spawn');
        camera.removeAttribute('wasd-controls');
        camera.setAttribute('move_camera_forward','');
    })
  }
});