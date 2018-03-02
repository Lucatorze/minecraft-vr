//BLOCK MENU

AFRAME.registerComponent('menu', {
  schema: {
    speed: {type: 'float', default :0.05},
  },
  
  init: function () {
    this.dz = (document.querySelector('a-scene').querySelector('a-camera').getAttribute('position').z  - this.el.getAttribute('position').z)
  },

  tick: function () {
    var sceneEl = document.querySelector('a-scene');
    var camera = sceneEl.querySelector('a-camera');
    var currentPos = camera.getAttribute('position');
    var rotationCam = camera.getAttribute('rotation');
    var rotationEl = this.el.getAttribute('rotation');
    var pos = this.el.getAttribute('position')
    
    this.el.setAttribute('position', {
      x: currentPos.x + this.dz * Math.sin(((rotationCam.y )  - 180) * (Math.PI / 180)),
      y: pos.y,
      z: currentPos.z + this.dz * Math.cos(((rotationCam.y )  - 180) * (Math.PI / 180)),
    })
    
    this.el.setAttribute('rotation', {
      x: rotationEl.x,
      y: rotationCam.y,
      z: rotationCam.z,
    })
    
  }
});

//WALK MOD

AFRAME.registerComponent('walk', {
  dependencies: ['material'],

  init: function () {
    var el = this.el;  // <a-box>
    var sceneEl = document.querySelector('a-scene');
    var cursor = sceneEl.querySelector('a-cursor');
    var camera = sceneEl.querySelector('a-camera');
    var menu = sceneEl.querySelector('#menu');
    var blocs = sceneEl.querySelectorAll('a-mixin');
    var timer;
    
    el.addEventListener('mouseenter', function () {
      timer = setTimeout(function(){
        console.log('Walk mod')
        cursor.removeAttribute('intersection-spawn');
        camera.removeAttribute('wasd-controls');
        camera.removeAttribute('fly_forward');
        camera.setAttribute('move_camera_forward','');
        menu.setAttribute('menu','');
        for(var i=0; i<blocs.length;i++){
            blocs[i].removeAttribute('random-texture');
          }
        }, 500);
    })
    el.addEventListener('mouseleave', function () {
        clearTimeout(timer);
    });
  }
});

//FLY MOD

AFRAME.registerComponent('fly', {
  dependencies: ['material'],

  init: function () {
    var el = this.el;  // <a-box>
    var sceneEl = document.querySelector('a-scene');
    var cursor = sceneEl.querySelector('a-cursor');
    var camera = sceneEl.querySelector('a-camera');
    var menu = sceneEl.querySelector('#menu');
    var timer;
    var blocs = sceneEl.querySelectorAll('a-mixin');
    
    el.addEventListener('mouseenter', function () {
      timer = setTimeout(function(){
          console.log('Fly mod')
          camera.removeAttribute('intersection-spawn');
          camera.removeAttribute('wasd-controls');
          camera.removeAttribute('move_camera_forward');
          camera.setAttribute('fly_forward','');
          menu.setAttribute('menu','');
          for(var i=0; i<blocs.length;i++){
            blocs[i].removeAttribute('random-texture');
          }
        }, 500);
    })
    el.addEventListener('mouseleave', function () {
        clearTimeout(timer);
    });
  }
});

//EDIT MOD

AFRAME.registerComponent('edit', {
  dependencies: ['material'],

  init: function () {
    var el = this.el;  // <a-box>
    var sceneEl = document.querySelector('a-scene');
    var cursor = sceneEl.querySelector('a-cursor');
    var camera = sceneEl.querySelector('a-camera');
    var menu = sceneEl.querySelector('#menu');
    var timer;
    var blocs = sceneEl.querySelectorAll('a-mixin');
    console.log(blocs)
    
    el.addEventListener('mouseenter', function () {
      timer = setTimeout(function(){
          console.log('Edit mod')
          cursor.removeAttribute('intersection-spawn');
          camera.removeAttribute('move_camera_forward');
          camera.removeAttribute('fly_forward');
          menu.removeAttribute('menu');
          for(var i=0; i<blocs.length;i++){
            blocs[i].removeAttribute('random-texture');
          }
      }, 500);
    })
    el.addEventListener('mouseleave', function () {
        clearTimeout(timer);
    });
  }
});

//CHANGE MOD

AFRAME.registerComponent('change', {
  dependencies: ['material'],

  init: function () {
    var el = this.el;  // <a-box>
    var sceneEl = document.querySelector('a-scene');
    var cursor = sceneEl.querySelector('a-cursor');
    var camera = sceneEl.querySelector('a-camera');
    var menu = sceneEl.querySelector('#menu');
    var timer;
    var blocs = sceneEl.querySelectorAll('a-mixin');
    
    el.addEventListener('mouseenter', function () {
      timer = setTimeout(function(){
            console.log('Change Texture')
            cursor.removeAttribute('intersection-spawn');
            for(var i=0; i<blocs.length;i++){
              blocs[i].setAttribute('random-texture', '');
            }
      }, 1000);
    })
    el.addEventListener('mouseleave', function () {
        clearTimeout(timer);
        for(var i=0; i<blocs.length;i++){
          blocs[i].removeAttribute('random-texture');
        }
    });
  }
});

//ADD MOD

AFRAME.registerComponent('add', {
  dependencies: ['material'],

  init: function () {
    var el = this.el;  // <a-box>
    var sceneEl = document.querySelector('a-scene');
    var cursor = sceneEl.querySelector('a-cursor');
    var camera = sceneEl.querySelector('a-camera');
    var menu = sceneEl.querySelector('#menu');
    var timer;
    var blocs = sceneEl.querySelectorAll('a-mixin');
    
    el.addEventListener('mouseenter', function () {
      timer = setTimeout(function(){
            console.log('Add Block')
            cursor.setAttribute('intersection-spawn', {
              event: 'click',
              mixin: 'voxel',
            });
          for(var i=0; i<blocs.length;i++){
            blocs[i].removeAttribute('random-texture');
          }
      }, 1000);
    })
    el.addEventListener('mouseleave', function () {
        clearTimeout(timer);
    });
  }
});