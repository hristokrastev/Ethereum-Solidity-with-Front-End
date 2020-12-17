const path = require('path');
const fs = require('fs');
const solc = require('solc');
const { compile } = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'inbox.sol');

const source = fs.readFileSync(inboxPath, 'utf8');

module.exports = solc.compile(source, 1).contracts[':inbox'];

 //const input = fs.readFileSync('inbox.sol');

 //const output = solc.compile(input.toString(), 1);
 //const bytecode = source.contracts[':Inbox'].bytecode;
 //const abi = JSON.parse(source.contracts[':Inbox'].interface);