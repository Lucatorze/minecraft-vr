AFRAME.registerComponent('intersection-spawn', {
  schema: {
    default: '',
    parse: AFRAME.utils.styleParser.parse
  },

  init: function () {
    const data = this.data;
    const el = this.el;
    var sceneEl = document.querySelector('a-scene');
    var cursor = sceneEl.querySelector('a-cursor')
    var verif = cursor.getAttribute('intersection-spawn')
    
  
    el.addEventListener(data.event, evt => {
      if(verif != null){
      console.log(verif)
    }else{
      console.log('nullllllll')
    }
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
    });
  }
});