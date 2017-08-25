import { autoDetectRenderer, Container, loader, Sprite } from 'pixi.js';

var stage = new Container(),
    renderer = autoDetectRenderer(256, 256);
document.body.appendChild(renderer.view);

//Use Pixi's built-in `loader` object to load an image
loader
  .add('static/images/cat.png')
  .load(setup);

//This `setup` function will run when the image has loaded
function setup() {

  //Create the `cat` sprite from the texture
  var cat = new Sprite(
    loader.resources['static/images/cat.png'].texture
  );

  //Add the cat to the stage
  stage.addChild(cat);

  //Render the stage
  renderer.render(stage);
}
