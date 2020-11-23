const abiDecoder = require('abi-decoder');
const axieClockAuctionAbi = require('./axie_clock_auction_abi.json')

//transaction => https://etherscan.io/tx/0x09e4cea32cb0d581070f440c241f72fbb5111946bcbe581a0ce358cea3a97298
const data = '0x59d667a5000000000000000000000000f5b0a3efb8e8e4c201e2a935f110eaaf3ffecb8d000000000000000000000000000000000000000000000000000000000002e345'

abiDecoder.addABI(axieClockAuctionAbi);
const decodedData = abiDecoder.decodeMethod(data);
console.log(decodedData)
