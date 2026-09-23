# DEEPKIL — Premium Indian Toilet Cleaner Brand Website

A premium, modern FMCG website for **DEEPKIL** (Toilet Cleaner).

![DEEPKIL Brand](assets/images/deepkil-logo.png)

## 🌟 Brand Overview
- **Brand Name:** DEEPKIL
- **Product Category:** Toilet Cleaner (Specialist Hard-Water & Limescale Formula)
- **Visual Identity:** Deep Royal Blue (`#061F5F`, `#0A2E8E`), Bold Red (`#E51A24`), Crisp White (`#FFFFFF`).
- **Brand Personality:** Powerful, trustworthy, hygienic, modern, energetic, and reliable.
- **Target Audience:** Indian households, homemakers, retail kirana partners, and hygiene-conscious families across municipal and borewell water regions.

---

## 📁 Repository Structure
```text
├── index.html            # Main semantic HTML5 web page (GitHub Pages root)
├── styles.css            # Modular CSS3 design system, tokens & animations
├── script.js             # Interactive engine (slider, modals, drawers, tabs)
├── assets/
│   └── images/           # Brand logo and 3D product packaging renders
├── setup_images.sh       # One-click asset sync utility
├── .gitignore            # Git ignore configuration
└── README.md             # Project documentation
```

---

## 🚀 GitHub Repository & Deployment Guide

This project fully conforms to GitHub and GitHub Pages repository standards:
- **Zero hardcoded machine paths:** All assets and references are strictly relative.
- **Ready for GitHub Pages:** `index.html` is at the repository root.
- **Pure Vanilla Web Stack:** Zero build step needed, blazing fast loading.

### 1. Initialize Git Repository
Run the following commands in your terminal:

```bash
# 1. Sync assets into the local assets folder
chmod +x setup_images.sh && ./setup_images.sh

# 2. Initialize git repository
git init

# 3. Stage all files
git add .

# 4. Commit files
git commit -m "feat: complete DEEPKIL FMCG brand website"
```

### 2. Connect to Your GitHub Repository
Create a new repository on GitHub (e.g., `deepkil-website`), then push:

```bash
# Set default branch to main
git branch -M main

# Add your GitHub remote (replace with your repo URL)
git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git

# Push to GitHub
git push -u origin main
```

### 3. Enable 1-Click Free Hosting on GitHub Pages
1. Go to your repository on GitHub.
2. Navigate to **Settings** > **Pages**.
3. Under **Branch**, select `main` and `/ (root)`.
4. Click **Save**.
5. Your live website will be accessible at: `https://<YOUR-USERNAME>.github.io/<YOUR-REPO-NAME>/`.

---

## 💻 Local Preview
To preview locally on your computer:
```bash
# Python 3:
python3 -m http.server 8000

# or Node npx serve:
npx serve .
```
Then open `http://localhost:8000` in your web browser.

---

## 🛡️ License
© 2026 DEEPKIL. All rights reserved.
