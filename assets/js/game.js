var width = window.innerWidth;
var height = window.innerHeight;

if ( width < 1280 && width / height !== 16 / 9) {
  height = width / (16 / 9);
} else {
  width = 1280;
  height = 720;
}


function resizeGame() {
  var width = window.innerWidth;
  var height = window.innerHeight;

  if ( width < 1280 && width / height !== 16 / 9) {
    height = width / (16 / 9);
  } else {
    width = 1280;
    height = 720;
  }

  game.width = width;
  game.height = height;
  game.stage.bounds.width = width;
  game.stage.bounds.height = height;

  if (game.renderType === Phaser.WEBGL) {
    game.renderer.resize(width, height);
  }

}

var game = new Phaser.Game(width, height, Phaser.AUTO, '', { preload: preload, create: create, update: update });
window.addEventListener('resize', function() { 
  window.resizeGame();
});

function preload() {
  game.load.image('mainMenuBg', '/img/main-menu-bg.jpg');
}

function create() {
  var sky = game.add.sprite(0, 0, 'mainMenuBg');
  sky.width = game.renderer.width;
  sky.height = game.renderer.height;

  window.addEventListener('resize', function() {
    sky.width = game.renderer.width;
    sky.height = game.renderer.height;
    console.log(sky)
  });
}

function update() {
}

// var Crafty = require('craftyjs');
// var imgDir = 'assets/img/'
// document.body.style.margin = 0;
// document.head.insertAdjacentHTML( 'beforeend', '<link rel=stylesheet href=style.css>' );

// Crafty.init();


// var assets = {
//   mainMenu: {
//     'images': [imgDir + 'main-menu-bg.jpg']
//   },

//   newGame: {

//   }
// };

// // Use for every loading screen
// function loadScene(scene, assetsToLoad) {
//   Crafty.scene('loading', function() {
//     Crafty.background('#3c3a3b url(' + imgDir + 'loading-bg.jpg) no-repeat center center');
//     Crafty.e('2D, DOM, Text, loadText')
//           .attr({ w: 966, h: 40, x: Crafty.viewport._width/2 - 966/2, y: Crafty.viewport._height/2 + 520/2})
//           .text('Loading...')
//           .textFont({family: 'ITC Highlander', size: '24px'})
//           .textColor('#FFFFFF')
//           .css({ 'text-align': 'right', 'text-shadow': '0 0 10px #000000, 0 0 5px #000000'});

//     Crafty.load(assetsToLoad,
//       function() {
//         Crafty.scene(scene);
//       },

//       function(e) {
//         Crafty('loadText').each(
//           function() {
//             this.text('Loading ... ' + Math.floor(e.percent) + '%')
//           }
//         );
//       },

//       function(e) {
//         console.log(e);
//       }
//     );
//   });

//   Crafty.scene('loading');
// }



// Crafty.scene('main', function() {
//   Crafty.background('#e1ddd2 url(' + imgDir + 'main-menu-bg.jpg) no-repeat center center')
//   Crafty.e('2D, DOM, Image')
//     .attr({x: Crafty.viewport._width/2 - 316/2, y: 200})
//     .image(imgDir + 'logo-sm.png', 'no-repeat');

//   let menuOption = function(w, y, text, link) {
//     return Crafty.e('2D, DOM, Text, Mouse')
//       .attr({w: w, h: 60, x: Crafty.viewport._width/2 - w/2, y: y})
//       .text(text)
//       .textFont({family: 'Kingthings Petrock', size: '60px'})
//       .textColor('#FFFFFF')
//       .css({'display': 'inline-block', 'text-align': 'center', 'text-shadow': '0 0 10px #000000'})
//       .bind('MouseOver', function(e) {
//         this.css({'text-shadow': '0 5px 15px #666666, 0 0 10px #000000', 'cursor': 'pointer'});
//       })
//       .bind('MouseOut', function(e) {
//         this.textColor('#FFFFFF');
//         this.css({'text-shadow': '0 0 10px #000000'});
//       });
//   }

//   menuOption(230, 480, 'New Game').bind('Click', function(e) {
//     Crafty.load(assets.newGame,
//       function() {
//         Crafty.scene('newGameMenu');
//       }),

//       function(e) {
//         // Loading Progress
//       },

//       function(e) {
//         console.log(e);
//       }
//     });

//   menuOption(162, 550, 'Options');
// });

// function makeTile() {
//   let tileArr = [
//     [0,0,0,1,1,1,1,2,2],
//     [0,0,0,1,2,2,2,2,1],
//     [0,0,0,2,2,1,1,2,1],
//     [1,2,2,1,2,2,1,2,1],
//     [1,2,2,2,2,2,2,2,1],
//     [1,2,1,2,2,1,2,1,1],
//     [1,2,1,1,2,2,0,0,0],
//     [1,2,2,2,2,2,0,0,0],
//     [1,1,1,1,1,1,0,0,0]
//   ]

//   // let tileCount = 0;

//   for(let i = 0; i < tileArr.length; i++) {
//     for(let j = 0; j < tileArr[i].length; j++) {
//       if( tileArr[i][j] === 0 ) {
//         Crafty.e("2D, DOM, Color")
//         .attr({
//           x: (j === 0) ? j * 150 : j * 150 + j,
//           y: (i === 0) ? i * 150 : i * 150 + i,
//           w: 150,
//           h: 150
//         }).css({'background': 'rgba(0,0,0,0)'})
//       } else if (tileArr[i][j] === 1 ) {
//         Crafty.e("2D, DOM, Color")
//         .attr({
//           x: (j === 0) ? j * 150 : j * 150 + j,
//           y: (i === 0) ? i * 150 : i * 150 + i,
//           w: 150,
//           h: 150
//         }).css({'background': '#000'})
//       } else {
//         Crafty.e("2D, DOM, Color")
//         .attr({
//           x: (j === 0) ? j * 150 : j * 150 + j,
//           y: (i === 0) ? i * 150 : i * 150 + i,
//           w: 150,
//           h: 150
//         }).css({'background': '#FFF'})
//       }
//     }
//   }
// }


// Crafty.scene('newGameMenu', function() {
//   Crafty.bind("MouseWheelScroll", function(evt) {
//     Crafty.viewport.scale(Crafty.viewport._scale * (1 + evt.direction * 0.1));
//     console.log(evt);
//   });
//   Crafty.background('#e1ddd2')

//   makeTile();
// });


// // Crafty.scene('main');
// loadScene('main', assets.mainMenu);