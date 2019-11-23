import { initialize, Endpoint } from '@muzilator/sdk'

const init = async () => {
  const platform = await initialize()
  // await platform.loadLibrary('bubbles-vanilla-example', 'bubbles', 'primary')
  await platform.loadLibrary('piano-keyboard', 'piano-keyboard', 'primary')
  await platform.loadLibrary('midi-synth', 'synth')

  await platform.connectChannels(Endpoint('piano-keyboard', 'midi'), Endpoint('synth', 'midi'))
}

init()
