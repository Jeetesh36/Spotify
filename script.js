console.log("Welcome to Spotify");
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterplay = document.getElementById('masterplay');
let MyprogressBar = document.getElementById('MyprogressBar');
let masterSongName = document.getElementById('masterSongName')
let gif = document.getElementById('gif');

let songs = [
    {songName:"Love Me Like You Do", filePath: "song/1.mp3", coverPath:"cover/1.jpg" },
    {songName:"My Heart will Go on-Titanic", filePath: "song/2.mp3", coverPath:"cover/2.jpg" },
    {songName:"Tere Hawale", filePath: "song/3.mp3", coverPath:"cover/3.jpg" },
    {songName:"Sawre-Phantom", filePath: "song/4.mp3", coverPath:"cover/4.jpg" },
    {songName:"Baby-Justin Beiber", filePath: "song/5.mp3", coverPath:"cover/5.jpg" },
    {songName:"Let Me Love You", filePath: "song/6.mp3", coverPath:"cover/6.jpg" },
    {songName:"Apna Bana Le piya", filePath: "song/7.mp3", coverPath:"cover/7.jpg" },
]

// Handle play pause
masterplay.addEventListener('click', () =>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove("fa-play");
        masterplay.classList.add("fa-pause");
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove("fa-pause");
        masterplay.classList.add("fa-play");
        gif.style.opacity = 0;
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    MyprogressBar.value = progress;
}) 
MyprogressBar.addEventListener('change',()=>{
    audioElement.currentTime = MyprogressBar.value * audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
element.addEventListener('click' ,(e)=>{
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-play');
    e.target.classList.add('fa-pause');
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
})
})

document.getElementById('next').addEventListener('click' , ()=>{
    if(songIndex>=6){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
})

document.getElementById('previous').addEventListener('click' , ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
})