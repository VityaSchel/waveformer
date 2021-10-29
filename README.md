# Waveformer

Calculates peaks of audio **without drawing it to canvas or creating audio**.

## How it works

![](https://user-images.githubusercontent.com/59040542/139410069-8d1d3413-7dd9-4580-8217-8b9691a45bfa.png)

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