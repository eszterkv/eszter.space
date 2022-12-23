---
title: CLI cheat sheet
layout: layouts/base.njk
---

# CLI cheat sheet

What’s running on port 3000?  
`lsof -i :3000`

What’s eating my memory?  
`top -o MEM`

Create an SSH key for GitHub  
`ssh-keygen -t rsa -C "your.email.used.on.github@example.com"`

Set default nvm version  
`nvm alias default X.Y.Z` (or just `nvm alias default X`

## Image manipulation

Tools: [imagemagick](https://imagemagick.org/script/download.php) and ffmpeg (`brew install ffmpeg`).

Create a favicon  
`magick input.png -resize 32x32 favicon.ico`

Extract first frame of a video to image  
`ffmpeg -i input.mp4 -vframes 1 output.png`

## Fun stuff
Check what time it is  
`date`

Check the weather  
`curl wttr.in/yourLocation`
