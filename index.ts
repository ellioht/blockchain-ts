import { createHmac } from 'crypto';

export class Block {
  hash: string;
  data: string;
  prevHash: string;

  constructor(data: string, prevHash: string) {
    this.hash = '';
    this.data = data;
    this.prevHash = prevHash;
    this.deriveHash();
  }

  private deriveHash() {
    const info = this.data + this.prevHash;
    const secret = 'secret';
    const hash = createHmac('sha256', secret).update(info).digest('hex');
    this.hash = hash;
  }
}

export class BlockChain {
  blocks: Block[];

  constructor() {
    this.blocks = [Genesis.createGenesisBlock()];
  }

  addBlock(data: string) {
    const prevBlock = this.blocks[this.blocks.length - 1];
    const newBlock = new Block(data, prevBlock.hash);
    this.blocks.push(newBlock);
  }
}

export class Genesis {
  static createGenesisBlock(): Block {
    return new Block('Genesis', '');
  }
}

function main() {
  console.log('Hello, world!');

  const chain = new BlockChain();

  chain.addBlock('First Block after Genesis');
  chain.addBlock('Second Block after Genesis');
  chain.addBlock('Third Block after Genesis');

  for (const block of chain.blocks) {
    console.log(`Previous Hash: ${block.prevHash}`);
    console.log(`Data in Block: ${block.data}`);
    console.log(`Hash: ${block.hash}`);
  }
}

main();
