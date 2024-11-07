# Uncle Blob JS

Unle blob is a self hosted object store that allows you to store blobs (Binary Large Objects) which is just data in its raw binary form like .png files or .mp3 files

This package, **uncleblob-js** is an library that allows you to easily interact with an uncle blob server. There in order to use it you need a uncle blob server running

# Getting Started

For more information on Uncle Blob Object Store Server and how to set up, [check out the docs](https://github.com/Tadiwr/uncleblob)

## 1. Installation

Now the next step is to install this package

    $ npm install uncleblob-js

If you are using pnpm

    $ pnpm add uncleblob-js

It will also be the same for yarn

## 2. Setting up Environment Variables

The package needs to where your uncle blob object server is running to do this define this variable in your `.env` file for your project

``` env
# This is usually the default url

UNCLE_BLOB_URL=http://localhost:5050
```
Now you can use uncle blob in your application

# Usage

## Uploading A file

``` ts
import {upload} from "uncleblob-js";

.
.
.

/** Uploading an image `steve.png` in the bucket avatars. The image is reprensented by the UserImage */

await upload({
    fileName: "steve.png",
    bucketName: "avatars",
    file: userImage
})

```



