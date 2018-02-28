AFRAME.registerComponent('walk', {
  dependencies: ['material'],

  init: function () {
    var el = this.el;  // <a-box>
    var sceneEl = document.querySelector('a-scene');
    var cursor = sceneEl.querySelector('a-cursor');
    var camera = sceneEl.querySelector('a-camera');
    var timer;
    el.addEventListener('mouseenter', function () {
        timer = setTimeout(function(){
            console.log('walk mod')
            cursor.removeAttribute('intersection-spawn');
            camera.setAttribute('inifite-foward');
        }, 1000);
    })
    el.addEventListener('mouseleave', function () {
        clearTimeout(timer);
    });
  }
});