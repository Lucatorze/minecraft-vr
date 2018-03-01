AFRAME.registerComponent('inventory', {
  schema: {
    speed: {type: 'float', default :0.1},
  },

  tick: function () {
    var sceneEl = document.querySelector('a-scene');
    var camera = sceneEl.querySelector('a-camera');
    var cameraDirection = sceneEl.querySelector('a-camera').object3D.getWorldDirection()
    var currentPos = camera.getAttribute('position');
    var rotation = camera.getAttribute('rotation');
    
    var menu = this.el.object3D;

    this.el.setAttribute('position', {
      x: this.el.getAttribute('position').x -(0.05 *cameraDirection.x),
      y: this.el.getAttribute('position').y,
      z: this.el.getAttribute('position').z -(0.05 *cameraDirection.z)
    })
    
    var startPos = new THREE.Vector3(1.2, -2.34, 0.5);
    var direction = new THREE.Vector3(0.6578737359955765, -0.24972916834682138, 0.710519166466616);
    var distance = 1;

    var newPos = new THREE.Vector3();
    newPos.addVectors ( startPos, direction.multiplyScalar( distance ) );

  
  }
});