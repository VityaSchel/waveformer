# Waveformer

Calculates peaks of audio **without drawing it to canvas or creating audio**.

## How it works

I receive: number of peaks and URL of track/its `ArrayBuffer`

You receive: `[0, 0, 0.2, 0.5, 0.6, 0.8, 0.6, 0.5, 0.1, 0]`

Based on [Article from CSS Tricks](https://css-tricks.com/making-an-audio-waveform-visualizer-with-vanilla-javascript/)

## Installation

```
$ npm i waveformer
```

## Usage

Only works in environment where `AudioContext` and `fetch` are defined, but you can provide your own through options (not tested in node.js, please use [node-waveform](https://www.npmjs.com/package/node-waveform) or [waveform-node](https://www.npmjs.com/package/waveform-node))

```javascript
import waveformer from 'waveformer'

const points = await waveformer(100, 'https://api.allorigins.win/raw?url=https://www.myinstants.com/media/sounds/epic.mp3')
```

options object:

```javascript
waveformer(peaksNumber<Number>, url<String>, options<Object>)

options = {
  audioContext: AudioContext class,
  fetch: fetch async function,
  audioChannel: Number, // channel from which we should get data, default: 0
}
```

Glory to micro-packages!

P.S: To person who published package at this name but then unpublished it. Blame yourself only, haha! 😝