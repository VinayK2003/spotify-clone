console.log("Welcome to Spotify");

let songIndex=0;
let audioElement=new Audio("1.mp3");
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
 

let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName:"Warriyo-Mortals(feat.Laura Brehm) [NCS Release]",filePath:"songs/1,mp3",coverPath:"covers/1.jpg"},
    {songName:"Cielo -Muma-Huma",filePath:"songs/2,mp3",coverPath:"covers/2.jpg"},
    {songName:"DEAF KEV - Invincible [NCS Release ]-320k",filePath:"songs/3,mp3",coverPath:"covers/3.jpg"},
    {songName:"Different Heaven & EH!DE -My Heart [NCS Release]-320k",filePath:"songs/4,mp3",coverPath:"covers/4.jpg"},
    {songName:"Janji-Heros-TOnight-feat-Johnning-NCS_Release",filePath:"songs/5,mp3",coverPath:"covers/1.jpg"},
    {songName:"Salam-e-Ishq",filePath:"songs/6,mp3",coverPath:"covers/5.jpg"},
    {songName:"Salam-e-Ishq",filePath:"songs/7,mp3",coverPath:"covers/6.jpg"},
    {songName:"Salam-e-Ishq",filePath:"songs/8,mp3",coverPath:"covers/7.jpg"},
    {songName:"Salam-e-Ishq",filePath:"songs/9,mp3",coverPath:"covers/8.jpg"},
    {songName:"Salam-e-Ishq",filePath:"songs/10,mp3",coverPath:"covers/1.jpg"},
]
masterPlay.addEventListener('click',()=>{
   if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        gif.style.opacity=1;
    // masterPlay.classList.remove('far fa-3x fa-play-circle');
    // masterPlay.classList.add('fa-solid fa-circle-pause');
}
    else{
        audioElement.pause();
        gif.style.opacity=0;
    }

})

audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
    
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
})
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;

})

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
       songIndex=parseInt(e.target.id);
        audioElement.src='songs/${songIndex+1}.mp3';
        audioElement.currentTime=0;
        audioElement.play();
    })
})


  
 
