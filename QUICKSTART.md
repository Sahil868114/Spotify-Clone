# 🚀 Quick Start Guide - Spotify Clone

## Step 1: Prepare Your Environment
Make sure you have:
- A modern web browser (Chrome, Firefox, Edge, Safari)
- Your MP3 files ready

## Step 2: Add Your Songs
1. Create a folder named `songs` in the Spotify Clone directory (if it doesn't exist)
2. Add your MP3 files:
   - `song1.mp3`
   - `song2.mp3`
   - `song3.mp3`
   - `song4.mp3`
   - `song5.mp3`

## Step 3: Run the Player

### Option A: Using Python (Recommended)
```bash
cd "c:\Users\Sahil saini\Spotify Clone"
python -m http.server 8000
# or for Python 3
python3 -m http.server 8000
```

### Option B: Using Node.js
```bash
cd "c:\Users\Sahil saini\Spotify Clone"
npx http-server
```

### Option C: Direct File Access
Simply open `index.html` in your browser
(Note: Some browsers may block audio due to CORS - use Option A or B for best results)

## Step 4: Access the Player
- Open your browser and go to: **http://localhost:8000**
- Enjoy your music! 🎵

## ✨ Key Features at a Glance

| Feature | Shortcut |
|---------|----------|
| Play/Pause | `Space` or Click Play Button |
| Next Song | `→ Arrow` or Click Next |
| Previous Song | `← Arrow` or Click Previous |
| Shuffle | Click Shuffle Button |
| Repeat | Click Repeat Button |
| Add to Favorites | Click Heart Icon |
| Search Songs | Type in Search Box |
| Toggle Theme | Click Moon/Sun Icon |
| Adjust Volume | Use Volume Slider |

## 🎨 What's New in This Version

✅ **Fixed Bugs:**
- Play/pause button logic corrected
- File paths fixed (double .mp3 removed)
- Time display added
- Better song indexing

✅ **Modern Features:**
- Dark Spotify-like theme
- Volume control
- Shuffle & repeat modes
- Search functionality
- Favorites with localStorage
- Theme toggle (light/dark)
- Keyboard shortcuts
- Responsive design
- Now Playing indicator

✅ **Better UI/UX:**
- Smooth animations
- Hover effects
- Album art display
- Playlist tabs
- Artist names shown
- Time display (current/duration)

## 📝 Customization

### Add More Songs
Edit `script.js` and add to the `songs` array:
```javascript
{
    songName: "Song Title",
    filePath: "songs/songX.mp3",
    coverPath: "URL_TO_IMAGE",
    artist: "Artist Name"
}
```

### Change Colors
Edit `style.css` CSS variables:
```css
:root {
    --primary-color: #1DB954;
    --accent: #1ed760;
    /* etc */
}
```

## ⚠️ Troubleshooting

**Problem: Audio not playing**
- Solution: Ensure MP3 files are in the `songs/` folder with exact names
- Use a local server (Option A or B) instead of direct file access

**Problem: Search not working**
- Solution: Make sure song names in `script.js` match your actual files

**Problem: Favorites not saving**
- Solution: Check if localStorage is enabled in your browser
- Clear browser cache and refresh

## 🎯 Tips

1. **Organize Your Music**: Name your songs clearly for better search
2. **Use Keywords**: Song titles with artists are easier to find
3. **Explore Shortcuts**: Use keyboard shortcuts for faster control
4. **Create Playlists**: Use favorites to create personalized playlists
5. **Responsive Design**: Works great on phone, tablet, and desktop

## 🤝 Need Help?

- Check README.md for detailed documentation
- Inspect browser console for error messages
- Ensure all files are in the correct locations

---

**Happy Listening! 🎶**
