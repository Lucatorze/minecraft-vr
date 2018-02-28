AFRAME.registerComponent('inifite-foward', {
  schema: {
    speed: {type: 'float', default :0.1},
  },

  tick: function () {
    var currentPos= this.el.getAttribute('position');
    var sceneEl = document.querySelector('a-scene');
    var cursor = sceneEl.querySelector('a-cursor');
    var camera = sceneEl.querySelector('a-camera');
    var camRotation = camera.getAttribute('rotation');
    var radian = (camRotation.y) * (Math.PI / 180);
    console.log(camRotation.y)
    this.el.setAttribute('position', {
      x: currentPos.x + (0.1 * Math.cos(radian)),
      y: currentPos.y,
      z: currentPos.z + (0.1 * Math.cos(radian))
    })
  }
});

    var new_x = 0;
    var new_z = 0;
    var camPosition = document.querySelector('a-scene').querySelector('a-camera').getAttribute('position');
    var camRotation = document.querySelector('a-scene').querySelector('a-camera').getAttribute('rotation');

    function move_camera_forward() {
        var x = camPosition.x;
        var y = camPosition.y;
        var z = camPosition.z;
        var radian = -(camRotation.y) * (Math.PI / 180);
        new_z = (new_z + (0.1 * Math.cos(radian)));
        new_x = new_x + (0.1 * Math.sin(radian));
        var new_pos = new_x + " " + y + " " + (-new_z);
        return new_pos
    }
