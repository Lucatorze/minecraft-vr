AFRAME.registerComponent('walk', {
  dependencies: ['material'],

  init: function () {
    var el = this.el;  // <a-box>
    var sceneEl = document.querySelector('a-scene');
    var cursor = sceneEl.querySelector('a-cursor')
    var timer;
    el.addEventListener('mouseenter', function () {
        timer = setTimeout(function(){
            console.log('okok')
            cursor.removeAttribute('intersection-spawn');
            console.log(cursor)
        }, 1000);
    })
    el.addEventListener('mouseleave', function () {
        clearTimeout(timer);
    });
  }
});

function getRandomTexture() {
  const blocs = [
    'https://cdn.glitch.com/86898e5d-de85-4e17-a514-dfb5bd641dfd%2Fimage6032_lrg.jpg?1519729186846',
    'https://cdn.glitch.com/86898e5d-de85-4e17-a514-dfb5bd641dfd%2F8be44399c511cbaf807e8dd6bb344f9e.png?1519729315433',
    'https://cdn.glitch.com/86898e5d-de85-4e17-a514-dfb5bd641dfd%2Ff1276a05d7fe470886a983fe84b73027.png?1519729393923',
    'https://cdn.glitch.com/86898e5d-de85-4e17-a514-dfb5bd641dfd%2Fflat%2C800x800%2C075%2Ct.jpg?1519729497564',
    'https://cdn.glitch.com/86898e5d-de85-4e17-a514-dfb5bd641dfd%2Fs189772745713394276_p3861_i148_w750.jpeg?1519729581547',
    'https://cdn.glitch.com/86898e5d-de85-4e17-a514-dfb5bd641dfd%2Fil_570xN.839219362_k7kz.jpg?1519739140947',
    'https://cdn.glitch.com/86898e5d-de85-4e17-a514-dfb5bd641dfd%2F65040929317ccf2d9afd4fae4b59df42.png?1519739242499',
    ];
  for (var i = 0; i < 6; i++ ) {
     var texture = blocs[Math.floor(Math.random() * blocs.length)];
  }
  return texture;
}