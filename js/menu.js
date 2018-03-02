//BLOCK MENU

AFRAME.registerComponent('menu', {
  schema: {
    speed: {type: 'float', default :0.05},
  },
  
  init: function () {
    var sceneEl = document.querySelector('a-scene');
    var camera = sceneEl.querySelector('a-camera');
    var currentPos = camera.getAttribute('position');
    var pos = this.el.getAttribute('position')
    
    this.dz = (currentPos.z  - pos.z)
  },

  tick: function () {
    var sceneEl = document.querySelector('a-scene');
    var camera = sceneEl.querySelector('a-camera');
    var cameraDirection = sceneEl.querySelector('a-camera').object3D.getWorldDirection()
    var currentPos = camera.getAttribute('position');
    var rotationCam = camera.getAttribute('rotation');
    var rotationEl = this.el.getAttribute('rotation');
    var pos = this.el.getAttribute('position')
    var menu = this.el.object3D;
    
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
    var timer;
    
    el.addEventListener('mouseenter', function () {
      timer = setTimeout(function(){
        console.log('Walk mod')
        cursor.removeAttribute('intersection-spawn');
        camera.removeAttribute('wasd-controls');
        camera.removeAttribute('fly_forward');
        camera.setAttribute('move_camera_forward','');
        menu.setAttribute('menu','');
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
    
    el.addEventListener('mouseenter', function () {
      timer = setTimeout(function(){
          console.log('Fly mod')
          camera.removeAttribute('intersection-spawn');
          camera.removeAttribute('wasd-controls');
          camera.removeAttribute('move_camera_forward');
          camera.setAttribute('fly_forward','');
          menu.setAttribute('menu','');
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
    var camera = sceneEl.querySelector('[camera]');
    var menu = sceneEl.querySelector('#menu');
    var timer;
    
    el.addEventListener('mouseenter', function () {
      timer = setTimeout(function(){
            console.log('Edit mod')
            cursor.setAttribute('intersection-spawn', {
              event: 'click',
              mixin: 'voxel',
            });
          camera.removeAttribute('move_camera_forward');
          camera.removeAttribute('fly_forward');
          menu.removeAttribute('menu');
      }, 500);
    })
    el.addEventListener('mouseleave', function () {
        clearTimeout(timer);
    });
  }
});