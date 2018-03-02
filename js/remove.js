AFRAME.registerComponent('remove', {
  dependencies: ['material'],

  init: function () {
    var el = this.el;  // <a-box>
    var timer;
    this.callback = remove.bind(this, timer, el)
    el.addEventListener('mouseenter', this.callback)
    
    el.addEventListener('mouseleave', function () {
        clearTimeout(timer);
    });
  },
  remove:function(){
    const data = this.data;
    const el = this.el;
    
    el.removeEventListener('mouseenter', this.callback);
  }
});

function remove(timer,el){
  timer = setTimeout(function(){
      el.parentNode.removeChild(el);
  }, 1000);
}