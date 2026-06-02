console.log("🎵 Welcome to Spotify Clone - Modern Edition");

// Initialize Variables
let songIndex = 0;
let audioElement = new Audio();
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let currentTimeDisplay = document.getElementById('currentTime');
let durationDisplay = document.getElementById('duration');
let playerAlbumArt = document.getElementById('playerAlbumArt');
let volumeControl = document.getElementById('volumeControl');
let searchInput = document.getElementById('searchInput');
let shuffleBtn = document.getElementById('shuffleBtn');
let repeatBtn = document.getElementById('repeatBtn');
let themeToggle = document.getElementById('themeToggle');
let songsContainer = document.getElementById('songsContainer');

// State Variables
let isShuffleOn = false;
let repeatMode = 0; // 0: no repeat, 1: repeat all, 2: repeat one
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let currentPlaylist = 'all';
let shuffledIndices = [];

// Song Database
let songs = [
    {
        songName: "Tera Chehra",
        filePath: "songs/song1.mp3.mp3",
        coverPath: "https://th.bing.com/th/id/OIP.tSxkEE9vrOIVEUwuGHDrDAHaIX?w=158&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        artist: "NCS"
    },
    {
        songName: "Tu Hain Toh Main Hoon",
        filePath: "songs/song2.mp3.mp3",
        coverPath: "https://th.bing.com/th/id/OIP.ARzTlPbBhOoJk1j6N2i2mQHaEK?w=158&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        artist: "NCS"
    },
    {
        songName: "Apna Bana Le",
        filePath: "songs/song3.mp3.mp3",
        coverPath: "https://th.bing.com/th/id/OIP.IP3Zz2zIeizryGDcaD59AgHaEK?w=158&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        artist: "NCS"
    },
    {
        songName: "Sajni",
        filePath: "songs/song4.mp3.mp3",
        coverPath: "https://th.bing.com/th/id/OIP.tSxkEE9vrOIVEUwuGHDrDAHaIX?w=158&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        artist: "NCS"
    },
    {
        songName: "Tum Hi Ho",
        filePath: "songs/song5.mp3.mp3",
        coverPath: "https://th.bing.com/th/id/OIP.ARzTlPbBhOoJk1j6N2i2mQHaEK?w=158&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        artist: "NCS"
    }
];

// Initialize UI
function initializeUI() {
    updateSongList();
    loadFavorites();
    loadTheme();
    audioElement.volume = volumeControl.value / 100;
}

// Update Song List Display
function updateSongList() {
    songsContainer.innerHTML = '';
    let songsToDisplay = currentPlaylist === 'favorites' ? 
        songs.filter((_, i) => favorites.includes(i)) : 
        songs;

    songsToDisplay.forEach((song, index) => {
        let actualIndex = currentPlaylist === 'all' ? index : songs.indexOf(songs[index]);
        let songItem = document.createElement('div');
        songItem.className = 'songItem';
        if (songIndex === index && currentPlaylist === 'all') {
            songItem.classList.add('now-playing');
        }
        
        let isFavorited = favorites.includes(index);
        songItem.innerHTML = `
            <img src="${song.coverPath}" alt="${song.songName}">
            <div class="song-details">
                <span class="songName">${song.songName}</span>
                <span class="songArtist">${song.artist}</span>
            </div>
            <span class="songlistplay">
                <span class="timestamp">${getRandomTime()}</span>
                <i class="songItemPlay fa-solid fa-play" data-index="${index}"></i>
                <i class="songItemFav fa-solid fa-heart ${isFavorited ? 'active' : ''}" data-index="${index}"></i>
            </span>
        `;
        songsContainer.appendChild(songItem);
    });

    attachSongItemListeners();
}

// Get Random Time (placeholder - would come from metadata)
function getRandomTime() {
    return `${Math.floor(Math.random() * 5)}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`;
}

// Attach Event Listeners to Song Items
function attachSongItemListeners() {
    let playButtons = document.querySelectorAll('.songItemPlay');
    let favButtons = document.querySelectorAll('.songItemFav');

    playButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            songIndex = parseInt(e.target.getAttribute('data-index'));
            playSong(songIndex);
        });
    });

    favButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            let index = parseInt(e.target.getAttribute('data-index'));
            toggleFavorite(index, e.target);
        });
    });
}

// Play Song
function playSong(index) {
    makeAllPlaysDefault();
    songIndex = index;
    audioElement.src = songs[index].filePath;
    masterSongName.innerText = songs[index].songName;
    playerAlbumArt.src = songs[index].coverPath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    updateNowPlaying();
}

// Make All Play Buttons Default
function makeAllPlaysDefault() {
    Array.from(document.querySelectorAll('.songItemPlay')).forEach((element) => {
        element.classList.remove("fa-pause");
        element.classList.add('fa-play');
    });
}

// Update Now Playing Indicator
function updateNowPlaying() {
    document.querySelectorAll('.songItem').forEach((item, index) => {
        if (index === songIndex && currentPlaylist === 'all') {
            item.classList.add('now-playing');
        } else {
            item.classList.remove('now-playing');
        }
    });
}

