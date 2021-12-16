const SHA256 = require('crypto-js/SHA256');

class Block{
    constructor(index, timestamp, data, previousHash = ''){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    calculateHash(){
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
}

class Blockchain{
    constructor(){
        this.chain = {this.createGenesisBlock()}
    }

    createGenesisBlock(){
        return new Block(0, 14/12/2021, "Genesis Block", "0")
    }

    getLatestBlock(){
        return this.chain{this.chain.length - 1};
    }

    addBlock(newBlock){
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
}

let DICEcoin = new Blockchain();
DICEcoin.addBlock(new Block(1,14/12/2021,"Amount: 4",))
DICEcoin.addBlock(new Block(2,15/12/2021, "Amount:10"))

console.log(JSON.stringify(DICecoin, null, 4));