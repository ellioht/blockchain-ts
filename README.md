# Blockchain TS

A simple Blockchain implementation in Typescript with testing using Jest framework.

## Installation

Install dependencies

```bash
npm i
```

## Usage

Run make to run the blockchain

```bash
make
```

Run make test to run the tests

```bash
make test
```

## Description

There are 3 main classes in this project:
- Block
- Blockchain
- Genesis

### Block

The Block class is the main building block of the blockchain. It contains the following properties:
- hash: The hash of the block
- data: The data of the block
- previousHash: The hash of the previous block

### Blockchain

The Blockchain class is the main class that contains the blocks. It contains the following properties:
- chain: The chain of blocks

It also contains the following methods:
- addBlock: Adds a block to the chain


### Genesis

The Genesis class is a helper class that creates the first block of the chain. It contains the following properties:
- genesisBlock: The first block of the chain

## License

[MIT](https://choosealicense.com/licenses/mit/)
