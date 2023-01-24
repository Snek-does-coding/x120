prediction1=""
prediction2=""

Webcam.set({
    width:350,
    height:350,
    image_format: 'png',
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    })
}

console.log('ml5 version:', ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/09xXvJH94/model.json',modelLoaded);

function modelLoaded()
{
    console.log("model loaded");
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data_1 = "and the first prediction is:" + prediction1;
    speak_data_2 = "and the next prediction is:" + prediction2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}