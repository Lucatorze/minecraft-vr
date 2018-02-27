AFRAME.registerComponent('test', {

  init: function () {
    var el = this.el;  // <a-box>
    el.addEventListener('mousedown', function(evt) {
      console.log(evt.detail.intersection.point);
      
    });

  }
});
