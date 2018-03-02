AFRAME.registerComponent('fly', {
  dependencies: ['material'],

  init: function () {
    var el = this.el;  // <a-box>
    var sceneEl = document.querySelector('a-scene');
    var cursor = sceneEl.querySelector('a-cursor');
    var camera = sceneEl.querySelector('a-camera');
    var menu = sceneEl.querySelector('#menu');
    var timer;
    
    el.addEventListener('mouseenter', function () {
      timer = setTimeout(function(){
          console.log('Fly mod')
          camera.removeAttribute('intersection-spawn');
          camera.removeAttribute('wasd-controls');
          camera.removeAttribute('move_camera_forward');
          camera.setAttribute('fly_forward','');
          menu.setAttribute('inventory','');
        }, 500);
    })
    el.addEventListener('mouseleave', function () {
        clearTimeout(timer);
    });
  }
});