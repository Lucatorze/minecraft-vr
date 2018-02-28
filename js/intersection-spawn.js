AFRAME.registerComponent('intersection-spawn', {
  schema: {
    default: '',
    parse: AFRAME.utils.styleParser.parse
  },
    
  init: function () {
    const data = this.data;
    const el = this.el;
    
    el.addEventListener(data.event, callback.bind(this, data, el));
  },
    remove:function(){
      const data = this.data;
      const el = this.el;
      console.log('removed')
      el.removeEventListener(data.event, callback.bind(this, data, el));
  }
});
  
function callback (data,el,evt){
  var sceneEl = document.querySelector('a-scene');
  // Create element.
  const spawnEl = document.createElement('a-entity');

  // Snap intersection point to grid and offset from center.
  spawnEl.setAttribute('position', evt.detail.intersection.point);

  // Set components and properties.
  Object.keys(data).forEach(name => {
    if (name === 'event') { return; }
    AFRAME.utils.entity.setComponentProperty(spawnEl, name, data[name]);
  });
  console.log(el.sceneEl)
  // Append to scene.
  el.sceneEl.appendChild(spawnEl);
}