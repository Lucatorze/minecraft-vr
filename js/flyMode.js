AFRAME.registerComponent('fly', {
  dependencies: ['material'],

  init: function () {
    var el = this.el;  // <a-box>
    var sceneEl = document.querySelector('a-scene');
    var cursor = sceneEl.querySelector('a-cursor');
    var camera = sceneEl.querySelector('a-camera');
    var menu = sceneEl.querySelector('#menu');
    var walk = sceneEl.querySelector('#walk');
    var edit = sceneEl.querySelector('#edit');
    var fly = sceneEl.querySelector('#fly');
    
    el.addEventListener('mouseenter', function () {
          console.log('Fly mod')
          camera.removeAttribute('intersection-spawn');
          camera.removeAttribute('wasd-controls');
          camera.removeAttribute('move_camera_forward');
          camera.setAttribute('fly_forward','');
          menu.setAttribute('inventory','');
          walk.setAttribute('inventory','');
          edit.setAttribute('inventory','');
          fly.setAttribute('inventory','');
    })
  }
});