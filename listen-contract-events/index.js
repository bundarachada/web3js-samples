
const Web3 = require('web3');
const {AxieClockAuctionContract} = require("../contract/AxieClockAuctionContract");
const INFURA_KEY = process.env.INFURA_KEY;
const INFURA_URL = `wss://mainnet.infura.io/ws/v3/${INFURA_KEY}`
const web3 = new Web3(INFURA_URL);


const contract = new web3.eth.Contract(
    AxieClockAuctionContract.ABI,
    AxieClockAuctionContract.ADDRESS
);

contract.events.allEvents()
    .on('data', (event) => {
        console.log(event);
    })
    .on('error', console.error);
