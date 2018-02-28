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
    var new_x = 0;
    var new_z = 0;
    console.log(camRotation)
    this.el.setAttribute('position', {
      x: new_x + (0.1 * Math.sin(radian)),
      y: currentPos.y,
      z: (new_z + (0.1 * Math.cos(camRotation.y)))
    })
  }
});

    var new_x = 0;
    var new_z = 0;
    function move_camera_forward() {
        x = $("#cam").attr("position").x;
        y = $("#cam").attr("position").y;
        z = $("#cam").attr("position").z;
        radian = -($("#cam").attr("rotation").y) * (Math.PI / 180);
        new_z = (new_z + (0.1 * Math.cos(radian)));
        new_x = new_x + (0.1 * Math.sin(radian));
        new_pos = new_x + " " + y + " " + (-new_z);
        console.log(new_pos)
        $("#cam").attr("position", new_pos)

    }
