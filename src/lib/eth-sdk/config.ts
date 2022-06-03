import { defineConfig } from '@dethcrypto/eth-sdk'

export default defineConfig({
  contracts: {
    polygon: {
      lensHub: '0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d'
    }
  },
  rpc: {
    polygon: 'https://matic-mainnet.chainstacklabs.com'
  },
  outputPath: './src/lib/eth-sdk'
})
