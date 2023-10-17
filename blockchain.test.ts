import {describe, expect, test} from '@jest/globals';

import { Block, BlockChain, Genesis } from './index';

describe('BlockChain', () => {
  let chain: BlockChain;

  beforeEach(() => {
    chain = new BlockChain();
  });

  it('should create a new blockchain with a Genesis block', () => {
    expect(chain.blocks).toHaveLength(1);
    expect(chain.blocks[0].data).toBe('Genesis');
    expect(chain.blocks[0].prevHash).toBe('');
  });

  it('should add a new block to the blockchain', () => {
    const data = 'Test Block Data';
    chain.addBlock(data);
    expect(chain.blocks).toHaveLength(2);
    expect(chain.blocks[1].data).toBe(data);
    expect(chain.blocks[1].prevHash).toBe(chain.blocks[0].hash);
  });
});

describe('Block', () => {
  it('should create a new block with the correct hash', () => {
    const data = 'Test Data';
    const prevHash = 'PrevHash123';
    const block = new Block(data, prevHash);
    const expectedInfo = data + prevHash;
    const secret = 'secret';
    const expectedHash = require('crypto').createHmac('sha256', secret).update(expectedInfo).digest('hex');
    expect(block.data).toBe(data);
    expect(block.prevHash).toBe(prevHash);
    expect(block.hash).toBe(expectedHash);
  });
});

describe('Genesis', () => {
  it('should create a Genesis block', () => {
    const genesisBlock = Genesis.createGenesisBlock();
    expect(genesisBlock.data).toBe('Genesis');
    expect(genesisBlock.prevHash).toBe('');
  });
});
