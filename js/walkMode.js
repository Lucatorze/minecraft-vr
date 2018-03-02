AFRAME.registerComponent('walk', {
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
    var timer;
    
    el.addEventListener('mouseenter', function () {
      timer = setTimeout(function(){
        console.log('Walk mod')
        cursor.removeAttribute('intersection-spawn');
        camera.removeAttribute('wasd-controls');
        camera.removeAttribute('fly_forward');
        camera.setAttribute('move_camera_forward','');
        menu.setAttribute('inventory','');
        edit.setAttribute('inventory','');
        fly.setAttribute('inventory','');
        }, 1000);
    })
    el.addEventListener('mouseleave', function () {
        clearTimeout(timer);
    });
  }
});