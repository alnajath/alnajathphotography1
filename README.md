# ALNJATH PHOTOGRAPHY — Website Setup Guide

## How to Add Your Photos

All photos go inside the `images/` folder.

---

### 1. Hero Photo (Main large photo on the homepage)
- File name: `images/hero-photo.jpg`
- In index.html line: `src="images/hero-photo.jpg"`
- Recommended size: 800px × 1000px (portrait/tall)

---

### 2. About Photo (Photo of yourself in the About section)
- File name: `images/about-photo.jpg`
- In index.html line: `src="images/about-photo.jpg"`
- Recommended size: 600px × 750px

---

### 3. Portfolio Photos (Your work gallery)
Replace the filenames in the portfolio section:

| HTML src          | What it shows          | Category   |
|-------------------|------------------------|------------|
| images/photo1.jpg | Portfolio image 1      | portrait   |
| images/photo2.jpg | Portfolio image 2      | wedding    |
| images/photo3.jpg | Portfolio image 3      | landscape  |
| images/photo4.jpg | Portfolio image 4      | event      |
| images/photo5.jpg | Portfolio image 5      | portrait   |
| images/photo6.jpg | Portfolio image 6      | landscape  |
| images/photo7.jpg | Portfolio image 7      | wedding    |
| images/photo8.jpg | Portfolio image 8      | event      |

Recommended size: At least 800px × 600px for best quality.

---

### 4. Adding More Portfolio Photos
To add more photos, copy this block inside `.portfolio-grid` in index.html:

```html
<div class="portfolio-item" data-category="portrait">
  <img src="images/your-new-photo.jpg" alt="Description of photo"
    onerror="this.parentElement.querySelector('.port-placeholder').style.display='flex'; this.style.display='none';" />
  <div class="port-placeholder"><span>📷</span><p>your-new-photo.jpg</p></div>
  <div class="port-overlay">
    <p class="port-cat">Portrait</p>
    <h3 class="port-title">Photo Title Here</h3>
  </div>
</div>
```

Change `data-category` to: `portrait`, `wedding`, `landscape`, or `event`

---

### 5. Update Contact Info
In index.html, find the booking section and update:
- Email: `alnjath@photography.com`
- Phone: `+1 (000) 000-0000`
- Location: `Your City, Country`

---

### 6. Update Social Media Links
Find the footer and replace `href="#"` with your actual profile URLs.

---

## File Structure
```
ALNJATHPHOTOGRAPHY/
├── index.html          ← Main website file
├── css/
│   └── style.css       ← All styling
├── js/
│   └── main.js         ← Interactivity
├── images/             ← PUT ALL YOUR PHOTOS HERE
│   ├── hero-photo.jpg
│   ├── about-photo.jpg
│   ├── photo1.jpg
│   ├── photo2.jpg
│   └── ... (more photos)
└── README.md           ← This file
```

## Opening the Website
Double-click `index.html` to open in your browser, OR
upload all files to any web hosting service.
