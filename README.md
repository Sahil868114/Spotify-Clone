# 🎵 Spotify Clone - Modern Music Player

A modern, feature-rich music player inspired by Spotify with a sleek dark theme and intuitive user interface.

## ✨ New Features & Improvements

### 🐛 Bug Fixes
- ✅ Fixed play/pause button icon logic (was inverted)
- ✅ Corrected file path extensions (removed double .mp3)
- ✅ Fixed HTML structure and semantic elements
- ✅ Added current/total time display
- ✅ Fixed song ID indexing (now 0-based)

### 🎨 Modern UI/UX
- **Spotify-like Dark Theme** - Sleek dark interface with accent green colors
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Album Art Display** - Shows current song album art in the player
- **Smooth Animations** - Hover effects and transitions throughout
- **Modern Typography** - Using Poppins font for better readability
- **CSS Variables** - Easy theme switching with CSS custom properties

### 🎵 New Features
- **Volume Control** - Slider to adjust audio volume
- **Shuffle Mode** - Randomize song order with toggle
- **Repeat Modes** - Cycle through: No Repeat → Repeat All → Repeat One
- **Search Functionality** - Real-time search through songs and artists
- **Favorites System** - Save favorite songs to localStorage
- **Now Playing Indicator** - Highlights current song in the list
- **Time Display** - Current time and duration in MM:SS format
- **Theme Toggle** - Switch between dark and light mode
- **Playlist Tabs** - View all songs or favorites
- **Keyboard Shortcuts**:
  - **Space** - Play/Pause
  - **→ Arrow** - Next Song
  - **← Arrow** - Previous Song

### 💾 Data Persistence
- **Favorites** - Stored in browser localStorage
- **Theme Preference** - Remembered across sessions

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Edge, Safari)
- Audio files in the `songs/` directory

### Installation
1. Clone or download the repository
2. Place MP3 files in the `songs/` folder:
   - `song1.mp3`
   - `song2.mp3`
   - `song3.mp3`
   - `song4.mp3`
   - `song5.mp3`

3. Open `index.html` in your browser or run a local server:
   ```bash
   python -m http.server 8000
   # or
   npx http-server
   # or
   python3 -m http.server 8000
   ```

4. Navigate to `http://localhost:8000`

## 🎮 How to Use

### Playing Music
1. Click the **play icon** next to any song to start playing
2. Use the **play/pause button** in the player to control playback
3. Click **next/previous arrows** to navigate songs

### Search & Filter
- Type in the **search box** to filter songs by name or artist
- Click playlist tabs to view "All Songs" or "Favorites"

### Favorites
- Click the **heart icon** on any song to add/remove from favorites
- Favorites are saved in browser storage

### Controls
- **Shuffle** - Randomize song order
- **Repeat** - Toggle repeat modes (off → all → one)
- **Volume** - Adjust playback volume
- **Progress Bar** - Click to seek to specific time

### Theme
- Click the **moon/sun icon** in the navbar to toggle light/dark mode

## 📁 File Structure
```
Spotify Clone/
├── index.html          # Main HTML file
├── style.css          # Modern CSS styling
├── script.js          # Application logic
└── songs/             # Audio files directory
    ├── song1.mp3
    ├── song2.mp3
    ├── song3.mp3
    ├── song4.mp3
    └── song5.mp3
```

## 🎨 Color Scheme

### Dark Mode (Default)
- Primary: #1DB954 (Spotify Green)
- Accent: #1ed760 (Bright Green)
- Background: #121212
- Secondary: #191919
- Text: #FFFFFF

### Light Mode
- Background: #FFFFFF
- Secondary: #F5F5F5
- Text: #191919

## 📱 Responsive Breakpoints
- **Desktop**: Full layout with sidebar
- **Tablet** (≤1024px): Stacked layout
- **Mobile** (≤768px): Optimized for small screens

## 🔧 Technical Stack
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox and grid
- **JavaScript (Vanilla)** - No frameworks/dependencies
- **Web Audio API** - Native audio playback
- **localStorage API** - Data persistence

## ✅ Code Quality
- Clean, readable, and well-commented code
- Modern JavaScript (ES6+)
- Responsive and mobile-first design
- Cross-browser compatible
- No external dependencies

## 🚀 Performance Optimizations
- Efficient event delegation
- Optimized CSS animations
- Lazy loading of song metadata
- Smooth scroll in song list

## 📝 Song Database
The player comes pre-configured with 5 sample songs. To add more songs:

1. Add your MP3 files to the `songs/` folder
2. Update the `songs` array in `script.js`:
```javascript
let songs = [
    {
        songName: "Your Song Name",
        filePath: "songs/songX.mp3",
        coverPath: "URL_TO_ALBUM_ART",
        artist: "Artist Name"
    },
    // Add more songs...
];
```

## 🐛 Known Issues & Future Improvements
- Audio file error handling can be enhanced
- Shuffle algorithm can be improved for better randomness
- Could add support for playlists creation
- Could add audio visualization
- Could add equalizer

## 📄 License
Open source - Feel free to use and modify!

## 👨‍💻 Created by
Sahil Saini

## 🎯 Enjoy Your Music! 🎶
