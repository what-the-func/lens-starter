import { initWeb3W } from 'web3w'
import { WalletConnectModuleLoader } from 'web3w-walletconnect-loader'

const walletStores = initWeb3W({
  chainConfigs: {},
  transactions: {
    autoDelete: false,
    finality: 12
  },
  flow: {
    autoUnlock: true
  },
  builtin: {
    autoProbe: true
  },
  options: [
    'builtin',
    new WalletConnectModuleLoader({
      chainId: '137',
      nodeUrl: 'https://matic-mainnet.chainstacklabs.com'
    })
  ]
})

export const { wallet, transactions, builtin, chain, balance, flow, fallback } = walletStores