// Toggle Favorite
function toggleFavorite(index, button) {
    if (favorites.includes(index)) {
        favorites = favorites.filter(fav => fav !== index);
        button.classList.remove('active');
    } else {
        favorites.push(index);
        button.classList.add('active');
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

// Load Favorites from LocalStorage
function loadFavorites() {
    document.querySelectorAll('.songItemFav').forEach((button) => {
        let index = parseInt(button.getAttribute('data-index'));
        if (favorites.includes(index)) {
            button.classList.add('active');
        }
    });
}

// Format Time
function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    let minutes = Math.floor(seconds / 60);
    let secs = Math.floor(seconds % 60);
    return `${minutes}:${String(secs).padStart(2, '0')}`;
}

// Handle Play/Pause Click
masterPlay.addEventListener('click', () => {
    if (audioElement.src === '') {
        playSong(0);
    } else if (audioElement.paused) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
});

// Update Progress Bar
audioElement.addEventListener('timeupdate', () => {
    if (audioElement.duration) {
        let progress = (audioElement.currentTime / audioElement.duration) * 100;
        myProgressBar.value = progress;
        currentTimeDisplay.innerText = formatTime(audioElement.currentTime);
        durationDisplay.innerText = formatTime(audioElement.duration);
    }
});

// Seek Bar Change
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value / 100) * audioElement.duration;
});

// Volume Control
volumeControl.addEventListener('input', () => {
    audioElement.volume = volumeControl.value / 100;
});

// Next Song
document.getElementById('next').addEventListener('click', () => {
    if (isShuffleOn) {
        if (shuffledIndices.length === 0) {
            shuffledIndices = Array.from({length: songs.length}, (_, i) => i)
                .sort(() => Math.random() - 0.5);
        }
        let randomIndex = shuffledIndices.pop();
        playSong(randomIndex);
    } else {
        songIndex = (songIndex + 1) % songs.length;
        playSong(songIndex);
    }
});

// Previous Song
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex > 0) {
        songIndex -= 1;
    } else {
        songIndex = songs.length - 1;
    }
    playSong(songIndex);
});

// Shuffle Toggle
shuffleBtn.addEventListener('click', () => {
    isShuffleOn = !isShuffleOn;
    shuffleBtn.classList.toggle('active', isShuffleOn);
    shuffledIndices = Array.from({length: songs.length}, (_, i) => i)
        .sort(() => Math.random() - 0.5);
});

// Repeat Toggle
repeatBtn.addEventListener('click', () => {
    repeatMode = (repeatMode + 1) % 3;
    repeatBtn.classList.toggle('active', repeatMode > 0);
    updateRepeatIcon();
});

// Update Repeat Icon
function updateRepeatIcon() {
    const repeatIcon = repeatBtn.querySelector('i');
    if (repeatMode === 0) {
        repeatIcon.classList.remove('fa-repeat-1');
    } else if (repeatMode === 2) {
        repeatIcon.classList.add('fa-repeat-1');
    }
}

// Handle Song End
audioElement.addEventListener('ended', () => {
    if (repeatMode === 2) {
        audioElement.currentTime = 0;
        audioElement.play();
    } else {
        document.getElementById('next').click();
    }
});

// Search Functionality
searchInput.addEventListener('input', (e) => {
    let searchTerm = e.target.value.toLowerCase();
    let filteredSongs = songs.filter(song =>
        song.songName.toLowerCase().includes(searchTerm) ||
        song.artist.toLowerCase().includes(searchTerm)
    );

    songsContainer.innerHTML = '';
    filteredSongs.forEach((song, index) => {
        let originalIndex = songs.indexOf(song);
        let songItem = document.createElement('div');
        songItem.className = 'songItem';
        
        let isFavorited = favorites.includes(originalIndex);
        songItem.innerHTML = `
            <img src="${song.coverPath}" alt="${song.songName}">
            <div class="song-details">
                <span class="songName">${song.songName}</span>
                <span class="songArtist">${song.artist}</span>
            </div>
            <span class="songlistplay">
                <span class="timestamp">${getRandomTime()}</span>
                <i class="songItemPlay fa-solid fa-play" data-index="${originalIndex}"></i>
                <i class="songItemFav fa-solid fa-heart ${isFavorited ? 'active' : ''}" data-index="${originalIndex}"></i>
            </span>
        `;
        songsContainer.appendChild(songItem);
    });

    if (searchTerm === '') {
        updateSongList();
    } else {
        attachSongItemListeners();
    }
});

// Playlist Navigation
document.querySelectorAll('.playlist-item').forEach(item => {
    item.addEventListener('click', (e) => {
        document.querySelectorAll('.playlist-item').forEach(p => p.classList.remove('active'));
        e.currentTarget.classList.add('active');
        currentPlaylist = e.currentTarget.getAttribute('data-playlist');
        updateSongList();
    });
});

// Theme Toggle
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
    updateThemeIcon();
});

// Update Theme Icon
function updateThemeIcon() {
    const icon = themeToggle.querySelector('i');
    if (document.body.classList.contains('light-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Load Theme from LocalStorage
function loadTheme() {
    let theme = localStorage.getItem('theme') || 'dark';
    if (theme === 'light') {
        document.body.classList.add('light-mode');
        updateThemeIcon();
    }
}

// Keyboard Shortcuts
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        masterPlay.click();
    } else if (e.code === 'ArrowRight') {
        document.getElementById('next').click();
    } else if (e.code === 'ArrowLeft') {
        document.getElementById('previous').click();
    }
});

// Initialize on Page Load
window.addEventListener('DOMContentLoaded', initializeUI);

console.log("✅ All features loaded successfully!");
