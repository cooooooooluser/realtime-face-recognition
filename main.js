
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO)
    video.hide();
    imageClassifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/H5WodaQ8-/model.json",modelLoaded);

}

function draw() {
    image(video, 0, 0, 300,300);
    console.log("finished");
   imageClassifier.classify(video, gotResult);
}

function modelLoaded() {
   console.log("modelLoaded")
}

function gotResult(error, results) {
   if (error){
      console.error(error);
   }
   else{
      console.log(results);
      document.getElementById("object_value").innerHTML=results[0].label;
      document.getElementById("Acurracy_number").innerHTML=results[0].confidence.toFixed(3);
   }
}

//image link :
//"https://teachablemachine.withgoogle.com/models/H5WodaQ8-/model.json"