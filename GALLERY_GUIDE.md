# How to Upload Photos to your Gallery via GitHub

To add your own photos to the "Arena Gallery" section of your website, follow these simple steps:

### 1. Upload Images to GitHub
1. Go to your repository on GitHub: `https://github.com/gauthamkuckian/Dropouts-Arena-gs`
2. **For Assets (Logo & Backgrounds):**
   - Upload your logo to: `public/images/logo.png`
   - Upload your turf background to: `public/images/arena.png`
3. **For the Gallery:**
   - Create a folder named `public/gallery` (if it doesn't exist).
   - Click "Add file" -> "Upload files".
   - Upload your photos (try to keep them under 1MB each for faster loading).
   - Name them simply, e.g., `turf-1.jpg`, `lounge-1.jpg`, etc.
4. Commit the changes.

### 2. Update the Code
Once your images are uploaded, you need to tell the website to show them.
1. Open `src/App.tsx`.
2. Find the `Gallery Section` part of the code (around line 300).
3. Instead of the placeholder images, update the `src` attribute of the `<img>` tags to point to your new files:
   ```tsx
   <img 
     src="/gallery/turf-1.jpg" 
     alt="Arena View"
     className="..."
   />
   ```

### 3. (Advanced) Automatic Gallery
If you want the gallery to automatically show all images in the folder, you would typically need a backend or a script. For a static GitHub site, the easiest way is to maintain a simple 'list' in the code:

```tsx
const galleryImages = [
  '/gallery/turf-1.jpg',
  '/gallery/turf-2.jpg',
  '/gallery/lounge-1.jpg',
  // Add more paths here as you upload them
];
```

Then map through this `galleryImages` array in the JSX.

---
### 4. Pushing via Command Line (Advanced)
If you have Git installed on your computer:
1. Copy your images into the `public/images/` and `public/gallery/` folders on your computer.
2. Open your terminal in the project folder.
3. Run these commands:
   ```bash
   git add .
   git commit -m "Add new arena images and logo"
   git push origin main
   ```

---
**Tip:** Use an image compressor like [TinyJPG](https://tinyjpg.com) before uploading to GitHub to ensure your website remains lightning fast!
