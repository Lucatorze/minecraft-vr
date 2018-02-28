AFRAME.registerComponent('inifite-foward', {
  schema: {
    speed: {type: 'float', default :0.1},
  },

  tick: function () {
    var currentPos= this.el.getAttribute('position');
    var sceneEl = document.querySelector('a-scene');
    var cursor = sceneEl.querySelector('a-cursor');
    var camera = sceneEl.querySelector('a-camera');
    console.log(cursor.getAttribute());
    this.el.setAttribute('position', {
      x: currentPos.x,
      y: currentPos.y,
      z: currentPos.z - this.data.speed,
    })
  }
});