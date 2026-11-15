# Dosage

Static research website for tablet dosage forms.

## Features

- Patient mode
- Pharmacist/student mode
- Classification by:
  - method of preparation
  - route of administration
  - coated/modified systems
  - solution-preparation forms
- SVG visual placeholders instead of relying on images
- Styled video placeholders for every explanation section
- GitHub Pages compatible
- No build tools required

## Deployment to GitHub Pages

1. Create a new GitHub repository.
2. Upload all files to the repository root.
3. Go to:
   Settings → Pages
4. Under Source, choose:
   Deploy from a branch
5. Select:
   main / root
6. Save.

Your site will be available at:

https://USERNAME.github.io/REPO_NAME/

## Adding Real Videos

You can add videos later without changing the design.

### Option A: Local MP4

Put the file in:

assets/videos/your-video.mp4

Then inside `data/tablets.js`, find a section and add:

```js
video: {
  src: "./assets/videos/your-video.mp4",
  title: "My explanation",
  duration: "01:20"
}
