--- 
title: How I Backup My Photos on Amazon S3
date: 2012/08/1 12:30
tags: Backup, Amazon, Photography, S3
nav: blog
---

I recently upgraded to an SSD drive at [work](http://www.helloample.com/), which has been one of the wisest tech moves I've done. The only downside, however, is the significant reduction in space. I was once around 500GB, but have been reduced to 128GB.

Normally this wouldn't be a problem since I don't play many video games and I'm something of a [Rdio](http://rdio.com/) evangelist. But I'm quickly losing the space battle to my ever-growing collection of photos.

I shoot in RAW to preserve the best editing capabilities, and while this has a lot of benefits, it also has the added side effect of consuming a ton of hard drive space per photo. 

I had been using iPhoto for editing, but have recently switched to X and have since adjusted my photo editing workflow to cut down on the amount of photos I'm keeping. iPhoto would keep a copy of every original photo I took, and while that may be good for some instances, it didn't make much sense for me given the amount of photos I take on a given day out. I've since switched to selecting the best photos in Adobe Bridge and archiving the ones I know won't work before I import the saved ones into Lightroom or Photoshop. I'll then upload my edited photos to Flickr to keep.

But I do have a ton of legacy files leftover from my iPhoto days that I didn't just want to toss and I don't really have the time to sort through thousands of photos to see which ones I want to keep and which ones I can send to the Cloud.

I explored a range of different options including Dropbox, but ultimately decided on hosting my backups on Amazon's S3 Service. I am not going to be routinely accessing these photos at any point so my storage costs are quite low.

There are a number of different solutions out there to help get your files to your Amazon S3, but the best I found was (s3fs)[http://code.google.com/p/s3fs/].

### Installation Instructions for s3fs ###
* Install Homebrew
* Install s3fs with: brew install s3fs
* Follow the instructions after you type the command: brew info fuse4x-kext
* Install the Fuse4x Kernel Extension: sudo cp -rfX /usr/local/Cellar/fuse4x-kext/0.9.1/Library/Extensions/fuse4x.kext /Library/Extensions && sudo chmod +s /Library/Extensions/fuse4x.kext/Support/load_fuse4x
* Create a .passwd-s3fs in your ~/User directory and add these two lines of information from your Amazon S3 account using this format: accesskeyId:secretAccessKey
* Change the permissions on this file: chmod 600 ~/.passwd-s3fs
* Create a shell script to automatically mount and copy your directory over to your S3
** /usr/bin/s3fs procload/iPhotoBackup/ ~/S3
** /usr/bin/rsync -avz --delete ~/ ~/s3
** /bin/umount ~/S3
* Run this script and automatically upload my RAW photos whenever I transfer files to my Mac.