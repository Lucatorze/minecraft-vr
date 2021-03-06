AFRAME.registerComponent('move_camera_forward', {
  schema: {
    speed: {type: 'float', default :0.1},
  },

  tick: function () {
    var currentPos= this.el.getAttribute('position');
    var sceneEl = document.querySelector('a-scene');
    var camera = sceneEl.querySelector('a-camera');
    var cameraDirection = sceneEl.querySelector('a-camera').object3D.getWorldDirection()

    this.el.setAttribute('position', {
      x: currentPos.x + -(0.05 *cameraDirection.x),
      y: currentPos.y,
      z: currentPos.z + -(0.05 *cameraDirection.z)
    })
  }
});

AFRAME.registerComponent('fly_forward', {
  schema: {
    speed: {type: 'float', default :0.1},
  },

  tick: function () {
    var currentPos= this.el.getAttribute('position');
    var sceneEl = document.querySelector('a-scene');
    var camera = sceneEl.querySelector('a-camera');
    var cameraDirection = sceneEl.querySelector('a-camera').object3D.getWorldDirection()
    
    var y = currentPos.y + -(0.05 *cameraDirection.y)
    
    if(y >= 20){
      y-=1
    }else if(y<= 0){
      y+= 1
    }
  
    this.el.setAttribute('position', {
      x: currentPos.x + -(0.05 *cameraDirection.x),
      y: y,
      z: currentPos.z + -(0.05 *cameraDirection.z)
    })
  }
});