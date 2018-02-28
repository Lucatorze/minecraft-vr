AFRAME.registerComponent('edit', {
  dependencies: ['material'],

  init: function () {
    var el = this.el;  // <a-box>
    var sceneEl = document.querySelector('a-scene');
    var cursor = sceneEl.querySelector('a-cursor');
    var camera = sceneEl.querySelector('[camera]');
    var timer;
    el.addEventListener('mouseenter', function () {
        timer = setTimeout(function(){
            console.log('Edit mod')
            cursor.setAttribute('intersection-spawn', {
              event: 'click',
              mixin: 'voxel',
            });
          camera.removeAttribute('inifite-foward');
        }, 1000);
    })
    el.addEventListener('mouseleave', function () {
        clearTimeout(timer);
    });
  }
});