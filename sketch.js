let style;
let style2;
let video;
let resultImg;
var input, button;



function setup() {
  background(255, 204, 100);
  createCanvas(520, 385).parent('canvasContainer');

  button = createButton('Next');                        //Creates a button 
  button.position(550, 590);                             //Positions the button 
  button.mousePressed(model);    
  video = createCapture(VIDEO);//allows acess to the web cam
  video.hide();//this hides the original video so you can only see the newly styled transfered one 
  // The results image from the style transfer
  resultImg = createImg('');
  resultImg.hide();

function model(){

}
  // Create a new Style Transfer method with a defined style.
  // We give the video as the second argument
  //style = ml5.styleTransfer('models/scream', video, modelLoaded);
  if (!mouseIsPressed){
      style = ml5.styleTransfer('models/scream', video, modelLoaded);
    }else{
        style2 = ml5.styleTransfer('models/udnie', video, modelLoaded);
    }


}

function draw(){
 image(resultImg, 0, 0, 520, 440);
}

// A function to call when the model has been loaded.
function modelLoaded() {
  select('#status').html('Model Loaded');
  if (!mouseIsPressed){
      style.transfer(gotResult);
    }else{
      style2.transfer(gotResult);
    }

  
}

// When we get the results, update the result image src
function gotResult(err, img) {
  resultImg.attribute('src', img.src);
  if (!mouseIsPressed);{
    style.transfer(gotResult);
  }elses
    style2.transfer(gotResult)

  }
  
    





//http-server -c-1
//http://localhost:8080/