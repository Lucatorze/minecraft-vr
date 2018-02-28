AFRAME.registerComponent('inifite-foward', {
  schema: {
    speed: {type: 'float', default :0.1},
  },

  tick: function () {
    var currentPos= this.el.getAttribute('position');
    this.el.setAttribute('position', {
      x: currentPos.x,
      y: currentPos.y,
      z: currentPos.z - this.data.speed,
    })
  }
});