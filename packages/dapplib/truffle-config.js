require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey prison suspect venture strong random stereo punch grace photo fresh general'; 
let testAccounts = [
"0x7743968c66e21c6883da34c233221cb195b8db1977601c9a1965384dbe6682bb",
"0x60c25d7f3011312d979460750837509c8b0eedfff2b24832fbf259ec8f2e9189",
"0x85578a9eb98729c8b89921187f86ca77eeaf6d64e5715ad0296d825660bb93c9",
"0xcc3befddf88cf90426e4d83c88f2640c84b04462bbbe5f1389d4379a9471782a",
"0xe377109a4cb5d184c9acdcdab7099d24e4fbc6b8c0ad74df4d51b51f138859c1",
"0x32e1b4bd08aa75a6931f857384f67403076bae8c42205e133337e6f7ace9b324",
"0x745104aa7cefbe02550edad83d6d7737efebe754622468da82bc55daeacbbf56",
"0x11b7ec881f8b0d69dbbc9385ad4d9f8a9501659e853d55f35aad5ab3f73a39f9",
"0x320f8476a23ac35b979887f44bee9a0d0b5a2e07626a7b82675dcb544d43e98e",
"0x5eb4c96df53cdfadde0065325746a235651428f0150d8d391655aea60d2c69ca"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
