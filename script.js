console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio("songs/song1.mp3.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Tera Chehra", filePath: "songs/song1.mp3.mp3", coverPath: "https://th.bing.com/th/id/OIP.tSxkEE9vrOIVEUwuGHDrDAHaIX?w=158&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
    {songName: "Tu Hain Toh Main Hoon", filePath: "songs/song2.mp3.mp3", coverPath: "https://th.bing.com/th/id/OIP.ARzTlPbBhOoJk1j6N2i2mQHaEK?w=158&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
    {songName: "Apna Bana Le", filePath: "songs/song3.mp3.mp3", coverPath: "https://th.bing.com/th/id/OIP.IP3Zz2zIeizryGDcaD59AgHaEK?w=158&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
    {songName: "sajni", filePath: "songs/song4.mp3.mp3", coverPath: "https://th.bing.com/th/id/OIP.tSxkEE9vrOIVEUwuGHDrDAHaIX?w=158&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
    {songName: "Tum Hi Ho", filePath: "songs/song5.mp3.mp3", coverPath: "https://th.bing.com/th/id/OIP.ARzTlPbBhOoJk1j6N2i2mQHaEK?w=158&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
]

songItems.forEach((element, i) => {
    //console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-solid", "fa-pause");
        masterPlay.classList.add('fa-solid', 'fa-play');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove("fa-solid", "fa-pause");
        masterPlay.classList.add('fa-solid', 'fa-play');
        gif.style.opacity = 0;
    }
})

// Listen to events
audioElement.addEventListener('timeupdate', () => {
    //console.log('timeupdate')
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value / 100) * audioElement.duration;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove("fa-solid", "fa-pause");
        element.classList.add('fa-solid', 'fa-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        //console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-solid", "fa-pause");
        e.target.classList.add('fa-solid', 'fa-play');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove("fa-solid", "fa-pause");
        masterPlay.classList.add('fa-solid', 'fa-play');
    })   
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 4) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-solid", "fa-pause");
    masterPlay.classList.add('fa-solid', 'fa-play');
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-solid", "fa-pause");
    masterPlay.classList.add('fa-solid', 'fa-play');
})