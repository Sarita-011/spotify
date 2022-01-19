console.log("welcome to sptify clone");
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');


let songs=[
    {songName:"Salam-e-Ishq",filePath: "songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Salam-e-Ishq",filePath: "songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Salam-e-Ishq",filePath: "songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Salam-e-Ishq",filePath: "songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Salam-e-Ishq",filePath: "songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Salam-e-Ishq",filePath: "songs/1.mp3",coverPath:"covers/1.jpg"},
]

//audioElement.play();
//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})
//listen to events
myProgressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
})