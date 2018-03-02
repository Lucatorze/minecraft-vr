AFRAME.registerComponent('removeEl', {
  dependencies: ['material'],

  init: function () {
    var el = this.el;  // <a-box>
    this.callback = remove.bind(this, el)
    el.addEventListener('click', this.callback)
  },
  remove:function(){
    const data = this.data;
    const el = this.el;
    
    el.removeEventListener('click', this.callback);
  }
});

function remove(el){
  el.parentNode.removeChild(el);
}