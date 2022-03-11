const Web3 = require('web3')

const web3 = new Web3('https://mainnet-rpc.thundercore.com')

const contact = "0x1e053d89e08c24aa2ce5c5b4206744dc2d7bd8f5"

const pkey = '041435052a21dc9c654d0a619069616a58349eaa2eed05e0b718b0bd7d3a8e8a'

const to = '0xA4f596824e2d7C3863AF0ba8006E2342Ae4dB1f8'

const account = web3.eth.accounts.privateKeyToAccount(pkey)

const holder = account.address
web3.eth.accounts.wallet.add(account)
web3.eth.defaultAccount = holder







