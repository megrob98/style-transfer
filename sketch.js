let style;
let video;
let resultImg;

function setup() {
  createCanvas(320, 240).parent('canvasContainer');

  video = createCapture(VIDEO);//allows acess to the web cam
  video.hide();//this hides the original video so you can only see the newly styled transfered one 
  // The results image from the style transfer
  resultImg = createImg('');
  resultImg.hide();

  // Create a new Style Transfer method with a defined style.
  // We give the video as the second argument
  style = ml5.styleTransfer('models/scream', video, modelLoaded);
 //style = ml5.styleTransfer('models/wave', video, modelLoaded);
  //style = ml5.styleTransfer('models/udnie', video, modelLoaded);
}

function draw(){
 image(resultImg, 0, 0, 320, 240);
}

// A function to call when the model has been loaded.
function modelLoaded() {
  select('#status').html('Model Loaded');
  style.transfer(gotResult);
}

// When we get the results, update the result image src
function gotResult(err, img) {
  resultImg.attribute('src', img.src);
  style.transfer(gotResult);
}
