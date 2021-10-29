export default async function generatePeaks(samples, urlOrAudioBuffer, options = {}) {
  const AudioContext = options.audioContext ?? window.AudioContext ?? window.webkitAudioContext
  const fetch = options.fetch ?? window.fetch

  const audioContext = new AudioContext()
  let arrayBuffer = null

  if(urlOrAudioBuffer instanceof ArrayBuffer) {
    arrayBuffer = urlOrAudioBuffer
  } else {
    const response = await fetch(urlOrAudioBuffer)
    arrayBuffer = await response.arrayBuffer()
  }

  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer)

  const rawData = audioBuffer.getChannelData(options.audioChannel ?? 0)
  const blockSize = Math.floor(rawData.length / samples)
  const filteredData = []
  for (let i = 0; i < samples; i++) {
    let blockStart = blockSize * i
    let sum = 0
    for (let j = 0; j < blockSize; j++) {
      sum = sum + Math.abs(rawData[blockStart + j])
    }
    filteredData.push(sum / blockSize)
  }

  const multiplier = Math.pow(Math.max(...filteredData), -1)
  const normalizedData = filteredData.map(n => n * multiplier)

  return normalizedData
}
