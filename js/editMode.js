AFRAME.registerComponent('edit', {
  dependencies: ['material'],

  init: function () {
    var el = this.el;  // <a-box>
    var sceneEl = document.querySelector('a-scene');
    var cursor = sceneEl.querySelector('a-cursor');
    var camera = sceneEl.querySelector('[camera]');
    var menu = sceneEl.querySelector('#menu');
    var walk = sceneEl.querySelector('#walk');
    var edit = sceneEl.querySelector('#edit');
    
    el.addEventListener('mouseenter', function () {
            console.log('Edit mod')
            cursor.setAttribute('intersection-spawn', {
              event: 'click',
              mixin: 'voxel',
            });
          camera.removeAttribute('move_camera_forward');
      menu.removeAttribute('inventory');
      walk.removeAttribute('inventory');
      edit.removeAttribute('inventory');
    })
  }
});